import React, { useState, useEffect } from 'react'
import classes from "./index.module.css"
import Topbar from 'src/components/pages/topbar'
import Landing from 'src/components/pages/landing'
import BlogPosts from 'src/components/pages/blogPosts'


const App = () => {
    const [page, setPage] = useState(2)

    return (
        <div className={classes.Container}>
            <Topbar page={page} setPage={setPage}/>
            {/* <Landing />
            <BlogPosts /> */}
        </div>
    )
}

export default App
