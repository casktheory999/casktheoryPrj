import React from 'react'
import { Link } from "react-router-dom"
import '../scss/About.scss'

const About = () => {
    return (
        <>
            <section className='Ian_aboutFirst'>
                <div className='Ian_firstText'> {/* 整體內容外框 */}
                    <div className='Ian_firstMain'>
                        <div className='Ian_aboutRwdTitle'>
                            <h1>AboutUs</h1>
                        </div>
                        <div className='Ian_bout'>
                            <img src="images/bout.png" alt="" />
                        </div>
                        <div className='Ian_aboutText1'>
                            <h2>Cask Theory團隊</h2>
                        </div>
                        <div className='Ian_aboutText2'>
                            <p>還記得嗎？</p>
                            <p>夜晚不一定要熱鬧，有時候只是一杯酒，</p>
                            <p>就能替今天收個尾。</p>
                        </div>
                        <div className='Ian_us'>
                            <img src="images/us.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='Ian_aboutSecond'>
                <div className='Ian_aboutFunction'>
                    <div className='Ian_functionText'>
                        <p>整合雙北酒吧與餐酒館資訊，讓夜晚選擇變得更簡單多元</p>
                        <p>豐富酒類介紹，從基酒到調酒，完整收錄、一目瞭然</p>
                        <p>獨家設計的酒精路跑路線圖，幫助沒有靈感的夜晚找到方向</p>
                        <p>精緻會員收藏頁，將喜愛的酒種與酒吧加入口袋名單，創建個人專屬收藏庫</p>
                    </div>
                    <div className='Ian_functionTitle'>
                        <h2>核心功能</h2>
                    </div>
                </div>
            </section>
            <section className='Ian_aboutThird'>
                <div className='Ian_ourStory'>
                    <div className='Ian_storyTitle'>我們的故事</div>
                    <div className='Ian_storyText1'>
                        <p>我們熱愛酒吧文化，也熱愛調酒的世界。</p>
                        <p>但夜晚選擇豐富，常讓人難以決定該走進哪間店，或舉起哪一杯。</p>
                    </div>
                    <div className='Ian_storyPhoto'>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <div className='Ian_storyText2'>
                        <p>但我們明白，酒吧與調酒從來不只是飲品，它們是夜色的一部分，</p>
                        <p>是讓相遇更偶然、回憶更悠長的理由。</p>
                    </div>
                    <div className='Ian_storyText3'>
                        <p>所以我們把它們收集起來，化作地圖、圖鑑與幾條路線，</p>
                        <p>希望讓夜晚不再複雜，只是簡單地，留下屬於你的微醺時光。</p>
                    </div>
                    <div className='Ian_storyText4'>
                        <p>「我為那些不喝酒的人感到惋惜，他們一早醒來，就再也不會有比那更美好的感受了。」</p>
                        <p>“I feel sorry for people who don't drink. When they wake up in the morning, </p>
                        <p>that's as good as they're going to feel all day.”</p>
                        <p>－frank sinatra(1915-1998)</p>
                    </div>
                    <div className='Ian_storyBtn'>
                        <Link className='Ian_goHome' to="/Home">
                            <button className='Ian_backHomeBTN'>回首頁</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About