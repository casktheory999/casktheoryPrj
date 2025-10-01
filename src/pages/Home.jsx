import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../scss/Home.scss'
import MapCarousel from '../component/MapCarousel'
import useDocumentTitle from "../data/useDocumentTitle"

// 圖鑑區資料
const IlluData = {
    base: {
        zh: '基酒',
        en: 'Base Spirit',
        desc: '「六大基酒是文化的基礎，麥芽與橡木、杜松與草本、甘蔗與果香...，從原料到工藝，乘載著各式風味的可能性，體驗飲酒文化就從基酒開始。」',
        imgs: [
            { src: "images/newvodka.png", alt: "伏特加" },
            { src: "images/index-gin.png", alt: "琴酒" },
            { src: "images/Subtract.png", alt: "威士忌" },
        ],
    },
    classic: {
        zh: '經典調酒',
        en: 'Classic Cocktail',
        desc: '「經典雞尾酒是時代的縮影，苦艾與琴酒、蘭姆與果汁、威士忌與苦精...，從比例到平衡，凝聚著歷史的記憶與美感，探索調酒文化就從經典開始。」',
        imgs: [
            { src: "images/index-daiquiri.png", alt: "戴綺麗" },
            { src: "images/index-negroni.png", alt: "尼格羅尼" },
            { src: "images/index-sidecar.png", alt: "邊車" },
        ],
    },
    popular: {
        zh: '大眾調酒',
        en: 'Popular Cocktail',
        desc: '「大眾調酒是日常的陪伴，啤酒與汽水、伏特加與果茶、清酒與果汁...，從輕鬆到歡聚，蘊藏著親切熟悉的味道與氛圍，享受飲酒文化就從大眾開始。」',
        imgs: [
            { src: "images/index-cosmopolitan.png", alt: "柯夢波丹" },
            { src: "images/index-longisland.png", alt: "長島冰茶" },
            { src: "images/index-tequilasunrise.png", alt: "龍舌蘭日出" },
        ],
    },
}




