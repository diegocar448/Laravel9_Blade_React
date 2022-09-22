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
import PostEdit from './src/pages/Posts/PostEdit';


    ReactDOM.createRoot(
            document.getElementById('posts') ||
            document.getElementById('app')
        ).render(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home key="home" />} />
                <Route path="/posts" element={<Post key="posts"/>} />
                <Route path="/posts/create/" element={<PostCreate />} />
                <Route path="/posts/edit/:id" element={<PostEdit />} />
            </Routes>
        </BrowserRouter>
    );
//}





