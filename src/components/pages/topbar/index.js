import React from 'react'
import classes from './index.module.css'
import contents from './contents'


const Topbar = (props) => {
    return (
        <header className={classes.Header}>
            <div className={classes.Container}>
                <img
                    src={contents.imgs.logo.src}
                    className={classes.Image}
                    alt={contents.imgs.logo.alt}
                />
                <nav className={classes.Navigator}>
                    {[...Array(contents.txts.items.length).keys()].map(
                        (value, index) => {
                            return (
                                <button
                                    key={`btn-${index}`}
                                    className={classes.Items}
                                >
                                    {contents.txts.items[value]}
                                </button>
                            )
                        }
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Topbar
