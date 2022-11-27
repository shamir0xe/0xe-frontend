import React, { lazy, useEffect, useInsertionEffect, useRef, useState } from "react";
import classes from "./blog.module.css";
import contents from "./contents";
import { nanoid } from "nanoid";

const Blog = (props) => {
    const [cards, setCards] = useState([]);
    const [table, setTable] = useState([]);

    const importCard = (cardName) =>
        lazy(async () => {
            try {
                return await import("src/components/blog/" + cardName);
            } catch (e) {
                return await import("src/components/blog/null");
            }
        });

    const importContent = (cardName) =>
        require("src/components/blog/" + cardName + "/contents").default;

    useEffect(() => {
        async function loadCards() {
            const promises = cardsList.map(async (cardName, index) => {
                const Card = importCard(cardName);
                return <Card key={nanoid()} reference={titleRefs[index]} />;
            });
            Promise.all(promises).then(setCards);
        }
        loadCards();

        setTable(
            cardsList.map((cardName, index) => {
                const content = importContent(cardName);
                if (!content.hasOwnProperty("txts"))
                    return <div key={nanoid()} />;
                return (
                    <li
                        className={classes.CardLink}
                        key={nanoid()}
                        onClick={() => {
                            if (titleRefs[index].current)
                                window.scrollTo({
                                    top: titleRefs[index].current.offsetTop,
                                    behavior: "smooth",
                                });
                        }}
                    >
                        {content.txts.title}
                    </li>
                );
            })
        );
    }, [cardsList]);

    const cardsList = contents.cardsList;
    const titleRefs = contents.cardsList.map(_ => {
        return useRef(null);
    });

    const component = (
        <section className={classes.Container}>
            <div className={classes.TableOfContents}>
                <h1 className={classes.Title}>{contents.txts.title}</h1>
                <ul>{table}</ul>
            </div>
            <div className={classes.Cards}>{cards}</div>
        </section>
    );

    return props.active ? component : <div />;
};

export default Blog;
