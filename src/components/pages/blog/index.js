import React, { lazy, useEffect, useState } from "react";
import classes from "./blog.module.css";
import contents from "./contents";

const Blog = (props) => {
    const [cards, setCards] = useState([]);

    const importCard = (cardName) =>
        lazy(async () => {
            try {
                return await import("src/components/blog/" + cardName);
            } catch (e) {
                return await import("src/components/blog/null");
            }
        });

    useEffect(() => {
        async function loadCards() {
            const promises = cardsList.map(async (cardName) => {
                const Card = importCard(cardName);
                return <Card key={cardName} />;
            });
            Promise.all(promises).then(setCards);
        }
        loadCards();
    }, [cardsList]);

    const cardsList = contents.cardsList;

    const component = (
        <section className={classes.Container}>
            <div className={classes.Cards}>
                <h1 className={classes.Title}>{contents.txts.title}</h1>
                {cards}
            </div>
        </section>
    );

    return props.active ? component : <div />;
};

export default Blog;
