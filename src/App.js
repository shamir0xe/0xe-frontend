import React from 'react'
import Topbar from 'src/components/pages/topbar'
import Landing from './components/pages/landing'
import BlogPosts from './components/pages/blogPosts'


const App = () => {
    return (
        <div>
            <Topbar />
            <Landing />
            <BlogPosts />
        </div>
    )
}

export default App
