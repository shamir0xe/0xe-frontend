import React from 'react'
import classes from './index.module.css'
import contents from './contents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function Landing(props) {
    return (
        <header>
            <div className={classes.Container}>
                <img
                    src={contents.imgs.logo.src}
                    className={classes.XelluLogo}
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
                    <div className={classes.SearchWrapper}>
                        <input />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Landing