const Home = () => {
    const [tab, setTab] = useState('base')
    // 新聞數據
    const newsData = [
        {
            id: 1,
            title: "【嚴選活動】｜環遊世界品調酒｜30 杯全球精選雞尾酒 DIY",
            image: "images/newsPoster1.jpg"
        },
        {
            id: 2,
            title: "【金曲佳釀】｜爵士及品酒之夜｜經典調酒配上爵士金曲",
            image: "images/newsPoster2.jpg"
        },
        {
            id: 3,
            title: "【茶酒特調】｜自己泡茶酒｜莓果白蘭地專題",
            image: "images/newsPoster3.jpg"
        },
        {
            id: 4,
            title: "【節慶專屬】｜中秋微醺提案－文旦柚子｜雙人體驗方案",
            image: "images/newsPoster4.jpg"
        },
        {
            id: 5,
            title: "【動手體驗】｜Mojito專題-沁涼一夏｜雙人體驗方案",
            image: "images/newsPoster5.jpg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // 自動輪播
    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % newsData.length);
        }, 4000);// 每4秒切換一次

        return () => clearInterval(timer);
    }, [isAutoPlaying, newsData.length]);

    // 處理hover事件
    const handleMouseEnter = (index) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    const handleMouseLeave = () => {
        setIsAutoPlaying(true);
    };

    const data = IlluData[tab]

    const onPick = (key) => setTab(key)


    return (
        <main className='home'>

            {/*Hero區*/}
            <section className='hero'>
                <div className='heroLeft'>
                    <h1 className='brand'>
                        <span className="brandLine brandLine--top">Cask</span>
                        <span className="brandLine brandLine--bottom">
                            Theory
                            <span className='brandZh'>酒桶理論</span>
                        </span>
                    </h1>
                </div>
                <div className='heroRightTop'>
                    <img src="images/man-is-pouring-strong-alcohol-drink-into-glass.jpg" alt="酒吧吧台與酒杯" />
                </div>
                <div className='heroLeftBottom'>
                    <img src="images/half-lime-with-cocktail-drink-garnish-with-cocktail-white-desk.jpg" alt="酒吧吧台與酒杯" />
                </div>
                <div className='heroRightBottom'>
                    <p className='slogan'>「從經典到創新，打開<span className='Bartending'>調酒</span>的全景視野」</p>
                </div>
            </section>

            {/*最新消息*/}
            <section className='news'>
                {/* 左：直排標題 */}
                <div className='newsLeft'>
                    <div className='newsN'>
                        <p>N</p>
                    </div>
                    <div className='newsTitle'>
                        <h2>酒吧活動消息</h2>
                    </div>
                </div>
                {/* 中：宣傳海報 */}
                <div className='newsPoster'>
                    <div className='posterContainer'>
                        {newsData.map((item, index) => (
                            <img
                                key={item.id}
                                src={item.image}
                                alt={item.title}
                                className={`posterImage ${index === currentIndex ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                    <div className='carouselDots'>
                        {newsData.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsAutoPlaying(false);
                                    setTimeout(() => setIsAutoPlaying(true), 5000);
                                }} />
                        ))}
                    </div>
                </div>
                {/* 右：新聞列表 */}
                <div className='newsright'>
                    <div className='newsList'>
                        <ul onMouseLeave={handleMouseLeave}>
                            {newsData.map((item, index) => (
                                <li
                                    key={item.id}
                                    className={index === currentIndex ? 'active' : ''}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                ><Link to="/EventDetailPage">{item.title}</Link></li>
                            ))}
                        </ul>
                        <Link className='goNewsBtn' to="/News">前往最新消息</Link>
                    </div>
                    <div className='newsWs'>
                        <p>Ws</p>
                    </div>
                </div>
            </section>

            {/* 酒吧地圖 */}
            <MapCarousel />

            {/* 路跑路線 */}
            <section className='route'>
                <h2 className='routeTitle'>酒精路跑路線</h2>
                <div className='routeCards'>
                    <Link to="/BarRoute/1" className='routeCard1'>
                        <img src="images/route1.jpg" alt="" />
                        <div className='info'>
                            <span className='num'>推薦路線 1</span>
                            <h3 className='title'>善導寺微醺漫步</h3>
                        </div>
                    </Link>
                    <Link to="/BarRoute/2" className='routeCard2'>
                        <img src="images/route2.jpg" alt="" />
                        <div className='info'>
                            <span className='num'>推薦路線 2</span>
                            <h3 className='title'>中山站醉意市集</h3>
                        </div>
                    </Link>
                    <Link to="/BarRoute/3" className='routeCard3'>
                        <img src="images/route3.jpg" alt="" />
                        <div className='info'>
                            <span className='num'>推薦路線 3</span>
                            <h3 className='title'>信義奢華浪漫之旅</h3>
                        </div>
                    </Link>
                </div>
            </section>


            {/* 酒精圖鑑 */}
            <section className='Illustrations'>
                <div className='leftImg'>
                    <img src='images/glass.png' alt='酒杯裝飾' />
                </div>

                <div className='Illustrations-nav'>
                    <h2>酒精圖鑑</h2>
                    <div className='navBtn'>
                        <button
                            className={tab === 'base' ? 'active' : ''}
                            onClick={() => onPick('base')}
                        >
                            基酒
                        </button>
                        <button
                            className={tab === 'classic' ? 'active' : ''}
                            onClick={() => onPick('classic')}
                        >
                            經典調酒
                        </button>
                        <button
                            className={tab === 'popular' ? 'active' : ''}
                            onClick={() => onPick('popular')}
                        >
                            大眾調酒
                        </button>
                    </div>
                </div>

                <div className='Illustrations-body'>
                    <div className='Illustrations-introduce'>
                        <div className='introduce-title'>
                            <h2 className='titleZh'>{data.zh}</h2>
                            <span className='titleEn'>{data.en}</span>
                        </div>
                        <p>{data.desc}</p>
                        <div className='cardRow'>
                            {data.imgs.map((it, i) => (
                                <img key={i} src={it.src} alt={it.alt} />
                            ))}
                        </div>
                        <Link className='goIllBtn' to='/Illustrations'>前往圖鑑目錄</Link>
                    </div>
                </div>
            </section>
        </main >
    )
}


export default Home