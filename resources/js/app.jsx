import './bootstrap';
import '../css/app.css'




//hooks
import { useState, useEffect } from "react";

//react
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



//pages
import Home from './src/pages/Home';
import Post from './src/pages/Post';
import PostCreate from './src/pages/Posts/PostCreate';


// if (document.getElementById('app')) {
//     console.log("app")
//     ReactDOM.createRoot(document.getElementById('app')).render(
//         <BrowserRouter>
//             <Home key="home"></Home>
//         </BrowserRouter>

//     );
// }else if(document.getElementById('posts')){
//     console.log("posts")
    ReactDOM.createRoot(
            document.getElementById('posts') ||
            document.getElementById('app')
        ).render(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home key="home" />} />
                <Route path="/posts" element={<Post key="posts"/>} />
                <Route path="/posts/create/" element={<PostCreate />} />
            </Routes>
        </BrowserRouter>
    );
//}





