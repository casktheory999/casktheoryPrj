import '../css/EventDetailPage.css'
import { Link } from 'react-router-dom'
import heroImg from '../images/eventDetailPage_heroBannerImg.png';
import infoImg1 from '../images/eventDetailPage_infoImg1.png';
import infoImg2 from '../images/eventDetailPage_infoImg2.png';

const EventDetailPage = () => {
    const recItems = [
        {
            id: 1,
            to: '/EventDetailPage',
            img: "/images/enentDetialRec1.png",
            date: "2025.09.20(六)17:00-20:00",
            eventTitle: "【嚴選活動】｜環遊世界品調酒｜30 杯全球精選雞尾酒 DIY",
            tag: "圓山",
            views: 785,
            likes: 85,
        },
        {
            id: 2,
            to: '/EventDetailPage',
            img: "/images/enentDetialRec2.png",
            date: "2025.09.20(六)17:00-20:00",
            eventTitle: "【嚴選活動】｜環遊世界品調酒｜30 杯全球精選雞尾酒 DIY",
            tag: "圓山",
            views: 785,
            likes: 85,
        },
        {
            id: 3,
            to: '/EventDetailPage',
            img: "/images/enentDetialRec2.png",
            date: "2025.09.20(六)17:00-20:00",
            eventTitle: "【嚴選活動】｜環遊世界品調酒｜30 杯全球精選雞尾酒 DIY",
            tag: "圓山",
            views: 785,
            likes: 85,
        },
    ];

    return (
        <>
            <main className="eventDetailPage">
                {/* Hero */}
                <section className="a_heroSection" >
                    {/* 大banner */}
                    <div className="a_heroBanner">
                        <img className="a_heroImg" src={heroImg} alt="活動主視覺" />
                        <div className="a_heroRibbon">禁止酒駕 酒後不開車 安全有保障</div>
                    </div>

                    {/* banner下3個tag＋數據 */}
                    <div className="heroMeta">
                        <ul className="heroChips">
                            <li className="chip"># 東門站</li>
                            <li className="chip"># 品酒</li>
                            <li className="chip"># 音樂欣賞</li>
                        </ul>
                        <ul className="heroStats" >
                            <li>👁 785</li>
                            <li>♡ 85</li>
                        </ul>
                    </div>

                    {/* 大標題 */}
                    <h1 id="eventTitle" className="heroTitle">
                        【金曲佳釀】｜爵士及品酒之夜｜經典調酒配上爵士金曲
                    </h1>
                </section>

                {/* 活動資訊區 */}
                <section className="a_infoSection">
                    <div className="a_infoBlock">
                        {/* 活動資訊左側文案區 */}
                        <div className="a_infoCard">
                            <h2 className="a_blockTitle">活動資訊</h2>
                            <p className="a_textBox">
                                時間：每週四 20:00–23:30</p>
                            <p className="a_textBox">地點：The Gilded Drop</p>
                            <p className="a_textBox">活動亮點：現場爵士演出 — 薩克斯風、貝斯與琴鍵交織，沉浸式音樂體驗主題調酒限量供應 — 向爵士年代致敬的復古酒款紳士與淑女之夜 — 穿上復古時尚，享受爵士的浪漫與自由
                            </p>
                        </div>
                        {/* 活動資訊右圖區 */}
                        <figure className="a_photoBlock1">
                            <img className="a_photo" src={infoImg1} alt="活動現場照片 1" />
                        </figure>
                    </div>
                </section>

                {/* 活動簡介區 */}
                <section className='a_introSection'>
                    <div className="a_introBlock">
                        {/* 活動簡介左圖區 */}
                        <figure className="a_photoBlock2">
                            <img className="a_photo" src={infoImg2} alt="活動現場照片 2" />
                        </figure>

                        {/* 活動簡介右側文案區 */}
                        <div className="a_introCard">
                            <h2 className="a_blockTitle">活動簡介</h2>
                            <p className="a_textBox">
                                紳士品酒之夜《JAZZ NIGHT》</p>
                            <p className="a_textBox">金曲佳釀，為經典致敬。</p>
                            <p className="a_textBox">紳士及品酒之夜，是一場專屬於靈魂、風格與品味的沉醉體驗。這不是一場喧鬧的派對，而是一種對優雅年代的浪漫致敬。在爵士薩克斯的柔情與低音中，酒香與旋律緩緩交織，每一口酒都像一段旋律，每一個音符都如微醺的呢喃。我們邀請您，走入這個屬於紳士與淑女的時光場域。舉杯相邀、輕聲交談，讓風格成為你的語言，讓夜晚，成為記憶中最溫柔的一段樂章。
                            </p>
                        </div>
                    </div>
                </section>

                {/* 地圖 + 交通方式 */}
                <section className="a_mapSection">
                    {/* 左側側：活動地圖區 */}
                    <div className="a_mapBlock">
                        <h2 className="a_blockTitle">活動地圖</h2>
                        <div className="mapCard">
                            <iframe
                                className="a_mapIframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7546295681077!2d121.5254698!3d25.0423998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a970a11a84ad%3A0x58e05f2528812097!2z5ZyL56uL6Ie65YyX5ZWG5qWt5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1753778275399!5m2!1szh-TW!2stw"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    {/* 右側：交通方式區 */}
                    <div className="a_trafficCard">
                        <h2 className="a_blockTitle">交通資訊</h2>
                        <div className="a_textBox">
                            <p>地址：台北市中山區忠孝西路 238 號</p>
                            <p>大眾運輸：捷運東門站 2 號出口步行 5 分鐘，
                                或可搭212、262 公車至忠孝東路站。</p>
                            <p>代客叫車：櫃台可協助</p>
                        </div>
                    </div>
                </section>


                {/* 推薦區 */}
                <section className="eventDetailRecommendSection">
                    <h2 className="eventDetailRecommendTitle">猜你喜歡...</h2>

                    <div className="a_recList">
                        {/* 卡片 1 */}
                        <Link to="/EventDetailPage" className="a_recCard">
                            <img
                                className="a_recCardImage"
                                src='images/eventDetialRec1.png'
                                alt="【嚴選活動】｜環遊世界品調酒｜30 杯全球精選雞尾酒 DIY"
                                loading="lazy"
                            />

                            <div className="a_recCardBody">
                                <p className="a_recCardMeta">2025.09.20(六)17:00-20:00</p>
                                <h3 className="a_recCardTitle">【嚴選活動】｜環遊世界品調酒｜30 杯全球精選雞尾酒 DIY</h3>
                            </div>

                            <div className="a_recCardFooter">
                                <span className="a_recCardTag">#圓山</span>
                                <div className="a_recCardStats">
                                    <span className="a_recCardStat">
                                        <span aria-hidden="true">👁</span> 785
                                    </span>
                                    <span className="a_recCardStat">
                                        <span aria-hidden="true">♡</span> 85
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* 卡片 2 */}
                        <Link to="/EventDetailPage" className="a_recCard">
                            <img
                                className="a_recCardImage"
                                src='images/eventDetialRec2.png'
                                alt="【嚴選活動】｜環遊世界品調酒｜30 杯全球精選雞尾酒 DIY"
                                loading="lazy"
                            />

                            <div className="a_recCardBody">
                                <p className="a_recCardMeta">2025.09.20(六)17:00-20:00</p>
                                <h3 className="a_recCardTitle">【嚴選活動】｜環遊世界品調酒｜30 杯全球精選雞尾酒 DIY</h3>
                            </div>

                            <div className="a_recCardFooter">
                                <span className="a_recCardTag">#圓山</span>
                                <div className="a_recCardStats">
                                    <span className="a_recCardStat">
                                        <span aria-hidden="true">👁</span> 785
                                    </span>
                                    <span className="a_recCardStat">
                                        <span aria-hidden="true">♡</span> 85
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* 卡片 3 */}
                        <Link to="/EventDetailPage" className="a_recCard">
                            <img
                                className="a_recCardImage"
                                src='images/eventDetialRec2.png'
                                alt="【嚴選活動】｜環遊世界品調酒｜30 杯全球精選雞尾酒 DIY"
                                loading="lazy"
                            />

                            <div className="a_recCardBody">
                                <p className="a_recCardMeta">2025.09.20(六)17:00-20:00</p>
                                <h3 className="a_recCardTitle">【嚴選活動】｜環遊世界品調酒｜30 杯全球精選雞尾酒 DIY</h3>
                            </div>

                            <div className="a_recCardFooter">
                                <span className="a_recCardTag">#圓山</span>
                                <div className="a_recCardStats">
                                    <span className="a_recCardStat">
                                        <span aria-hidden="true">👁</span> 785
                                    </span>
                                    <span className="a_recCardStat">
                                        <span aria-hidden="true">♡</span> 85
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

            </main>
        </>
    )
}

export default EventDetailPage