import { useEffect, useMemo, useRef, useState } from "react";
import "../scss/side-toc.scss";

/** 極座標 -> 直角座標（SVG 用） */
function polar(cx, cy, r, deg) {
  const rad = (Math.PI / 180) * deg;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/** 產生一段圓弧 path（小於 180°） */
function arcPath(cx, cy, r, startDeg, endDeg) {
  const s = polar(cx, cy, r, startDeg);
  const e = polar(cx, cy, r, endDeg);
  const large = endDeg - startDeg <= 180 ? 0 : 1;
  const sweep = 1; // 順時針
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} ${sweep} ${e.x} ${e.y}`;
}

const NAV_OFFSET = 60; // 若有固定導覽列，改成你的高度
const ORANGE = "#ff6a2b";
const DARK   = "#1f1f1f";
const GREY   = "#d9d9d9";

export default function SideTOCRight() {
  const [active, setActive] = useState("w_base");
  const ref = useRef(null);

  // 右半圓
const R = 130;               // 半徑（加大）
const CX = 130, CY = 130;    // 圓心
const STROKE = 12;
const SIZE = 260;
const PAD = 0;               // 不留白，貼齊邊界

  const segments = useMemo(() => ([
    { id: "seg1", start: -90, end: -30 },
    { id: "seg2", start: -30, end:  30 },
    { id: "seg3", start:  30, end:  90 },
  ]), []);

  const colors = useMemo(() => {
    if (active === "w_base")     return [ORANGE, GREY,   GREY];
    if (active === "w_classics") return [GREY,   ORANGE, GREY];
    if (active === "w_standard") return [GREY,   GREY,   ORANGE];
    return [GREY, GREY, GREY];
  }, [active]);

  // 監聽章節，高亮目前 active
  useEffect(() => {
    const secs = document.querySelectorAll("section[data-w-toc]");
    if (!secs.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.55, rootMargin: `-${NAV_OFFSET}px 0px 0px 0px` }
    );
    secs.forEach(s => io.observe(s));
    return () => secs.forEach(s => io.unobserve(s));
  }, []);

  // 位置邏輯：起始在 hero 下→吸到中間→footer 前停住
  useEffect(() => {
    const root = document.documentElement;
    const footer = document.querySelector("footer, .site-footer, #footer");

    function heroH() {
      const v = getComputedStyle(root).getPropertyValue("--hero-h").trim();
      const n = parseFloat(v);
      return Number.isFinite(n) ? n : 420;
    }
    function place() {
      const initTop = heroH() + 60;
      const vh = window.innerHeight;
      const h = ref.current?.offsetHeight ?? 0;
      const centerTop = Math.max(24, (vh - h) / 2);

      let topPx = initTop - window.scrollY;
      if (topPx < centerTop) topPx = centerTop;

      if (footer) {
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;
        const maxViewportTop = footerTop - window.scrollY - h - 24;
        topPx = Math.min(topPx, maxViewportTop);
      }
      root.style.setProperty("--toc-top", `${Math.max(0, topPx)}px`);
    }
    place();
    window.addEventListener("scroll", place, { passive: true });
    window.addEventListener("resize", place);
    return () => {
      window.removeEventListener("scroll", place);
      window.removeEventListener("resize", place);
    };
  }, []);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    // 優先以每個 section 內的橘色大數字（.w_section_idx）作為對齊點
    const idx = el.querySelector('.w_section_idx');
    const extra = 8;
    let y;
    if (idx) {
      y = idx.getBoundingClientRect().top + window.scrollY - NAV_OFFSET - extra;
    } else {
      y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    }
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    setActive(id);
  };

  return (
  <aside ref={ref} className="w_toc_right" aria-label="章節導覽">
    {/* 加 padding 的 viewBox，並讓 overflow 可見 */}
    <svg
      className="w_toc_right__svg"
      width={SIZE}
      height={SIZE}
      viewBox={`${-PAD} ${-PAD} ${SIZE + PAD * 2} ${SIZE + PAD * 2}`}
      aria-hidden
    >
      {segments.map((seg, i) => (
        <path
          key={seg.id}
          d={arcPath(CX, CY, R, seg.start, seg.end)}
          fill="none"
          stroke={colors[i]}
          strokeWidth={STROKE}
          strokeLinecap="butt"
          strokeLinejoin="round"
        />
      ))}
      {/* ⛔️ 刪掉這條外框細線（就是你說的不要的那條） */}
      {/* （整段移除）
      <path
        d={arcPath(CX, CY, R, -90, 90)}
        fill="none"
        stroke={DARK}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      */}
    </svg>


      {/* 文字清單（在右半圓內側） */}
      <ol className="w_toc_right__list">
        <li className={active==="w_base" ? "is-active":""} onClick={()=>jump("w_base")}>
          <span className="no">01</span><span className="title">六大基酒</span>
        </li>
        <li className={active==="w_classics" ? "is-active":""} onClick={()=>jump("w_classics")}>
          <span className="no">02</span><span className="title">經典調酒</span>
        </li>
        <li className={active==="w_standard" ? "is-active":""} onClick={()=>jump("w_standard")}>
          <span className="no">03</span><span className="title">大眾調酒</span>
        </li>
      </ol>
    </aside>
  );
}
