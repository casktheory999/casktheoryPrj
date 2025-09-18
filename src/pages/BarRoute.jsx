import { useEffect, useMemo, useState, useCallback } from "react";
import "../scss/cbarway.scss";

const routesData = [
    {
        id: "r1",
        labelNo: 1,
        title: "善導寺微醺漫步",
        start: "善導寺",
        end: "角落酒吧",
        length: "0.8km",
        shops: 3,
        heroImg: "images/route1.jpg",
        mapImg: "images/map.png",
        stops: [
            {
                no: "01",
                name: "That Bar",
                addr: "台北市大同一路 12 號 4 樓",
                open: "17:00–02:00",
                km: "0.3km",
                photo: "images/barListCard2.png",
                description: "在暖黃燈下，甬管柔唱輕撫心弦，今宵經典爵士之夜，現場薩克斯與鋼琴共舞。"
            },
            {
                no: "02",
                name: "Second Bar",
                addr: "台北市中興路一段 33號 1 樓",
                open: "17:00–02:00",
                km: "0.2km",
                photo: "images/barListCard3.png",
                description: "細品調和雞尾酒，讓律動與酒香交織；吧檯前舉杯，沉浸不朽樂章。"
            },
            {
                no: "03",
                name: "角落酒吧",
                addr: "台北市大同路三段 222 號 1 樓",
                open: "17:00–02:00",
                km: "0.3km",
                photo: "images/barListCard4.png",
                description: "現場薩克斯揭幕終章，Old Fashioned 與樂聲同在，替今晚收個優雅的尾。"
            }
        ]
    },
    {
        id: "r2",
        labelNo: 2,
        title: "中山站醉意市集",
        start: "中山站",
        end: "Balcony 7",
        length: "1.2km",
        shops: 3,
        heroImg: "images/route2.jpg",
        mapImg: "images/id2map2.png",
        stops: [
            {
                no: "01",
                name: "Hidden Alley",
                addr: "台北市萬華區成都路 10 號",
                open: "18:00–01:00",
                km: "0.4km",
                photo: "images/barListCard5.png",
                description: "老磚牆巷弄裡的微光，第一杯用琴酒開場。"
            },
            {
                no: "02",
                name: "Neon Room",
                addr: "台北市萬華區武昌街 50 號",
                open: "19:00–02:00",
                km: "0.3km",
                photo: "images/barListCard8.png",
                description: "霓虹與 City Pop，微醺的節拍慢慢跟上。"
            },
            {
                no: "03",
                name: "Balcony 7",
                addr: "台北市萬華區漢中街 77 號 7F",
                open: "18:30–01:30",
                km: "0.3km",
                photo: "images/barListCard11.png",
                description: "露台吹風看夜景，調一杯煙燻味的威士忌酸。"
            }
        ]
    },
    {
        id: "r3",
        labelNo: 3,
        title: "信義奢華浪漫之旅",
        start: "台北101",
        end: "Amber Lounge",
        length: "1.1km",
        shops: 3,
        heroImg: "images/route3.jpg",
        mapImg: "images/id3map.png",
        stops: [
            {
                no: "01",
                name: "3 P.M",
                addr: "台北市信義區松壽路 10 號",
                open: "18:00–01:00",
                km: "0.4km",
                photo: "images/barListCard14.png",
                description: "午後三點的慵懶延續到夜晚，第一杯從經典馬丁尼開始。"
            },
            {
                no: "02",
                name: "Drinking Lab",
                addr: "台北市信義區基隆路 50 號",
                open: "19:00–02:00",
                km: "0.3km",
                photo: "images/barCard1.png",
                description: "實驗室概念酒吧，每一杯都是味覺的冒險。"
            },
            {
                no: "03",
                name: "Amber Lounge",
                addr: "台北市信義區市府路 77 號 12F",
                open: "18:30–03:30",
                km: "0.4km",
                photo: "images/barCard8.png",
                description: "琥珀色燈光下的頂樓酒廊，城市夜景盡收眼底。"
            }
        ]
    }
];

export default function BarRoute() {
    const [idx, setIdx] = useState(0);
    const route = useMemo(() => routesData[idx], [idx]);

    const goNext = useCallback(() => {
        setIdx((i) => (i + 1) % routesData.length);
    }, []);

    const goPrev = useCallback(() => {
        setIdx((i) => (i - 1 + routesData.length) % routesData.length);
    }, []);

    // 鍵盤左右切換
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [goNext, goPrev]);

    return (
        <div className="bar-route-container">
            {/* 頁面標題 */}
            <header className="page-header">
                <h2>路跑路線</h2>

            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-image-wrapper">
                        <img
                            src={route.heroImg}
                            alt={route.title}
                            className="hero-image"
                        />
                    </div>

                    <div>
                        <button
                            className="nav-btn nav-btn-prev"
                            onClick={goPrev}
                            aria-label="上一條路線"
                        >
                            ‹
                        </button>

                        <button
                            className="nav-btn nav-btn-next"
                            onClick={goNext}
                            aria-label="下一條路線"
                        >
                            ›
                        </button>
                    </div>


                    <div className="hero-info">
                        <div className="route-label">
                            <span>推薦路線</span>
                            <span className="route-number">{route.labelNo}</span>
                        </div>

                        <h3 className="route-title">{route.title}</h3>

                        <ul className="route-meta">
                            <li>
                                <span className="meta-label">起點：</span>
                                <span>{route.start}</span>
                            </li>
                            <li>
                                <span className="meta-label">終點：</span>
                                <span>{route.end}</span>
                            </li>
                            <li>
                                <span className="meta-label">路線總長：</span>
                                <span>{route.length}</span>
                            </li>
                            <li>
                                <span className="meta-label">酒吧數量：</span>
                                <span>{route.shops}</span>
                            </li>
                        </ul>
                    </div>
                </div>




            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="map-container">
                    <div className="map-info-band">
                        <div className="map-info-content">
                            <h3>{route.title}</h3>
                            <ul className="map-meta">
                                <li>起點：{route.start}</li>
                                <li>路線總長：{route.length}</li>
                                <li>終點：{route.end}</li>
                                <li>酒吧數量：{route.shops}</li>
                            </ul>
                        </div>
                        {/* <div className="map-image-wrapper">
                            <img
                                src={route.mapImg}
                                alt={`${route.title} 路線地圖`}
                                className="map-image"
                            />
                        </div> */}
                    </div>

                    <figure className="map-image-wrapper">
                        <img
                            src={route.mapImg}
                            alt={`${route.title} 路線地圖`}
                        />
                    </figure>

                </div>
            </section>

            {/* Timeline Section */}
            <section className="timeline-section">
                <div className="timeline-container">
                    {route.stops.map((stop, i) => (
                        <div
                            key={stop.no}
                            className={`timeline-item ${i % 2 === 1 ? 'timeline-item-alt' : ''}`}
                        >
                            <div className="stop-description">
                                <p>{stop.description}</p>
                            </div>

                            <div className="stop-distance">
                                <span>{stop.km}</span>
                            </div>

                            <div className="stop-card">
                                <span className="stop-number">{stop.no}</span>

                                <div className="stop-info">
                                    <h5 className="stop-name">{stop.name}</h5>
                                    <div className="stop-details">
                                        <p>地址：{stop.addr}</p>
                                        <p>營業時間：{stop.open}</p>
                                    </div>
                                </div>

                                <img
                                    src={stop.photo}
                                    alt={`${stop.name} 吧檯內裝`}
                                    className="stop-image"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}