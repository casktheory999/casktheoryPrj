import { useEffect, useState } from "react";

export default function SideTOC() {
  const [active, setActive] = useState("w_base");

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-w-toc]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="w_side_toc">
      <ul>
        <li
          className={active === "w_base" ? "active" : ""}
          onClick={() => scrollTo("w_base")}
        >
          01 六大基酒
        </li>
        <li
          className={active === "w_classics" ? "active" : ""}
          onClick={() => scrollTo("w_classics")}
        >
          02 經典調酒
        </li>
        <li
          className={active === "w_standard" ? "active" : ""}
          onClick={() => scrollTo("w_standard")}
        >
          03 大眾調酒
        </li>
      </ul>
    </aside>
  );
}