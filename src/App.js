import React from 'react'
import classes from "./index.module.css"
import Topbar from 'src/components/pages/topbar'
import Landing from 'src/components/pages/landing'
import BlogPosts from 'src/components/pages/blogPosts'


const App = () => {
    return (
        <div className={classes.Container}>
            <Topbar />
            {/* <Landing />
            <BlogPosts /> */}
        </div>
    )
}

export default App
