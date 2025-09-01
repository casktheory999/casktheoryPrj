import { useState } from "react";

export default function W_Card({ zh, en, img, bookmarked: init=false }) {
  const [bookmarked, setBookmarked] = useState(init);

  return (
    <div className="w_card">
      <div className="w_card_thumb">
        <button
          className={`w_card_flag ${bookmarked ? "is_on" : ""}`}
          aria-label="toggle bookmark"
          onClick={() => setBookmarked(v => !v)}
        />
        <img src={img} alt={`${zh} ${en}`} />
      </div>
      <div className="w_card_meta">
        <div className="w_card_name">{zh}</div>
        <div className="w_card_en">{en}</div>
      </div>
    </div>
  );
}