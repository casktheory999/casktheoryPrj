import { useMemo, useState } from "react";
export default function W_Card({ zh, en, img, highlight, align = "left",onClick}) {

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

  const alignClass = align === "right" ? " is-right" : " is-left";

  const handleClick=(e)=>{
    if (e.target.closest('.w_card_visual') && onClick) {
      onClick(en);
    }
  };

  return (
    <div className={`w_card${alignClass}`} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="w_card_visual">
        <div className="w_card_frame">
          <div className="w_card_bg" />
          {img ? (
            <img className="w_card_img" src={img} alt={`${zh} ${en}`} />
          ) : (
            <div className="w_img_placeholder" />
          )}
          <div className="w_card_meta">
            <div className="w_card_name">{zhNode}</div>
            <div className="w_card_en">{enNode}</div>
          </div>
        </div>
      </div>
    </div>
  );
}