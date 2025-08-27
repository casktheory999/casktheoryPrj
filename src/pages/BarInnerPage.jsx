import React from 'react'
// import '../css/style.css';
import '../css/BarInnerPage.css';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import heroImg from '../images/barInnerPage-1.png';
import rec1Img from '../images/barInnerPage-2.png';
import rec2Img from '../images/barInnerPage-3.png';
import arrowImg1 from '../images/barInnerPage-top-arrow.png';
import arrowImg2 from '../images/barInnerPage-bottom-arrow.png';
import arrowImg3 from '../images/barInnerPage-left-arrow.png';

const BarInnerPage = () => {
    return (
        <>

            <main className="barInnerPage">
                {/* Hero 區 */}
                <section id="hero" className="heroContainer">

                    {/* 左側：hero酒吧文案 */}
                    <div className="cardLeft">
                        <h2>潮飲空間</h2>

                        {/* 連絡資訊：語意化 */}
                        <address className="contact" /* SCSS 再把預設斜體改回正常 */>
                            <p>地址：新北市新北一路二段15樓</p>
                            <p>電話：0949-494-949
                                {/* <a href="tel:0949494949"></a> 這是電擊電話號碼會自動跳轉播號的超連結功能 */}
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
                            <img className="heroImg" src={heroImg} alt="潮飲空間圖片" style={{width:'850px'}}/>
                            <img className="arrowImg1" src={arrowImg1} alt="裝飾箭頭1" />
                        </figure>
                    </div>

                </section>

                {/* 推薦酒吧區 */}
                <section id="recommendations" className="recommendationsContainer">
                        <figure className='leftArrow'>
                            <img src={arrowImg2} alt="裝飾箭頭2" style={{width:'100px'}}/>
                        </figure>
                    <div className='recPhotos'>
                        <button className="btnLeft">
                            {/* <img src={arrowImg3} alt="向左滑動" style={{width:'48px'}}/> */}
                        </button>
                        

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
                </div>


            </main>

        </>
    )
}

export default BarInnerPage