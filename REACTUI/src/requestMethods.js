import axios from "axios"

const BASE_URL = "http://localhost:5000/api/";

//const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzkwMzgxNTIxZWJmNzY3MmJiZDEwZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjA5Nzk5MSwiZXhwIjoxNjUyMzU3MTkxfQ.WPEDgtvofe1rsra9AQtW2KdRXBS-hV6RW9Sn6RrkD5o";

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers : {token:`Bearer ${TOKEN}`},
});