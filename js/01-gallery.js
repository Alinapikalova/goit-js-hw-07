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
    elementImg.dataset.source = item.original;
    return elementLi;
  });
  listEl.append(...galleryElements);
}
initGallery(galleryItems);
listEl.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  let target = event.target;
  console.log("target", event.target);
  let clickedEtemEl = target.closest(".gallery__item");
  if (!clickedItemEl) {
    return;
  }
  let { original, description } = clickedEtemEl.dataset;
  console.log(clickedItemEl.dataset.original);
  console.log(clickedItemEl.dataset.description);
  console.log("clickedItemEl", clickedEtemEl);
}

function bindEvents(galleryElements) {
  listEl.addEventListener("click", onGalleryItemClick);
}
const instance = basicLightbox.create(
  `
    <img src="" width="800" height="600">
`
);
instance.show();
instance.close();
