import { useMemo, useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom'


const speedWheel = 0.08;
const EPS = 1;

const clamp = (n, min, max) => Math.max(min, Math.min(n, max));

const getZIndexArray = (len, active) =>
    Array.from({ length: len }, (_, i) => len - Math.abs(active - i));

export default function MapCarousel() {
    const bars = [
        {
            mrt: "中山站",
            title: "Draft Land",
            img: "images/barCard1.png",
        },
        {
            mrt: "忠孝復興站",
            title: "Bar Mood",
            img: "images/barCard2.png",
        },
        {
            mrt: "台北小巨蛋",
            title: "The Whisky Bar",
            img: "images/barCard3.png",
        },
        {
            mrt: "忠孝敦化站",
            title: "Mixology",
            img: "images/barCard4.png",
        },
        {
            mrt: "台北101/世貿站",
            title: "Rooftop 101",
            img: "images/barCard5.png",
        },
        {
            mrt: "中山國小站",
            title: "Speakeasy",
            img: "images/barCard6.png",
        },
        {
            mrt: "國父紀念館站",
            title: "The Gin Room",
            img: "images/barCard7.png",
        },
        {
            mrt: "南京三民站",
            title: "Jazz Corner",
            img: "images/barCard8.png",
        },
        {
            mrt: "南港展覽館站",
            title: "Craft & Draft",
            img: "images/barCard9.png",
        },
        {
            mrt: "淡水站",
            title: "Sunset Lounge",
            img: "images/barCard10.png",
        },
    ];

    const count = bars.length;

    const [progress, setProgress] = useState(50);

    const active = Math.floor(clamp(progress, 0, 100) / 100 * (count - 1));

    const zIndexes = useMemo(() => getZIndexArray(count, active), [count, active]);

    const sectionRef = useRef(null);
    const progressRef = useRef(progress);
    const isScrollingRef = useRef(false);
    useEffect(() => { progressRef.current = progress; }, [progress]);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const onWheel = (e) => {
            const p = progressRef.current;
            const goingDown = e.deltaY > 0;
            const goingUp = e.deltaY < 0;
            const atStart = p <= 0 + EPS && goingUp;
            const atEnd = p >= 100 - EPS && goingDown;
            if (atStart || atEnd) {
                isScrollingRef.current = false;
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            isScrollingRef.current = true;

            setProgress((prev) => {
                const newProgress = clamp(prev + e.deltaY * speedWheel, 0, 100);
                return newProgress;
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        el.addEventListener("wheel", onWheel, { passive: false });
                    } else {
                        el.removeEventListener("wheel", onWheel);
                        isScrollingRef.current = false;
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: '-10% 0px'
            }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
            el.removeEventListener("wheel", onWheel);
        };
    }, []);


    const onItemClick = (i) => {
        const next = (i / (count - 1)) * 100;
        setProgress(clamp(next, 0, 100));
    };

    return (
        <section className="mapSection">
            <div className="mapTitleBox">
                <h2 className="mapTitle">酒吧地圖</h2>
            </div>
            <div className="map" ref={sectionRef}>
                <div className="carousel">
                    {bars.map((bar, i) => (
                        <div
                            key={i}
                            className="carousel-item"
                            onClick={() => onItemClick(i)}
                            style={{
                                "--zIndex": zIndexes[i],
                                "--active": (i - active) / count,
                            }}
                        >
                            <div className="carousel-box">
                                {bar.mrt && <div className="mrt">{bar.mrt}</div>}
                                <div className="title">{bar.title}</div>
                                <div className="num">{String(i + 1).padStart(2, "0")}</div>
                                <img src={bar.img} alt={bar.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="goToBar">
                <Link className='goBarBtn' to="/Bar">前往酒吧列表</Link>
            </div>
        </section>
    );
}
