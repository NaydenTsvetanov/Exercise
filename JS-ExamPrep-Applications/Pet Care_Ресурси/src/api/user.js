import { post } from "./api.js";

export async function login(email, password) {

    const result = await post("/users/login", { email, password });

}