import React, { useState } from "react";
import classes from "./nullCard.module.css";
import contents from "./contents";

const NullCard = (props) => {
    return (
        <section className={classes.Container} ref={props.reference}>
            <h1 className={classes.Title}>{contents.txts.title}</h1>
            <footer className={classes.Footer}>
                <p>نوشته شده در ۶ آذر، ۱۴۰۱</p>
            </footer>
        </section>
    );
};

export default NullCard;
