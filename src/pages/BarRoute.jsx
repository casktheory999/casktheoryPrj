// import '../css/runstyle2.css';
import '../scss/cbarway.scss';

export default function BarRoute() {
    return (
        <>
            <div className='cBarRoute'>
                <section className="cpage-title">
                    <h2>路跑路線</h2>
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
                            <img src="./images/topimg.png" alt="善導寺微醺漫步" />
                        </figure>

                        {/* 右：文字卡 */}
                        <div className="chero-text">
                            <div className="cvlabel">
                                推薦路線<p>1</p>
                            </div>

                            <h3>善導寺微醺漫步</h3>
                            <ul className="cmeta">
                                <li>起點：That Bar</li>
                                <li>終點：角落酒吧</li>
                                <li>路線總長：0.8km</li>
                                <li>酒吧／商店數量：3</li>
                            </ul>
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
                                <h3>善導寺微醺漫步</h3>
                                <ul className="cro-meta">
                                    <li>起點：That Bar</li>
                                    <li>路線總長：0.8km</li>
                                    <li>終點：角落酒吧</li>
                                    <li>酒吧／商店數量：3</li>
                                </ul>
                            </div>
                        </div>

                        {/* 疊在上面的地圖圖片（靠右） */}
                        <figure className="cmap-card">
                            <img src="./images/map.png" alt="善導寺微醺漫步 路線地圖" />
                        </figure>
                    </div>
                </section>
            </div>
            {/* 第三區 */}
            <div>
                <section id="ctimeline" className="csection-white">
                    {/* 01：卡片在右側 */}
                    <article className="cintro">
                        <p className="cphtxt">
                            在暖黃燈下，甬管柔唱輕撫心弦，今宵經典爵士之夜，現場薩克斯與鋼琴共舞。
                        </p>
                        <div className="ckm">1.1km</div>

                        <div className="cmedia">
                            <div className="cnum">01</div>
                            <div className="ctxtArea">
                                <h5>That Bar</h5>
                                <p>地址：台北市大同一路 12 號 4 樓</p>
                                <p>營業時間：17:00–02:00</p>
                            </div>
                            <img src='./images/bar1.jpg' alt="That Bar 吧檯內裝" />
                        </div>
                    </article>

                    {/* 02：交錯（卡片在左側） */}
                    <article className="cintro-alt">
                        <div className="cmedia">
                            <div className="cnum">02</div>
                            <div className="ctxtArea">
                                <h5>Second Bar</h5>
                                <p>地址：台北市大同一路 12 號 4 樓</p>
                                <p>營業時間：17:00–02:00</p>
                            </div>
                            <img src='./images/bar1.jpg' alt="Second Bar 吧檯內裝" />
                        </div>
                        <div className="ckm">1.1km</div>
                        <p className="cphtxt">
                            細品調和雞尾酒，讓律動與酒香交織；吧檯前舉杯，沉浸不朽樂章。
                        </p>
                    </article>

                    {/* 03：卡片在右側 */}
                    <article className="cintro">
                        <p className="cphtxt">
                            現場薩克斯揭幕終章，Old Fashioned 與樂聲同在，替今晚收個優雅的尾。
                        </p>
                        <div className="ckm">1.1km</div>
                        <div className="cmedia">
                            <div className="cnum">03</div>
                            <div className="ctxtArea">
                                <h5>Third Bar</h5>
                                <p>地址：台北市大同一路 12 號 4 樓</p>
                                <p>營業時間：17:00–02:00</p>
                            </div>
                            <img src='./images/bar1.jpg' alt="Third Bar 吧檯內裝" />
                        </div>
                    </article>
                </section>
            </div>
        </>
    );
}

