import { Link } from "react-router-dom"
import { Route, Routes } from 'react-router-dom'
import EventDetailPage from "./EventDetailPage"
import '../scss/News.scss'
import useDocumentTitle from "../data/useDocumentTitle"


const News = () => {
    // 文章列表資料
    const arrArticle = [
        {
            id: 1,
            month: 'Sept.',
            date: 20,
            articleTitle: '【嚴選活動】',
            articleSub: '環遊世界品調酒｜30 杯全球精選雞尾酒',
            articleImg: './images/activity1.png',
            detailPage: '/EventDetailPage',
        },
        {
            id: 2,
            month: 'Sept.',
            date: 19,
            articleTitle: '【金曲佳釀】',
            articleSub: '爵士及品酒之夜｜經典調酒配上爵士金曲',
            articleImg: './images/activity2.png',
            detailPage: '/EventDetailPage',
        }, {
            id: 3,
            month: 'Sept.',
            date: 13,
            articleTitle: '【茶酒特調】',
            articleSub: '自己泡茶酒｜莓果白蘭地專題',
            articleImg: './images/activity3.png',
            detailPage: '/EventDetailPage',
        }, {
            id: 4,
            month: 'Sept.',
            date: 13,
            articleTitle: '【節慶專屬】',
            articleSub: '中秋微醺提案－文旦柚子｜雙人體驗方案',
            articleImg: './images/activity4.png',
            detailPage: '/EventDetailPage',
        }, {
            id: 5,
            month: 'Sept.',
            date: '05',
            articleTitle: '【動手體驗】',
            articleSub: 'Mojito專題｜沁涼一夏－雙人體驗方案',
            articleImg: './images/activity5.png',
            detailPage: '/EventDetailPage',
        }, {
            id: 6,
            month: 'Sept.',
            date: '05',
            articleTitle: '【嚴選活動】',
            articleSub: '環遊世界品調酒｜30 杯全球精選雞尾酒',
            articleImg: './images/activity1.png',
            detailPage: '/EventDetailPage',
        }, {
            id: 7,
            month: 'Aug.',
            date: '30',
            articleTitle: '【金曲佳釀】',
            articleSub: '爵士及品酒之夜｜經典調酒配上爵士金曲',
            articleImg: './images/activity2.png',
            detailPage: '/EventDetailPage',
        }, {
            id: 8,
            month: 'Aug.',
            date: '29',
            articleTitle: '【茶酒特調】',
            articleSub: '自己泡茶酒｜莓果白蘭地專題',
            articleImg: './images/activity3.png',
            detailPage: '/EventDetailPage',
        }, {
            id: 9,
            month: 'Aug.',
            date: '22',
            articleTitle: '【節慶專屬】',
            articleSub: '中秋微醺提案－文旦柚子｜雙人體驗方案',
            articleImg: './images/activity4.png',
            detailPage: '/EventDetailPage',
        }
    ]

    // 單一文章本體元件
    const ArticleBody = ({ month, date, articleTitle, articleSub, articleImg, detailPage }) => {
        return (
            <Link className="Ian_goDetailPage" to={detailPage}>
                <div className="Ian_articleBody" >
                    <div className="Ian_dateBox">
                        <div className="Ian_decorateBox">
                            <div className="Ian_decorateUpBox"></div>
                            <div className="Ian_decorateDownBox"></div>
                        </div>
                        <div className="Ian_articleDate">
                            <div className="Ian_month">{month}</div>
                            <div className="Ian_date">{date}</div>
                        </div>
                    </div>
                    <div className="Ian_articleMain">
                        <div className="Ian_textBox">
                            <h2 className="Ian_articleTitle">{articleTitle}</h2>
                            <h3 className="Ian_articleSub">{articleSub}</h3>
                        </div>
                        <div className="Ian_imgBox">
                            <img src={articleImg} className="Ian_articleImg" alt="" />
                        </div>
                    </div>
                </div>
            </Link>
        )
    }

    useDocumentTitle("最新消息");

    return (
        <>
            <section className="Ian_news">
                <div className="Ian_mainArea">
                    <div className="Ian_title">
                        <h1>酒吧活動消息</h1>
                    </div>


                    <div className="Ian_articleArea">
                        {arrArticle.map((articles) => {
                            return (
                                <ArticleBody
                                    key={articles.id}
                                    month={articles.month}
                                    date={articles.date}
                                    articleTitle={articles.articleTitle}
                                    articleSub={articles.articleSub}
                                    articleImg={articles.articleImg}
                                    detailPage={articles.detailPage}
                                ></ArticleBody>
                            )
                        })}
                    </div>
                </div>
                {/* <div className="Ian_pageBox">
                    <div className="Ian_newsPages">＜</div>
                    <div className="Ian_newsPages">1</div>
                    <div className="Ian_newsPages">2</div>
                    <div className="Ian_newsPages">3</div>
                    <div className="Ian_newsPages">4</div>
                    <div className="Ian_newsPages">...</div>
                    <div className="Ian_newsPages">＞</div>
                </div> */}
            </section>
        </>
    )

}
export default News