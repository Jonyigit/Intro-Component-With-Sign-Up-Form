import cardstyle from "./card.module.css";

export function Card({ title, time }) {
    return (
        <div className={cardstyle.card}>
            <h1>{title}</h1>
            <p>{time}</p>
        </div>
    );
}

export function ProjectCard({ img, title, html, css, javascript }) {
    return (
        <>
            <div className={cardstyle.projectCard}>
                <div className={cardstyle.cardImg}>
                    <img src={img} alt="card img" />
                    <div className={cardstyle.overlay}>
                        <div className={cardstyle.btns}>
                            <button className={cardstyle.btn1}>
                                VIEW PROJECT
                            </button>
                            <button className={cardstyle.btn1}>
                                VIEW CODE
                            </button>
                        </div>
                    </div>
                </div>
                <h3>{title}</h3>
                <ul>
                    <li>{html}</li>
                    <li>{css}</li>
                    <li>{javascript}</li>
                </ul>
            </div>
        </>
    );
}
