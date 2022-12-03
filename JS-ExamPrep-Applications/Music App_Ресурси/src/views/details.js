import { getById } from "../api/data.js";
import { html, nothing } from "../lib.js";
import { deleteById } from "../api/data.js"

const detailsTemp = (album, hasUser, isOwner, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${album.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: ${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>Description: ${album.description}</p>
            </div>

            <!-- Only for registered user and creator of the album-->
            ${isOwner && hasUser ? html`
            <div class="actionBtn">
            <a href="/edit/${album._id}" class="edit">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
        </div>` : nothing}
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {

    const id = ctx.params.id;
    const album = await getById(id);

    const hasUser = Boolean(ctx.user);
    const isOwner = hasUser && ctx.user._id == album._ownerId;

    ctx.render(detailsTemp(album, hasUser, isOwner, onDelete));

    async function onDelete() {

        const choise = confirm("Are you sure you want to delete this album?");

        if(choise) {
            await deleteById(id);
            ctx.page.redirect("/");
        }

    }

}
