import { useMemo, useState } from "react";
import "../scss/illustrations.scss";
import SideTOC from '../component/SideTOC.jsx';
import "../scss/side-toc.scss";
import W_Card from "../component/w_Card.jsx";

export default function Illustrations() {
    const [keyword, setKeyword] = useState("");

    const base = useMemo(() => ([
        { zh: "伏特加", en: "Vodka", img: "./images/Vodka.png" },
        { zh: "琴酒", en: "Gin", img: "./images/Gin.png" },
        { zh: "蘭姆酒", en: "Rum", img: "./images/Rum.png" },
        { zh: "龍舌蘭", en: "Tequila", img: "./images/Tequila.png" },
        { zh: "威士忌", en: "Whiskey", img: "./images/Whiskey.png" },
        { zh: "白蘭地", en: "Brandy", img: "./images/Brandy.png" },
    ]), []);

    const classics = useMemo(() => ([
        { zh: "黛綺麗", en: "Daiquiri", img: "./images/Daiquiri.png" },
        { zh: "內格羅尼", en: "Negroni", img: "./images/Negroni.png" },
        { zh: "邊車", en: "Sidecar", img: "./images/Sidecar.png" },
    ]), []);

    const standard = useMemo(() => ([
        { zh: "柯夢波丹", en: "Cosmopolitan", img: "./images/Cosmopolitan.png" },
        { zh: "長島冰茶", en: "Long Island Iced Tea", img: "./images/Long Island Iced Tea.png" },
        { zh: "龍舌蘭日出", en: "Tequila Sunrise", img: "./images/Tequila Sunrise.png" },
    ]), []);

    const q = keyword.trim().toLowerCase();
    const match = (item) => !q || item.zh.includes(keyword.trim()) || item.en.toLowerCase().includes(q);
    const baseF = base.filter(match);
    const classicsF = classics.filter(match);
    const standardF = standard.filter(match);
    const empty = !baseF.length && !classicsF.length && !standardF.length;
    const isSearching = q.length > 0;
    const combinedF = [...baseF, ...classicsF, ...standardF];

    return (
        <>
            <section className="w_hero_full" style={{ "--w-hero-img": "url(./images/hero-drink.png)" }}>
                <div className="w_hero_mask" />
                <div className="w_hero_inner">
                    {/* 左側推薦卡 */}
                    <div className="w_hero_panel">
                        <h3>今日推薦</h3>
                        <h2>邊車 <span>Side car</span></h2>
                        <p>經典入口時酸甜均衡，口感清爽且酒體集中，既優雅又具力道。
                            具代表性的經典調酒，酸甜的口感相當適合夏天入口。</p>
                    </div>

                    {/* 中間細線 */}
                    <div className="w_hero_divider" aria-hidden />

                    {/* 右側直式標題 */}
                    <div className="w_hero_vtitle">酒精圖鑑</div>
                </div>
            </section>
            <div className="w_search_wrap">
                <label className="barSearch">
                    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="11" cy="11" r="7" stroke="currentColor" fill="none" strokeWidth="2" />
                        <line x1="16.65" y1="16.65" x2="22" y2="22" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <input
                        type="search"
                        placeholder="搜尋酒種"
                        aria-label="搜尋酒種"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </label>
            </div>
            {/* 主內容 */}
            <main className={`w_illustrations${isSearching ? " is-searching" : ""}`}>
                {!isSearching && <SideTOC />}

                {/* 空狀態（搜尋時） */}
                {isSearching && empty && (
                    <section aria-live="polite" className="w_container">
                        <p style={{ color: "#777", padding: "16px 6px" }}>找不到符合「{keyword}」的結果，請試試其他關鍵字。</p>
                    </section>
                )}

                {/* 合併的搜尋結果列表 */}
                {isSearching && !empty && (
                    <section aria-live="polite" className="w_container">
                        <div className="w_cards">
                            {combinedF.map((c) => (
                                <W_Card key={`${c.en}-${c.zh}`} zh={c.zh} en={c.en} img={c.img} highlight={keyword.trim()} />
                            ))}
                        </div>
                    </section>
                )}

                {!isSearching && (<>
                {/* 01 */}
                <section id="w_base" data-w-toc>
                    <div className="w_container">
                        {!isSearching && (
                            <header className="w_section_title">
                                <div className="w_section_wrap">
                                    <span className="w_section_idx">01</span>
                                    <div className="w_section_bar">
                                        <span className="w_section_zh">六大基酒</span>
                                        <span className="w_section_en">Six Base Spirits</span>
                                    </div>
                                </div>
                            </header>
                        )}
                        <div className="w_cards">
                            {baseF.map((c) => (
                                <W_Card key={c.en} zh={c.zh} en={c.en} img={c.img} highlight={keyword.trim()} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* 02 */}
                <section id="w_classics" data-w-toc>
                    <div className="w_container">
                        {!isSearching && (
                            <header className="w_section_title">
                                <div className="w_section_wrap">
                                    <span className="w_section_idx">02</span>
                                    <div className="w_section_bar">
                                        <span className="w_section_zh">經典調酒</span>
                                        <span className="w_section_en">Classic Cocktails</span>
                                    </div>
                                </div>
                            </header>
                        )}
                        <div className="w_cards">
                            {classicsF.map((c) => (
                                <W_Card key={c.en} zh={c.zh} en={c.en} img={c.img} highlight={keyword.trim()} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* 03 */}
                <section id="w_standard" data-w-toc>
                    <div className="w_container">
                        {!isSearching && (
                            <header className="w_section_title">
                                <div className="w_section_wrap">
                                    <span className="w_section_idx">03</span>
                                    <div className="w_section_bar">
                                        <span className="w_section_zh">大眾調酒</span>
                                        <span className="w_section_en">Bar Standard</span>
                                    </div>
                                </div>
                            </header>
                        )}
                        <div className="w_cards">
                            {standardF.map((c) => (
                                <W_Card key={c.en} zh={c.zh} en={c.en} img={c.img} highlight={keyword.trim()} />
                            ))}
                        </div>
                    </div>
                </section>
                </>)}
            </main >
        </>
    );
}