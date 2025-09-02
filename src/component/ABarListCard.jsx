import { Link } from "react-router-dom";

/**
 * ABarListCard
 * - 整張卡片可點（Link 包住）
 * - 右上角有收藏/愛心按鈕（不會觸發跳轉）
 *
 * 建議 props（清楚直觀）：
 * id           ：卡片/酒吧 id，用來組合連結
 * name         ：店名
 * image        ：主圖 src
 * description  ：簡短描述（可在 CSS 做兩行截斷）
 * mrtLine      ：站名/線名（例如：士林站）
 * lineColor    ：線色（可選，用 CSS 變數做色條）
 * liked        ：是否已收藏（布林，可選）
 * onToggleLike ：切換收藏狀態的 callback（可選）
 */
export default function ABarListCard({
  id,
  name,
  image,
  description,
  mrtLine,
  lineColor,
  liked = false,
  onToggleLike = () => {},
}) {
  // 點擊愛心時，不要觸發 Link 的導頁
  const handleFavClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleLike(id);
  };

  return (
    <Link to={`/BarInnerPage/${id}`} className="aBarListCard">
      {/* 圖片區 */}
      <div className="aListCard_imageBox">
       <img
          className="aListCard_image"
          src={image}
          alt={`${name} 圖片`}
          loading="lazy"
        />

        {/* 收藏按鈕（簡化版） */}
        <button
          type="button"
          className={`aListCard_favoriteBtn${liked ? " is-liked" : ""}`}
          aria-pressed={liked}
          aria-label={liked ? "取消收藏" : "加入收藏"}
          title={liked ? "取消收藏" : "加入收藏"}
          onClick={handleFavClick}
        >
          {/* 心形圖示：未收藏是線條、已收藏可用填色（之後用 CSS 控制顏色即可） */}
          <svg className="aListCard_icon" viewBox="0 0 24 24">
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
              className="aListCard_heartPath"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
      </div>

      {/* 文字區 */}
      <div className="aListCard_content">
        <h3 className="aListCard_title">{name}</h3>
        {mrtLine && (
          <span
            className="aListCard_mrtTag"
            style={lineColor ? { "--lineColor": lineColor } : undefined}
          >
            {mrtLine}
          </span>
        )}
        <p className="aListCard_desc">{description}</p>
      </div>
    </Link>
  );
}
