import homestyle from "./home.module.css";

export function Home() {
    return (
        <>
            <section className={homestyle.home}>
                <div className={homestyle.container}>
                    <div className={homestyle.content}>
                        <h1 className={homestyle.title}>
                            Nice to meet you! I’m <span>Adam Keyes.</span>
                        </h1>
                        <p className={homestyle.desc}>
                            Based in the UK, I’m a front-end developer
                            passionate about building accessible web apps that
                            users love.
                        </p>
                        <button className={homestyle.btn}>CONTACT ME</button>
                    </div>
                    <img
                        src="./src/assets/portfolio-img.jpg"
                        alt="portfolio jpg"
                        className={homestyle.portfolio}
                    />
                </div>
            </section>
        </>
    );
}
