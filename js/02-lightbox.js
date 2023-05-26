import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listEl = document.querySelector(".gallery");

function initGallery(items) {
  const galleryElements = items.map((item) => {
    const elementLi = document.createElement("li");
    elementLi.classList.add("gallery__item");

    const elementA = document.createElement("a");
    elementLi.append(elementA);
    elementA.classList.add("gallery__link");
    elementA.href = item.original;

    const elementImg = document.createElement("img");
    elementA.append(elementImg);
    elementImg.classList.add("gallery__image");
    elementImg.src = item.preview;
    elementImg.alt = item.description;
    return elementLi;
  });
  listEl.append(...galleryElements);
}
initGallery(galleryItems);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
