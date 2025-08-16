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
                <div className='newsContent'>
                    <article className='newsCard'>
                        <img src="/images/news-jazz.jpg" alt="宣傳圖" /> {/* 宣傳圖 */}
                        <div className='newsCard-body'>
                            <h3>JAZZ NIGHT</h3>
                            <p>每週五晚間 8:00～11:00 ；現場樂手即興演出與特調搭配。</p>
                        </div>
                    </article>
                    <ul className='newsList'>
                        <li><Link to="/News">【徵文活動】最愛的 Old Fashioned 故事（至 9/30）</Link></li>
                        <li><Link to="/News">【新品】高地單一麥芽限定入庫通知</Link></li>
                        <li><Link to="/News">【課程】調酒入門班：酸甜平衡與烈酒基礎</Link></li>
                        <li><Link to="/News">【優惠】本月會員日第二杯半價</Link></li>
                    </ul>
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
                    <img src="" alt="" />
                </div>
                <div className='Illustrations-nav'>
                    <h2>酒精圖鑑</h2>
                    <button>基酒</button>
                    <button>經典調酒</button>
                    <button>大眾調酒</button>
                    <button>家庭調酒</button>
                </div>
                <div className='Illustrations-body'>
                    <div className='Illustrations-introduce'>
                        <div className='introduce-title'>
                            <h2>基酒</h2>
                            <h3>Base Spirit</h3>
                        </div>
                        <p>「基酒是文化的基礎，麥芽與橡木、杜松與草本、甘蔗與果香...，從原料到工藝，乘載著各式風味的可能性，體驗飲酒文化就從基酒開始。」</p>
                        <img src="" alt="" />
                        <Link className='goIllBtn' to="./Illustrations">前往圖鑑</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}


export default Home