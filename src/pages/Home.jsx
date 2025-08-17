import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/Home.scss'

const Home = () => {
    return (
        <main className='home'>

            {/*Hero區*/}

            <section className='hero'>
                <div className='heroLeft'>
                    <h1 className='brand'>Cask<br />Theory<br /></h1>
                    <p className='slogan'>從經典到創新，打開調酒的全景視野。</p>
                </div>
                <figure className='heroRightTop'>
                    <img src="/images/hero-main.jpg" alt="酒吧吧台與酒杯" />{/*等圖片*/}
                </figure>
                <figure className='heroLeftBottom'>
                    <img src="/images/hero-main.jpg" alt="酒吧吧台與酒杯" />{/*等圖片*/}
                </figure>
            </section>

            {/*最新消息*/}

            <section className='news'>
                {/* 左：直排標題 */}
                <div className='newsTitle'>酒吧活動消息</div>
                {/* 中：宣傳海報 */}
                <figure className='newsPoster'>
                    <img src="" alt="宣傳海報" />
                </figure>
                {/* 右：新聞列表 */}
                <div className='newsList'>
                    <ul>
                        <li><Link to="/News">【嚴選活動】｜環遊世界品調酒｜30 杯全球精選雞尾酒 DIY</Link></li>
                        <li><Link to="/News">【金曲佳釀】｜爵士及品酒之夜｜經典調酒配上爵士金曲</Link></li>
                        <li><Link to="/News">【茶酒特調】｜自己泡茶酒｜莓果白蘭地專題</Link></li>
                        <li><Link to="/News">【節慶專屬】｜中秋微醺提案－文旦柚子｜雙人體驗方案</Link></li>
                        <li><Link to="/News">【動手體驗】｜Mojito專題｜沁涼一夏｜雙人體驗方案</Link></li>
                    </ul>
                    <Link className='goNewsBtn' to="/News">前往最新消息</Link>
                </div>
            </section>

            {/* 酒吧地圖 */}

            <section className='mapRoute'>
                <div className='map-head'>
                    <h2>酒吧地圖</h2>
                </div>
                <div className='card-row'>

                </div>
                <div className='route-head'>
                    <h2>路跑路線</h2>
                </div>
            </section>

            {/* 酒精圖鑑 */}

            <section className='Illustrations'>
                <div className='leftImg'>
                    <img src="" alt="酒杯裝飾" />
                </div>
                <div className='Illustrations-nav'>
                    <h2>酒精圖鑑</h2>
                    <div className='navBtn'>
                        <button className='active'>基酒</button>
                        <button>經典調酒</button>
                        <button>大眾調酒</button>
                        <button>家庭調酒</button>
                    </div>
                </div>
                <div className='Illustrations-body'>
                    <div className='Illustrations-introduce'>
                        <div className='introduce-title'>
                            <h2 className='titleZh'>基酒</h2>
                            <span className='titleEn'>Base Spirit</span>
                        </div>
                        <p>「基酒是文化的基礎，麥芽與橡木、杜松與草本、甘蔗與果香...，從原料到工藝，乘載著各式風味的可能性，體驗飲酒文化就從基酒開始。」</p>
                        <div className='cardRow'>
                            <figure className='card'>
                                <img src="" alt="伏特加" />
                                <figcaption>伏特加</figcaption>
                            </figure>
                            <figure className='card'>
                                <img src="" alt="威士忌" />
                                <figcaption>威士忌</figcaption>
                            </figure>
                            <figure className='card'>
                                <img src="" alt="琴酒" />
                                <figcaption>琴酒</figcaption>
                            </figure>
                        </div>
                        <Link className='goIllBtn' to="/Illustrations">前往圖鑑目錄</Link>
                    </div>
                </div>
            </section>
        </main >
    )
}


export default Home