import React, { useState } from "react";
import classes from "./index.module.css";
import contents from "./contents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appendConditionalClass } from "src/helpers/utils";

const Shoots = (props) => {
    const component = (
        <section className={classes.Container}>
            <h1>{contents.txts.title}</h1>
            <h2>{props.page}</h2>
        </section>
    );

    return props.active ? component : <div />;
};

export default Shoots;
