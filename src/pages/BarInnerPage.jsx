import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allBars } from '../data/barData.js';
import '../scss/BarInnerPage.scss';
import useDocumentTitle from "../data/useDocumentTitle"

export default function BarInnerPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const currentBar = allBars.find(bar => bar.id === parseInt(id));

    // 獲取隨機推薦酒吧 (排除當前酒吧，隨機選擇3間)
    const getRandomRecommendedBars = () => {
        const availableBars = allBars.filter(bar => bar.id !== parseInt(id));
        const shuffled = [...availableBars].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    };

    // 使用 useMemo 確保隨機推薦在組件生命週期內保持一致
    const recommendedBars = useMemo(() => getRandomRecommendedBars(), [id]);

    // 重置當前索引當 id 改變時
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [id]);

    // 切換推薦酒吧圖片
    const handlePrevImage = () => {
        setCurrentImageIndex(prev => (prev + 1) % recommendedBars.length);
    };

    // 前往其他酒吧頁面
    const goToBar = (barId) => {
        navigate(`/bar/${barId}`);
    };

    // 獲取當前要顯示的兩個酒吧
    const getCurrentDisplayBars = () => {
        if (recommendedBars.length === 0) return [];
        
        const firstBar = recommendedBars[currentImageIndex];
        const secondBar = recommendedBars[(currentImageIndex + 1) % recommendedBars.length];
        
        return [firstBar, secondBar];
    };

    const displayBars = getCurrentDisplayBars();

    useDocumentTitle("酒吧資訊");
    
    return (
        <main className="BI_bar-inner">
            {/* 主要內容區域 */}
            <section className="BI_hero-section">
                <div className="BI_content-wrapper">
                    {/* 左側資訊區塊 */}
                    <div className="BI_info-panel">
                        <h1 className="BI_bar-name">{currentBar.name}</h1>

                        <div className="BI_bar-details">
                            <div className="BI_detail-item">
                                <span className="BI_label">地址：</span>
                                <span className="BI_value">{currentBar.address}</span>
                            </div>
                            <div className="BI_detail-item">
                                <span className="BI_label">電話：</span>
                                <span className="BI_value">{currentBar.phone}</span>
                            </div>
                            <div className="BI_detail-item">
                                <span className="BI_label">營業時間：</span>
                                <span className="BI_value">{currentBar.hours}</span>
                            </div>
                        </div>

                        <div className="BI_description">
                            <p>{currentBar.descriptionInner}</p>
                        </div>
                    </div>

                    {/* 右側主圖 */}
                    <div className="BI_main-image">
                        <img
                            src={currentBar.images?.[0] || "/images/bar-placeholder.png"}
                            alt={currentBar.name}
                        />
                        {/* L形裝飾圖案 */}
                        <div className="BI_corner-accent BI_corner-bottom-left">
                            <img src="images/BI_corner-bottom-left.png" alt="L形裝飾" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 推薦酒吧區域 */}
            <section className="BI_recommended-section">
                <div className="BI_recommended-container">
                    {/* 左側切換按鈕 */}
                    <button className="BI_nav-btn" onClick={handlePrevImage}>
                        <img src="images/barInnerPage-left-arrow.png" alt="左側切換按鈕" />
                    </button>

                    {/* L形裝飾圖案 */}
                    <div className="BI_corner-accent BI_corner-top-left">
                        <img src="images/BI_corner-top-left.png" alt="L形裝飾" />
                    </div>

                    {/* 推薦酒吧圖片 */}
                    <div className="BI_recommended-images">
                        {displayBars.map((bar, displayIndex) => (
                            <div
                                key={`${bar.id}-${displayIndex}`}
                                className={`BI_recommended-item ${displayIndex === 0 ? 'active' : 'next'}`}
                                onClick={() => goToBar(bar.id)}
                            >
                                <div className="BI_recommended-image">
                                    <img
                                        src={bar.images?.[0] || "/images/bar-placeholder.jpg"}
                                        alt={bar.name}
                                    />

                                    {/* 圖片上的資訊覆蓋層 - 統一顯示在所有卡片上 */}
                                    <div className="BI_image-overlay">
                                        <div className="BI_overlay-name">{bar.name}</div>
                                        <div className="BI_overlay-station">{bar.line} - {bar.station}</div>
                                        <div className="BI_overlay-desc">{bar.description}</div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 返回按鈕 */}
                <div className="BI_back-button-container">
                    <button
                        className="BI_back-button"
                        onClick={() => navigate('/bar')}
                    >
                        返回酒吧地圖
                    </button>
                </div>
            </section>
        </main>
    );
}