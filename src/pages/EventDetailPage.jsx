import '../css/EventDetailPage.css'
import heroImg from '../images/eventDetailPage_heroBannerImg.png';
import infoImg1 from '../images/eventDetailPage_infoImg1.png';
import infoImg2 from '../images/eventDetailPage_infoImg2.png';
import mapImg from '../images/eventDetailPage_mapImg.png';

const EventDetailPage = () => {
    return (
        <>
            <main className="eventDetailPage">
                {/* Hero */}
                <section className="heroSection" >
                    {/* 大banner */}
                    <div className="heroBanner">
                        <img className="heroImg" src={heroImg} alt="活動主視覺" />
                        <div className="heroRibbon">禁止酒駕 酒後不開車 安全有保障</div>
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

                {/* 活動資訊 + 介紹 */}
                <section className="infoSection">
                    {/* 活動資訊區 */}
                    <div className="infoBlock">
                        {/* 活動資訊左側文案區 */}
                        <div className="infoCard">
                            <h2 className="blockTitle">活動資訊</h2>
                            <p className="textBox">
                                時間：每週四 20:00–23:30</p>
                            <p>地點：The Gilded Drop</p>
                            <p>活動亮點：現場爵士演出 — 薩克斯風、貝斯與琴鍵交織，沉浸式音樂體驗
                                主題調酒限量供應 — 向爵士年代致敬的復古酒款
                                紳士與淑女之夜 — 穿上復古時尚，享受爵士的浪漫與自由
                            </p>
                        </div>
                        {/* 活動資訊右圖區 */}
                        <figure className="photoBlock1">
                            <img className="photo" src={infoImg1} alt="活動現場照片 1" />
                        </figure>
                    </div>

                    {/* 活動簡介區 */}
                    <div className="introBlock">
                        {/* 活動簡介左圖區 */}
                        <figure className="photoBlock2">
                            <img className="photo" src={infoImg2} alt="活動現場照片 2" />
                        </figure>

                        {/* 活動簡介右側文案區 */}
                        <div className="introCard">
                            <h2 className="blockTitle">活動簡介</h2>
                            <p className="textBox">
                                紳士品酒之夜《JAZZ NIGHT》</p>
                            <p>金曲佳釀，為經典致敬。</p>
                            <p>紳士及品酒之夜，是一場專屬於靈魂、風格與品味的沉醉體驗。這不是一場喧鬧的派對，而是一
                                種對優雅年代的浪漫致敬。在爵士薩克斯的柔情與低音中，酒香與旋律緩緩交織，每一口酒都像
                                一段旋律，每一個音符都如微醺的呢喃。我們邀請您，走入這個屬於紳士與淑女的時光場域。舉
                                杯相邀、輕聲交談，讓風格成為你的語言，讓夜晚，成為記憶中最溫柔的一段樂章。
                            </p>
                        </div>
                    </div>
                </section>

                {/* 地圖 + 交通方式 */}
                <section className="a_mapSection">
                    {/* 左側側：活動地圖區 */}
                    <div className="mapBlock">
                        <h2 className="blockTitle">活動地圖</h2>
                        <div className="mapCard">
                            <img className="mapImg" src={mapImg} alt="The Gilded Drop 周邊地圖" />
                        </div>
                    </div>

                    {/* 右側：交通方式區 */}
                    <div className="trafficBlock">
                        <h2 className="blockTitle">交通資訊</h2>
                        <p className="textBox">
                            台北市中山區忠孝西路 238 號
                            大眾運輸：
                            捷運東門站 2 號出口步行 5 分鐘，或可搭
                            212、262 公車至忠孝東路站。
                            代客叫車：櫃台可協助
                        </p>
                    </div>
                </section>

                {/* 推薦區 */}
                <section className="a_recommendSection">
                    <h2 className="recommendTitle">猜你喜歡...</h2>

                    {/* <div className="recList">
                        {recItems.map(item => (
                            <a key={item.id} href={item.href} className="recCard">
                                <img
                                    className="recCard_image"
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                />

                                <div className="recCard_body">
                                    <p className="recCard_meta">{item.date}</p>
                                    <h3 className="recCard_title">{item.title}</h3>
                                </div>

                                <div className="recCard_footer">
                                    <span className="recCard_tag">#{item.tag}</span>
                                    <div className="recCard_stats">
                                        <span className="recCard_stat">
                                            <span aria-hidden>👁</span> {item.views}
                                        </span>
                                        <span className="recCard_stat">
                                            <span aria-hidden>♡</span> {item.likes}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div> */}
                </section>

            </main>
        </>
    )
}

export default EventDetailPage