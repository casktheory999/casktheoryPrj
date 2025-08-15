import React from 'react'
import '../css/style.css';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const BarInnerPage = () => {
    return (
        <>
            <Navbar />


            <section id="hero" className="containerHero">
                <div className="card-left">
                    <h2>潮飲空間</h2>
                    <ul>
                        <li>地址：</li>
                        <li>電話：</li>
                        <li>營業時間：</li>
                    </ul>
                    <p className="description">文案文案文案</p>
                </div>
                <figure className="card-right">
                    <img src="…" alt="" />
                </figure>
            </section>

            <section id="recommendations" className="barRecommendations">
                <figure className="card">…</figure> 
                <figure className="card">…</figure>
            </section>

            <button className="cta">回到熱門圖鑑</button>


            <Footer />
        </>
    )
}

export default BarInnerPage