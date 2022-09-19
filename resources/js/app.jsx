import './bootstrap';
import '../css/app.css'

import ReactDOM from 'react-dom/client';
//import Home from './Pages/Home';
import Home from './src/pages/Home';
import Post from './src/pages/Post';


if (document.getElementById('app')) {

    console.log("app")
    ReactDOM.createRoot(document.getElementById('app')).render(
        <Home key="home"></Home>
    );
}else if(document.getElementById('posts')){
    console.log("posts")
    ReactDOM.createRoot(document.getElementById('posts')).render(
        <Post key="posts"></Post>
    );
}





