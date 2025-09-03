import { Link } from "react-router-dom"
import '../scss/Bar.scss'
import BarListCard from '/data/BarListCard.json'
import ABarListCard from'../component/ABarListCard.jsx'
import { useState } from "react"


export default function Bar() {

    const [arrBarList] = useState(BarListCard)

    return (
        <main className="bar">
            <section className="barHero">
                <h1 className="barHeroTitle">酒吧地圖</h1>
                <div className="barHeroFilter">
                    <ul className="mrtList">
                        <li className="mrtItem">
                            <button className="mrtBtn">全部</button>
                            <span className="mrtLine" />
                        </li>
                        <li className="mrtItem">
                            <button className="mrtBtn">淡水信義線</button>
                            <span className="mrtLine" style={{ '--line-color': '#E3002C' }} />
                        </li>
                        <li className="mrtItem">
                            <button className="mrtBtn">板南線</button>
                            <span className="mrtLine" style={{ '--line-color': '#0070BD' }} />
                        </li>
                        <li className="mrtItem">
                            <button className="mrtBtn">松山新店線</button>
                            <span className="mrtLine" style={{ '--line-color': '#008659' }} />
                        </li>
                        <li className="mrtItem">
                            <button className="mrtBtn">文湖線</button>
                            <span className="mrtLine" style={{ '--line-color': '#865A13' }} />
                        </li>
                        <li className="mrtItem">
                            <button className="mrtBtn">中和新蘆線</button>
                            <span className="mrtLine" style={{ '--line-color': '#F8B61C' }} />
                        </li>
                    </ul>

                    <label className="barSearch">
                        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                            <circle cx="11" cy="11" r="7" stroke="currentColor" fill="none" strokeWidth="2" />
                            <line x1="16.65" y1="16.65" x2="22" y2="22" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <input type="search" placeholder="搜尋酒吧" aria-label="搜尋酒吧" />
                    </label>
                </div>

                <div>
                    {/* <ABarListCard/> */}
                    {
                        arrBarList.map((BarListCard) => {
                            <ABarListCard {...BarListCard} key={BarListCard.id} />
                        })}
                </div>
            </section>
            <div>
                <Link to='/BarInnerPage'>酒吧內頁</Link>
            </div>
        </main>
    )
}