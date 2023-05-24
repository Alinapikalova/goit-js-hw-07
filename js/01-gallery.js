import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listEl = document.querySelector(".gallery");

function initGallery(items) {
  const galleryElements = items.map((item) => {
    const elementLi = document.createElement("li");

    const elementA = document.createElement("a");
    elementLi.append(elementA);
    elementA.classList.add("gallery__link");
    elementA.href = item.original;

    const elementImg = document.createElement("img");
    elementA.append(elementImg);
    elementImg.classList.add("gallery__image");
    elementImg.src = item.preview;
    elementImg.alt = item.description;
    elementImg.dataset.source = item.original;
    return elementLi;
  });
  listEl.append(...galleryElements);
}
initGallery(galleryItems);
console.log(galleryItems);
function onGalleryItemClick(event) {
  console.log("target", event.target);
  console.log("target", event.curentTarget);
}

function bindEvents(galleryElements) {
  listEl.addEventListener("click", onGalleryItemClick);
}
