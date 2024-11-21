"use strict";

const albumList = document.querySelector(".album-list");
const albumForm = document.querySelector(".input-form");
const albumName = document.querySelector(".album-name");
const albumRating = document.querySelector(".album-rating");

const albums = [];

const displayAlbums = () => {
  albumList.innerHTML = "";
  albums.forEach((album, index) => {
    const albumCard = document.createElement("div");
    albumCard.classList.add("album-card");
    if (album.favorite) {
      albumCard.classList.add("favorite");
    }

    albumCard.innerHTML = `<h3>${album.name}</h3>
          <p class="timestamp">Vrijeme dodavanja: ${album.timestamp}</p>
          <p>Ocjena: ${album.rating}</p>
          <div class="controls">
            <button class="favorite-btn">Favoriziraj</button>
            <button class="remove-btn">Obriši</button>
          </div>`;

    albumCard.querySelector(".favorite-btn").addEventListener("click", () => {
      albums[index].favorite = !albums[index].favorite;
      displayAlbums();
    });

    albumCard.querySelector(".remove-btn").addEventListener("click", () => {
      albums.splice(index, 1);
      displayAlbums();
    });

    albumList.appendChild(albumCard);
  });
};

albumForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const currentDate = new Date().toLocaleString();
  const album = {
    name: albumName.value,
    rating: parseInt(albumRating.value),
    favorite: false,
    timestamp: currentDate,
  };

  albums.push(album);

  displayAlbums();

  albumForm.reset();
});
