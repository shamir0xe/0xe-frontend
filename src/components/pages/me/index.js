import React from "react";
import classes from "./me.module.css";
import contents from "./contents";

const Me = (props) => {
    const elements = (socials) => {
        return socials.map((social, index) => {
            return (
                <li className={classes.SocialItem} key={`li-${index}`}>
                    <img
                        src={social.logo.src}
                        alt={social.logo.alt}
                        className={classes.SocialLogo}
                    />
                    <a href={social.url}>{social.logo.alt}</a>
                </li>
            );
        });
    };

    const component = (
        <section className={classes.Container}>
            <div className={classes.Body}>
                <h1>{contents.txts.title}</h1>
                <p>{contents.txts.main}</p>
                <p>{contents.txts.abstract}</p>
                <p
                    dangerouslySetInnerHTML={{ __html: contents.txts.contact }}
                />
                <ul className={classes.SocialList}>
                    {elements(contents.socials)}
                </ul>
            </div>
        </section>
    );

    return props.active ? component : <div />;
};

export default Me;
