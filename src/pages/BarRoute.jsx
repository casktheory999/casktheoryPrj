import { useEffect, useMemo, useState, useCallback } from "react";
// import '../css/runstyle2.css';
import '../scss/cbarway.scss';

const routesData = [
    {
        id: "r1",
        labelNo: 1,
        title: "善導寺微醺漫步",
        start: "善導寺",
        end: "角落酒吧",
        length: "0.8km",
        shops: 3,
        heroImg: "./images/topimg.png",
        mapImg: "./images/map.png",
        stops: [
            {
                no: "01",
                name: "That Bar",
                addr: "台北市大同一路 12 號 4 樓",
                open: "17:00–02:00",
                km: "0.3km",
                photo: "./images/bar1.jpg",
                ph: "在暖黃燈下，甬管柔唱輕撫心弦，今宵經典爵士之夜，現場薩克斯與鋼琴共舞。"
            },
            {
                no: "02",
                name: "Second Bar",
                addr: "台北市中興路一段 33號 1 樓",
                open: "17:00–02:00",
                km: "0.2km",
                photo: "./images/bar1.jpg",
                ph: "細品調和雞尾酒，讓律動與酒香交織；吧檯前舉杯，沉浸不朽樂章。"
            },
            {
                no: "03",
                name: "角落酒吧",
                addr: "台北市大同路三段 222 號 1 樓",
                open: "17:00–02:00",
                km: "0.3km",
                photo: "./images/bar1.jpg",
                ph: "現場薩克斯揭幕終章，Old Fashioned 與樂聲同在，替今晚收個優雅的尾。"
            }
        ]
    },
    {
        id: "r2",
        labelNo: 2,
        title: "西門町夜色巡禮",
        start: "紅樓",
        end: "Balcony 7",
        length: "1.2km",
        shops: 3,
        heroImg: "./images/topimg2.png",
        mapImg: "./images/id2map2.png",
        stops: [
            {
                no: "01",
                name: "Hidden Alley",
                addr: "台北市萬華區成都路 10 號",
                open: "18:00–01:00",
                km: "0.4km",
                photo: "./images/bar3.png",
                ph: "老磚牆巷弄裡的微光，第一杯用琴酒開場。"
            },
            {
                no: "02",
                name: "Neon Room",
                addr: "台北市萬華區武昌街 50 號",
                open: "19:00–02:00",
                km: "0.3km",
                photo: "./images/bar3.png",
                ph: "霓虹與 City Pop，微醺的節拍慢慢跟上。"
            },
            {
                no: "03",
                name: "Balcony 7",
                addr: "台北市萬華區漢中街 77 號 7F",
                open: "18:30–01:30",
                km: "0.3km",
                photo: "./images/bar3.png",
                ph: "露台吹風看夜景，調一杯煙燻味的威士忌酸。"
            }
        ]
    },
     {
        id: "r3",
        labelNo: 3,
        title: "信義琥珀時光",
        start: "台北101",
        end: "Balcony 7",
        length: "1.1km",
        shops: 3,
        heroImg: "./images/topimg3.png",
        mapImg: "./images/id3map.png",
        stops: [
            {
                no: "01",
                name: "3 P.M ",
                addr: "台北市信義區成都路 10 號",
                open: "18:00–01:00",
                km: "0.4km",
                photo: "./images/id3bar1.png",
                ph: "老磚牆巷弄裡的微光，第一杯用琴酒開場。"
            },
            {
                no: "02",
                name: "Drinking ",
                addr: "台北市萬華區武昌街 50 號",
                open: "19:00–02:00",
                km: "0.3km",
                photo: "./images/id3bar1.png",
                ph: "霓虹與 City Pop，微醺的節拍慢慢跟上。"
            },
            {
                no: "03",
                name: "Balcony 7",
                addr: "台北市萬華區漢中街 77 號 7F",
                open: "18:30–03:30",
                km: "0.3km",
                photo: "./images/id3bar1.png",
                ph: "露台吹風看夜景，調一杯煙燻味的威士忌酸。"
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

    // 鍵盤左右切換（可選）
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [goNext, goPrev]);

    return (
        <>
            <div className="cBarRoute" data-route={route.id}>
                <section className="cpage-title">
                    <h2>路跑路線</h2>

                    <div className="croute-controls" aria-label="切換路線">

                        <div className="croute-indicator" aria-live="polite">
                            推薦路線 {route.labelNo}
                        </div>

                    </div>
                </section>

                <section className="csection-white">
                    {/* 右上角水滴裝飾 */}
                    <figure className="cdrop_dark">
                        <img src="./images/drop_dark.png" alt="" />
                    </figure>
                </section>

                {/* 第一部分：兩欄（左圖右文） */}
                <section className="csection-hero">
                    <div className="chero-grid">
                        {/* 左：圖片 */}
                        <figure className="chero-photo">
                            <img src={route.heroImg} alt={route.title} />
                        </figure>
                        <button
                            className="cbtn-prev"
                            type="cbutton"
                            onClick={goPrev}
                            aria-label="上一條路線"
                        >
                            ‹
                        </button>

                        {/* 右：文字卡 */}
                        <div className="chero-text">
                            <div className="cvlabel">
                                推薦路線<p>{route.labelNo}</p>
                            </div>


                            <h3>{route.title}</h3>
                            <ul className="cmeta">
                                <li>起點：{route.start}</li>
                                <li>終點：{route.end}</li>
                                <li>路線總長：{route.length}</li>
                                <li>酒吧／商店數量：{route.shops}</li>
                            </ul>
                            <button
                                className="cbtn-next"
                                type="cbutton"
                                onClick={goNext}
                                aria-label="下一條路線"
                            >
                                ›
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            {/* 第二部分：黑色資訊帶 + 疊圖 */}
            <div>
                <section className="csection-mapArea">
                    <div className="cro-stack">
                        {/* 黑色資訊帶（跨全寬） */}
                        <div className="cro-band">
                            <div className="cro-band-inner">
                                <h3>{route.title}</h3>
                                <ul className="cro-meta">
                                    <li>起點：{route.start}</li>
                                    <li>路線總長：{route.length}</li>
                                    <li>終點：{route.end}</li>
                                    <li>酒吧／商店數量：{route.shops}</li>
                                </ul>
                            </div>
                        </div>

                        {/* 疊在上面的地圖圖片（靠右） */}
                        <figure className="cmap-card">
                            <img src={route.mapImg} alt={`${route.title} 路線地圖`} />
                        </figure>
                    </div>
                </section>
            </div>

            {/* 第三區：動態渲染站點（交錯左/右版型沿用你的 class） */}
            <div>
                <section id="ctimeline" className="csection-white">
                    {route.stops.map((s, i) => {
                        const isAlt = i % 2 === 1;
                        return (
                            <article key={s.no} className={isAlt ? "cintro-alt" : "cintro"}>
                                {!isAlt && <p className="cphtxt">{s.ph}</p>}
                                <div className="ckm">{s.km}</div>

                                <div className="cmedia">
                                    <div className="cnum">{s.no}</div>
                                    <div className="ctxtArea">
                                        <h5>{s.name}</h5>
                                        <p>地址：{s.addr}</p>
                                        <p>營業時間：{s.open}</p>
                                    </div>
                                    <img src={s.photo} alt={`${s.name} 吧檯內裝`} />
                                </div>

                                {isAlt && <p className="cphtxt">{s.ph}</p>}
                            </article>
                        );
                    })}
                </section>
            </div>
        </>
    );
}
