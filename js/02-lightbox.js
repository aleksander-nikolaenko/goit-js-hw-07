import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

galleryRef.innerHTML = createGalleryMarkup(galleryItems);

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});


function createGalleryMarkup (galleryElements) {
  return galleryElements.map(({ original, preview, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  }).join("");
}