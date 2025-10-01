import React, { useState, useMemo } from "react";
import BarCard from "../component/BarCard";
import { allBars, mrtLines } from '../data/barData.js';
import "../scss/Bar.scss";
import useDocumentTitle from "../data/useDocumentTitle"

export default function Bar() {
    useDocumentTitle("酒吧地圖");
    const [selectedLine, setSelectedLine] = useState("全部");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("全部");

    // 獲取當前選中路線的顏色和樣式
    const getFilterStyle = () => {
        const selectedMrtLine = mrtLines.find(line => line.name === selectedLine);
        const lineColor = selectedMrtLine ? selectedMrtLine.color : '#ED972E';

        return {
            color: lineColor,
            // 可以添加更多樣式
            borderLeft: `3px solid ${lineColor}`,
            paddingLeft: '15px'
        };
    };

    // 格式化篩選信息，不同部分用不同顏色
    const renderFilterInfo = () => {
        const selectedMrtLine = mrtLines.find(line => line.name === selectedLine);
        const lineColor = selectedMrtLine ? selectedMrtLine.color : '#ED972E';


        return (
            <div className="B_filter-info" style={getFilterStyle()}>
                <span>找到 </span>
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
                    {filteredBars.length}
                </span>
                <span> 間酒吧</span>

                {searchQuery && (
                    <span style={{ color: '#ED972E', marginLeft: '8px' }}>
                        (搜尋: "{searchQuery}")
                    </span>
                )}

                {selectedLine !== "全部" && (
                    <span style={{
                        color: lineColor,
                        fontWeight: 'bold',
                        marginLeft: '8px',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        backgroundColor: `${lineColor}20`, // 20% 透明度背景
                        border: `1px solid ${lineColor}50` // 50% 透明度邊框
                    }}>
                        路線: {selectedLine}
                    </span>
                )}

                {activeTab !== "全部" && (
                    <span style={{
                        color: activeTab === "熱門" ? '#ff6b35' : '#e74c3c',
                        marginLeft: '8px',
                        fontWeight: 'bold'
                    }}>
                        (類型: {activeTab})
                    </span>
                )}
            </div>
        );
    };

    // 篩選邏輯
    const filteredBars = useMemo(() => {
        let filtered = allBars;

        // 捷運線篩選
        if (selectedLine !== "全部") {
            filtered = filtered.filter(bar => bar.line === selectedLine);
        }

        // 搜尋篩選
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim();
            filtered = filtered.filter(bar =>
                bar.name.toLowerCase().includes(query) ||
                bar.station.toLowerCase().includes(query) ||
                bar.description.toLowerCase().includes(query)
            );
        }

        // 熱門/最新篩選
        if (activeTab === "熱門") {
            filtered = filtered.filter(bar => bar.type === "熱門");
        } else if (activeTab === "最新") {
            filtered = filtered.filter(bar => bar.type === "最新");
        }

        return filtered;
    }, [selectedLine, searchQuery, activeTab]);

    // 決定卡片布局（根據UI設計）
    const getCardLayout = (index) => {
        // 根據UI圖片的布局模式，只使用3種卡片類型
        if (index === 0) return "horizontal"; // 橫卡片
        if (index === 1) return "square"; // 方卡片
        if (index === 2) return "square"; // 方卡片
        if (index === 3) return "square"; // 方卡片
        if (index === 4) return "square"; // 方卡片
        if (index === 5) return "vertical"; // 直卡片
        if (index === 6) return "horizontal"; // 橫卡片
        if (index === 7) return "square"; // 方卡片
        if (index === 8) return "vertical"; // 直卡片
        if (index === 9) return "horizontal"; // 橫卡片
        if (index === 10) return "square"; // 方卡片
        if (index === 11) return "horizontal"; // 橫卡片
        if (index === 12) return "horizontal"; // 橫卡片
        if (index === 13) return "square"; // 方卡片
        return "square"; // 默認方卡片
    };

    return (
        <main className="B_bar">
            <section className="B_barHero">
                <h1 className="B_barHeroTitle">酒吧地圖</h1>
                <div className="B_barHeroFilter">
                    <ul className="B_mrtList">
                        {mrtLines.map((line) => (
                            <li key={line.name} className="B_mrtItem">
                                <button
                                    className={`B_mrtBtn ${selectedLine === line.name ? 'active' : ''}`}
                                    onClick={() => setSelectedLine(line.name)}
                                >
                                    {line.name}
                                </button>
                                <span
                                    className="B_mrtLine"
                                    style={{ '--line-color': line.color }}
                                />
                            </li>
                        ))}
                    </ul>

                    <div className="B_barControls">
                        {/* 熱門/最新篩選 */}
                        <div className="B_tabs">
                            <button
                                className={`B_tab ${activeTab === "全部" ? "active" : ""}`}
                                onClick={() => setActiveTab("全部")}
                            >
                                全部
                            </button>
                            <button
                                className={`B_tab ${activeTab === "熱門" ? "active" : ""}`}
                                onClick={() => setActiveTab("熱門")}
                            >
                                熱門
                            </button>
                            <button
                                className={`B_tab ${activeTab === "最新" ? "active" : ""}`}
                                onClick={() => setActiveTab("最新")}
                            >
                                最新
                            </button>
                        </div>

                        <label className="B_barSearch">
                            <svg className="B_icon" viewBox="0 0 24 24" aria-hidden="true">
                                <circle cx="11" cy="11" r="7" stroke="currentColor" fill="none" strokeWidth="2" />
                                <line x1="16.65" y1="16.65" x2="22" y2="22" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            <input
                                type="search"
                                placeholder="搜尋酒吧"
                                aria-label="搜尋酒吧"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
            </section>

            {/* 篩選結果提示 */}
            {(searchQuery || selectedLine !== "全部" || activeTab !== "全部") && renderFilterInfo(
                <div className="B_filter-info">
                    找到 {filteredBars.length} 間酒吧
                    {searchQuery && ` (搜尋: "${searchQuery}")`}
                    {selectedLine !== "全部" && ` (路線: ${selectedLine})`}
                    {activeTab !== "全部" && ` (類型: ${activeTab})`}
                </div>
            )}

            {/* 酒吧卡片網格 */}
            <section className="B_bar-grid">
                {filteredBars.length > 0 ? (
                    filteredBars.map((bar, index) => (
                        <BarCard
                            key={bar.id}
                            bar={bar}
                            cardType={getCardLayout(index)}
                        />
                    ))
                ) : (
                    <div className="B_no-results">
                        <p>沒有找到符合條件的酒吧</p>
                    </div>
                )}
            </section>
        </main>
    );
}