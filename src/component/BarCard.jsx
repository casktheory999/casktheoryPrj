import React from "react";
import { Link } from "react-router-dom";
import "../scss/BarCard.scss";

const BarCard = ({ bar, cardType = "square" }) => {
    const getBadgeConfig = (type) => {
        switch (type) {
            case "熱門":
                return {
                    text: "熱門",
                    className: "badge-hot"
                };
            case "最新":
                return {
                    text: "最新",
                    className: "badge-new"
                };
            default:
                return null;
        }
    };

    const badgeConfig = getBadgeConfig(bar.type);

    return (
        <Link
            // to={`/bar-inner/${bar.id}`}
            to='/BarInnerPage'
            className={`bar-card ${cardType}`}
        >
            <div className="img-box">
                <img
                    src={`https://images.unsplash.com/photo-${1565895311445 + bar.id}-7c0cac1c5dae?w=400&h=300&fit=crop`}
                    alt={bar.name}
                />
                {badgeConfig && (
                    <div className={`badge ${badgeConfig.className}`}>
                        {badgeConfig.text}
                    </div>
                )}
            </div>
            <div className="text-box">
                <h3 className="bar-name">{bar.name}</h3>
                <div className="station-info">
                    <span
                        className="mrt-line"
                        style={{ color: bar.lineColor }}
                    >
                        {bar.line}
                    </span>
                    <span className="divider">•</span>
                    <span className="station">{bar.station}</span>
                </div>
                <p className="description">
                    {bar.description}
                </p>
            </div>
        </Link>
    );
};

export default BarCard;