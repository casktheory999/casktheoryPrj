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
            mrt: "101世貿站",
            title: "哈哈酒吧",
            img: "https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g=",
        },
        {
            mrt: "中山站",
            title: "Tub Bistro",
            img: "https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY=",
        },
        {
            mrt: "圓山站",
            title: "大麥餐酒",
            img: "https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I=",
        },
        {
            mrt: "士林站",
            title: "那間酒吧",
            img: "https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=",
        },
        {
            mrt: "北投站",
            title: "溫泉餐酒",
            img: "https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0=",
        },
        {
            mrt: "",
            title: "Prague",
            img: "https://media.istockphoto.com/id/1299954175/it/foto/villa-cubica-moderna.jpg?s=612x612&w=0&k=20&c=DhGhb3c1E3DW_fbrWJ_R_Zh0Lbwu6syFeRLsKlZ9no8=",
        },
        {
            mrt: "",
            title: "Munich",
            img: "https://media.istockphoto.com/id/926689776/it/foto/vista-ad-angolo-basso-dei-grattacieli-di-new-york.jpg?s=612x612&w=0&k=20&c=DmEB0Ty7ZwDnBoU5SuA8FNevOp4G1UcECw5aS4vA9A8=",
        },
        {
            mrt: "",
            title: "Venice",
            img: "https://media.istockphoto.com/id/1191376167/it/foto/villa-dellisola.jpg?s=612x612&w=0&k=20&c=PKslWo4FdbjinohKQlK_oWL34jqAsnzMTdy2bxEAf-I=",
        },
        {
            mrt: "",
            title: "Oslo",
            img: "https://media.istockphoto.com/id/184316397/it/foto/londra-edifici-aziendali.jpg?s=612x612&w=0&k=20&c=XqrRxEPzFnwRFk7PQrCiu9-FPfCTPyMe5BKKaxYXCs8=",
        },
        {
            mrt: "",
            title: "London",
            img: "https://media.istockphoto.com/id/184619832/it/foto/distretto-finanziario-al-crepuscolo-londra.jpg?s=612x612&w=0&k=20&c=RAThrJOBY6vhlT6-kQpu9-9jLEzWToYfdw46S8B0Mu0=",
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
