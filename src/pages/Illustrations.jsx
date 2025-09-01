import "../scss/illustrations.scss";

import W_Card from "../component/w_Card.jsx";

const w_baseSpirits = [
  { zh: "伏特加", en: "Vodka",  img: "/vodka.png" },
  { zh: "琴酒",   en: "Gin",     img: "/gin.png" },
  { zh: "蘭姆酒", en: "Rum",     img: "/rum.png" },
  { zh: "龍舌蘭", en: "Tequila", img: "/tequila.png" },
  { zh: "威士忌", en: "Whiskey", img: "/whiskey.png" },
  { zh: "白蘭地", en: "Brandy",  img: "/brandy.png" },
];

const w_classics = [
  { zh: "黛綺莉",   en: "Daiquiri", img: "/daiquiri.png" },
  { zh: "內格羅尼", en: "Negroni",  img: "/negroni.png" },
  { zh: "邊車",     en: "Sidecar",  img: "/sidecar.png" },
];

const w_standard = [
  { zh: "柯夢波丹",     en: "Cosmopolitan",        img: "/cosmo.png" },
  { zh: "長島冰茶",     en: "Long Island Iced Tea", img: "/lit.png" },
  { zh: "龍舌蘭日出",   en: "Tequila Sunrise",     img: "/sunrise.png" },
];

export default function Illustrations() {
  return (
    <main className="w_illustrations">
      {/* Hero */}
      <section className="w_hero">
        <div className="w_hero_container">
          <div className="w_hero_panel">
            <h2 className="w_hero_title">今日推薦｜邊車 Sidecar</h2>
            <p className="w_hero_desc">以白蘭地、橙酒與檸檬為基底，香橙明亮、收尾俐落。</p>
          </div>
          <div className="w_hero_vertical">酒精圖鑑</div>
        </div>
      </section>

      {/* 01 六大基酒 */}
      <section id="w_base" data-w-toc className="w_section">
        <div className="w_section_header">
          <span className="w_section_index">01</span>
          <span className="w_section_zh">六大基酒</span>
          <span className="w_section_en">Six Base Spirits</span>
        </div>
        <div className="w_cards">
          {w_baseSpirits.map(item => (
            <W_Card key={item.en} {...item} />
          ))}
        </div>
      </section>

      {/* 02 經典調酒 */}
      <section id="w_classics" data-w-toc className="w_section">
        <div className="w_section_header">
          <span className="w_section_index">02</span>
          <span className="w_section_zh">經典調酒</span>
          <span className="w_section_en">Classic Cocktails</span>
        </div>
        <div className="w_cards">
          {w_classics.map(item => (
            <W_Card key={item.en} {...item} />
          ))}
        </div>
      </section>

      {/* 03 大眾調酒 */}
      <section id="w_standard" data-w-toc className="w_section">
        <div className="w_section_header">
          <span className="w_section_index">03</span>
          <span className="w_section_zh">大眾調酒</span>
          <span className="w_section_en">Bar Standard</span>
        </div>
        <div className="w_cards">
          {w_standard.map(item => (
            <W_Card key={item.en} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}