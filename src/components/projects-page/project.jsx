import { projectCardInfo } from "../../utils/script";
import { ProjectCard } from "../card/card";
import styleproject from "./project.module.css";

export function Project() {
    return (
        <>
            <section className={styleproject.project}>
                <div className={styleproject.container}>
                    <div className={styleproject.titleProject}>
                        <h1>Projects</h1>
                        <button className={styleproject.btn}>CONTACT ME</button>
                    </div>
                    <div className={styleproject.cards}>
                        {projectCardInfo.map((item, index) => {
                            const { img, title, html, css, javascript } = item;
                            return (
                                <ProjectCard
                                    img={img}
                                    title={title}
                                    html={html}
                                    css={css}
                                    javascript={javascript}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
