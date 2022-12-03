import { setUserData, clearUserData } from "../util.js";
import { get, post } from "./api.js";

const endpoints = {
    "login" : "/users/login" /*can be chancged if needed */,
    "register": "/users/register" /*can be chancged if needed */,
    "logout" : "/users/logout" /*can be chancged if needed */
};

export async function login(email, password) {

    const { _id, email: resultEmail, accessToken} = await post(endpoints.login, { email, password });

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });

}

export async function register(email, password) {

    const { _id, email: resultEmail, accessToken} = await post(endpoints.register, { email, password });

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });

}

export async function logout() {

    get(endpoints.logout);
    clearUserData();

}