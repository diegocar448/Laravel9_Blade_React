import axios from "axios";


const url = axios.create({
    baseURL: "http://laravel9bladereactjs.test/",
});

export default url;
