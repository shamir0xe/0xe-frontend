import React, { useState } from "react";
import classes from "./index.module.css";
import contents from "./contents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appendConditionalClass } from "src/helpers/utils";

const Footer = (props) => {
    return (
        <footer className={classes.Container}>
            <p className={classes.Text}>written by shamir0xe, 25 Nov 2022</p>
        </footer>
    );
};

export default Footer;
