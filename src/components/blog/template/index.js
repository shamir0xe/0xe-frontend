import React from "react";
import classes from "./template.module.css";
import contents from "./contents";

const TemplateCard = () => {
    return (
        <section className={classes.Container}>
            <h1 className={classes.Title}>{contents.txts.title}</h1>
            <footer className={classes.Footer}>
                <p>نوشته شده در {contents.txts.date}</p>
            </footer>
        </section>
    );
};

export default TemplateCard;
