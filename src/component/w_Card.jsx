import { useMemo, useState } from "react";
export default function W_Card({ zh, en, img, highlight }) {
  const [saved, setSaved] = useState(false);

  const zhNode = useMemo(() => {
    if (!highlight) return zh;
    const idx = zh.indexOf(highlight);
    if (idx === -1) return zh;
    const before = zh.slice(0, idx);
    const after = zh.slice(idx + highlight.length);
    return (
      <>
        {before}
        <mark>{highlight}</mark>
        {after}
      </>
    );
  }, [zh, highlight]);

  const enNode = useMemo(() => {
    if (!highlight) return en;
    const low = en.toLowerCase();
    const q = highlight.toLowerCase();
    const idx = low.indexOf(q);
    if (idx === -1) return en;
    const before = en.slice(0, idx);
    const hit = en.slice(idx, idx + highlight.length);
    const after = en.slice(idx + highlight.length);
    return (
      <>
        {before}
        <mark>{hit}</mark>
        {after}
      </>
    );
  }, [en, highlight]);

  return (
    <div className={`w_card${saved ? " is-saved" : ""}`}>
      <div className="w_card_visual">
        <div className="w_card_meta">
          <div className="w_card_name">{zhNode}</div>
          <div className="w_card_en">{enNode}</div>
        </div>
        <div className="w_card_bg" />
        {img ? (
          <img className="w_card_img" src={img} alt={`${zh} ${en}`} />
        ) : (
          <div className="w_img_placeholder" />
        )}

        <button
          type="button"
          className={`w_bookmark${saved ? " is-active" : ""}`}
          aria-pressed={saved}
          aria-label={saved ? "取消收藏" : "加入收藏"}
          onClick={() => setSaved((v) => !v)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              className="w_bookmark_path"
              d="M6 3h12a1 1 0 0 1 1 1v16.382a.5.5 0 0 1-.79.407L12 17.5l-6.21 3.289A.5.5 0 0 1 5 20.382V4a1 1 0 0 1 1-1z"
            />
          </svg>
        </button>
      </div>


    </div>
  );
}