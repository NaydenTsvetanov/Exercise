import { get, del, post, put } from "./api.js";

export async function getAlbums() {

    return get("/data/albums?sortBy=_createdOn%20desc");

}

export async function createAlbum(data) {

    return post("/data/albums", data);

}

export async function getById(id) {

    return get("/data/albums/" + id);

}

export async function deleteById(id) {

    return del("/data/albums/" + id);

}

export async function updateAlbum(id, data) {

    return put("/data/albums/" + id, data);

}
