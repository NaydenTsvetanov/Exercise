import { html } from "../lib.js";
import { getAllAlbums  } from "../api/data.js";

const cardTemp = (album) => html`
<div class="card-box">
        <img src=${album.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: ${album.price}</p>
                <p class="date">Release Date: ${album.releseDate}</p>
            </div>
            <div class="btn-group">
                <a href="/details/${album._id}" id="details">Details</a>
            </div>
        </div>
    </div>`;

const catalogTemp = (albums) => html`
<section id="catalogPage">
    <h1>All Albums</h1>

    ${albums.length == 0 ? html`
    <p>No Albums in Catalog!</p>` :
    albums.map(cardTemp)}

</section>`;

export async function showCatalog(ctx) {

    const albums = await getAllAlbums();

    ctx.render(catalogTemp(albums));

}
