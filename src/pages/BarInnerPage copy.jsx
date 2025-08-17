import React from 'react'
// import '../css/style.css';
import '../css/BarInnerPage.css';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import heroImg from '../images/barInnerPage-1.png';
import rec1Img from '../images/barInnerPage-2.png';
import rec2Img from '../images/barInnerPage-3.png';


const BarInnerPage = () => {
    return (
        <>
            <Navbar />

            <main className="barInnerPage">
                {/* Hero 區 */}
                <section id="hero" className="heroContainer">

                    {/* 左側：hero酒吧文案 */}
                    <div className="cardLeft">
                        <h2>潮飲空間</h2>

                        {/* 連絡資訊：語意化 */}
                        <address className="contact" /* SCSS 再把預設斜體改回正常 */>
                            <p>地址：新北市新北一路二段15樓</p>
                            <p>
                                電話：<a href="tel:0949494949">0949-494-949</a>
                            </p>
                            <p>營業時間：20:00–02:00</p>
                        </address>

                        <div className="description">
                            <p>在暖黃燈下，甬管柔唱輕撫心弦，貝斯低吟</p>
                            <p>穿越夜色。今宵經典爵士之夜，現場薩克斯</p>
                            <p>與鋼琴共舞，細品調和雞尾酒，讓律動與酒</p>
                            <p>香交織。邀您相約週五晚，於吧檯前舉杯，</p>
                            <p>沉浸不朽樂章，為平凡夜晚增添永恆樂章。</p>
                        </div>
                    </div>

                    {/* 右側：hero酒吧圖片 */}
                    <div className="cardRight">
                        <figure className="heroPhoto">
                            <img src={heroImg} alt="潮飲空間圖片" />
                        </figure>
                    </div>

                </section>

                {/* 推薦酒吧區 */}
                <section id="recommendations" className="recommendationsContainer">
                    <div className='recPhotos'>
                        <button className="btnLeft">向左滑動</button>
                        {/* 左側：推薦酒吧1+文案 */}
                        <figure className="recPhoto1">
                            <img src={rec1Img} alt="The Gilded Drop圖片" />
                            <figcaption>
                                The Gilded Drop — 在暖黃燈下，甬管柔唱輕撫心弦，貝斯在暖黃燈下，甬管弦，貝斯在暖在暖黃燈下低...
                            </figcaption>
                        </figure>

                        {/* 右側：推薦酒吧2+文案 */}
                        <figure className="recPhoto2">
                            <img src={rec2Img} alt="時光行者圖片" />
                            <figcaption>
                                時光行者 — 在暖黃燈下，甬管柔唱輕撫心弦，貝斯在暖黃燈下，甬管弦，貝斯在暖在暖黃燈下低...
                            </figcaption>
                        </figure>
                    </div>

                </section>

                {/* 按鈕容器 */}
                <div className='btnContainer'>
                    <button className="btnToListPage">回到熱門圖鑑</button>
                </div>

                {/* 純粹只是背景板的一個黑色區塊 */}
                <div className="blackBlock">
                    純粹只是背景板的一個黑色區塊
                </div>


            </main>

            <Footer />
        </>
    )
}

export default BarInnerPage