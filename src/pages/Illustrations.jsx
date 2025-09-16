import { useMemo, useState } from "react";
import "../scss/illustrations.scss";
import SideTOC from '../component/SideTOC.jsx';
import "../scss/side-toc.scss";
import W_Card from "../component/w_Card.jsx";
import Modal from '../component/Modal.jsx';
import IllustrationsInnerPages from '../component/IllustrationsInnerPages.jsx';

export default function Illustrations() {
    const [keyword, setKeyword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDrink, setSelectedDrink] = useState("");

    const NAV_OFFSET = 60;
    const EXTRA = 8; // 與 SideTOC 相同的額外上方留白

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const idx = el.querySelector('.w_section_idx');
        const target = idx ?? el;
        // 折衷：以 SideTOC 基準，再加上 sticky 搜尋列 一半高度 + top
        let offset = NAV_OFFSET + EXTRA;
        const sticky = document.querySelector('.w_search_wrap');
        if (sticky) {
            const cs = getComputedStyle(sticky);
            if (cs.position === 'sticky') {
                const topPx = parseFloat(cs.top || '0') || 0;
                offset += topPx + (sticky.offsetHeight / 2);
            }
        }
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    };

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
        { zh: "長島冰茶", en: "Long Island Iced Tea", img: "./images/LongIslandIcedTea.png" },
        { zh: "龍舌蘭日出", en: "Tequila Sunrise", img: "./images/TequilaSunrise.png" },
    ]), []);

    // 處理卡片點擊事件
    const handleCardClick = (drinkName) => {
        // 將英文名稱轉換為 IllsInnerData 的 key 格式
        let drinkKey = drinkName;
        if (drinkName === "Long Island Iced Tea") {
            drinkKey = "LongIslandIcedTea";
        } else if (drinkName === "Tequila Sunrise") {
            drinkKey = "TequilaSunrise";
        }

        setSelectedDrink(drinkKey);
        setIsModalOpen(true);
    };

    // 關閉 Modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDrink("");
    };

    const q = keyword.trim().toLowerCase();
    const match = (item) => !q || item.zh.includes(keyword.trim()) || item.en.toLowerCase().includes(q);
    const baseF = base.filter(match);
    const classicsF = classics.filter(match);
    const standardF = standard.filter(match);
    const empty = !baseF.length && !classicsF.length && !standardF.length;
    const isSearching = q.length > 0;
    const combinedF = [...baseF, ...classicsF, ...standardF];

    return (
        <div className="w_illusAll">
            <section className="w_hero_full">
                <div className="w_hero_mask" />
                <div className="w_hero_inner">
                    {/* 左側推薦卡 */}
                    <div className="w_hero_panel">
                        <h3>今日推薦</h3>
                        <h2>邊車 <span>Side car</span></h2>
                        <p>經典入口時酸甜均衡，口感清爽且酒體集中，既優雅又具力道。<br />
                            具代表性的經典調酒，酸甜的口感相當適合夏天入口。</p>
                    </div>

                    {/* 中間區：標題（語意化 h1） */}
                    <div className="w_hero_center">
                        <h1 className="w_hero_vtitle">酒精圖鑑</h1>
                    </div>

                    {/* 右側空白區，保留視覺平衡 */}
                    <div className="w_hero_spacer" aria-hidden />
                </div>
            </section>
            <div className="w_search_wrap">
                {/* 小螢幕：縮起 SideTOC 時，顯示文字切換 */}
                <div className="w_search_tabs" role="tablist" aria-label="章節切換">
                    <button type="button" onClick={() => scrollTo("w_base")} className="w_tab">六大基酒</button>
                    <button type="button" onClick={() => scrollTo("w_classics")} className="w_tab">經典調酒</button>
                    <button type="button" onClick={() => scrollTo("w_standard")} className="w_tab">大眾調酒</button>
                </div>
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
            <main className={`w_illustrations${isSearching ? " is-searching" : ""}`} style={{ minHeight: 'calc(100vh - 320px)' }}>
                {!isSearching && <SideTOC />}

                {/* 空狀態（搜尋時） */}
                {isSearching && empty && (
                    <section aria-live="polite" className="w_container w_search_empty">
                        <p style={{ color: "#777", padding: "16px 6px" }}>找不到符合「{keyword}」的結果，請試試其他關鍵字。</p>
                    </section>
                )}

                {/* 合併的搜尋結果列表 */}
                {isSearching && !empty && (
                    <section aria-live="polite" className="w_container w_search_results">
                        <div className="w_cards">
                            {combinedF.map((c, i) => (
                                <W_Card key={`${c.en}-${c.zh}`} zh={c.zh} en={c.en} img={c.img} highlight={keyword.trim()} align={Math.floor(i / 3) % 2 === 0 ? "left" : "right"} />
                            ))}
                        </div>
                    </section>
                )}

                {!isSearching && (<>
                    {/* 01 */}
                    <section id="w_base" data-w-toc>
                        {!isSearching && (
                            <header className="w_section_title">
                                <div className="w_section_wrap">
                                    <span className="w_section_idx">01</span>
                                    <div className="w_section_bar">
                                        <h2 className="w_section_zh">六大基酒</h2>
                                        <h3 className="w_section_en">Six Base Spirits</h3>
                                    </div>
                                </div>
                            </header>
                        )}
                        <div className="w_container">
                            <div className="w_cards">
                                {baseF.map((c, i) => (
                                    <W_Card key={c.en} zh={c.zh} en={c.en} img={c.img} highlight={keyword.trim()} align={Math.floor(i / 3) % 2 === 0 ? "left" : "right"} onClick={handleCardClick} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 02 */}
                    <section id="w_classics" data-w-toc>
                        {!isSearching && (
                            <header className="w_section_title">
                                <div className="w_section_wrap">
                                    <span className="w_section_idx">02</span>
                                    <div className="w_section_bar">
                                        <h2 className="w_section_zh">經典調酒</h2>
                                        <h3 className="w_section_en">Classic Cocktails</h3>
                                    </div>
                                </div>
                            </header>
                        )}
                        <div className="w_container">
                            <div className="w_cards">
                                {classicsF.map((c, i) => (
                                    <W_Card key={c.en} zh={c.zh} en={c.en} img={c.img} highlight={keyword.trim()} align={Math.floor(i / 3) % 2 === 0 ? "left" : "right"} onClick={handleCardClick} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 03 */}
                    <section id="w_standard" data-w-toc>
                        {!isSearching && (
                            <header className="w_section_title">
                                <div className="w_section_wrap">
                                    <span className="w_section_idx">03</span>
                                    <div className="w_section_bar">
                                        <h2 className="w_section_zh">大眾調酒</h2>
                                        <h3 className="w_section_en">Bar Standard</h3>
                                    </div>
                                </div>
                            </header>
                        )}
                        <div className="w_container">
                            <div className="w_cards">
                                {standardF.map((c, i) => (
                                    <W_Card key={c.en} zh={c.zh} en={c.en} img={c.img} highlight={keyword.trim()} align={Math.floor(i / 3) % 2 === 0 ? "left" : "right"} onClick={handleCardClick} />
                                ))}
                            </div>
                        </div>
                    </section>
                </>)}
            </main >
            {/* Modal 彈窗 */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <IllustrationsInnerPages drinkType={selectedDrink} />
            </Modal>
        </div>
    );
}