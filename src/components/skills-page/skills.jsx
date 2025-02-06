import { CardInfo } from "../../utils/script";
import { Card } from "../card/card";
import skillstyle from "./skills.module.css";

export function Skills() {
    return (
        <section className={skillstyle.skills}>
            <div className={skillstyle.container}>
                {CardInfo.map((item, index) => {
                    const { title, time } = item;
                    return <Card title={title} time={time} key={index} />;
                })}
            </div>
        </section>
    );
}
