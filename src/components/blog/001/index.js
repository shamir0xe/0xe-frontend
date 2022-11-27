import React from "react";
import classes from "./blog001.module.css";
import contents from "./contents";

const Card001 = () => {
    return (
        <section className={classes.Container}>
            <div className={classes.Content}>
                <h1 className={classes.Title}>{contents.txts.title}</h1>
                <p>
                    همیشه اولین پست باعث می‌شه آدم به فکر فرو بره که چی شد که
                    رسیدیم اینجا. خب برای تست هم که شده داریم می‌بینیم می‌شه یه
                    چیز درست درمون بشه یا نه، حتماً نیاز به ابزار هست. راستش
                    فعلاً نمی‌دونم. باید دید.
                </p>
                <img
                    src={contents.imgs.cat.src}
                    alt={contents.imgs.cat.src}
                    className={classes.Img}
                />
                <p>
                    خب این رو هم اضافه کنم که همه‌ی اینا تسته و جنبه‌ی دیگه‌ای
                    نداره.
                </p>
                <p className={classes.LeftAlign}>
                    فعلاً این هم تموم شد، یه چپ‌چین رو هم تست کنیم.
                </p>
            </div>
            <footer>
                <p>نوشته شده در {contents.txts.date}</p>
            </footer>
        </section>
    );
};

export default Card001;
