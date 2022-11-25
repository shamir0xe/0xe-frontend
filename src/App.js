import React, { useState, useEffect } from 'react'
import classes from "./index.module.css"
import Topbar from 'src/components/pages/topbar'
import Blog from 'src/components/pages/blog'
import Me from 'src/components/pages/me'
import Projects from 'src/components/pages/projects'
import Shoots from 'src/components/pages/shoots'
import Programming from 'src/components/pages/programming'
import Footer from 'src/components/pages/footer'


const App = () => {
    const [page, setPage] = useState(2)

    return (
        <div className={classes.Container}>
            <Topbar page={page} setPage={setPage}/>
            <Blog active={page == 0} page={page}/>
            <Me active={page == 2} page={page} />
            <Projects active={page == 1} page={page}/>
            <Shoots active={page == 3} page={page}/>
            <Programming active={page == 4} page={page}/>
            <Footer />
        </div>
    )
}

export default App
