import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

galleryRef.innerHTML = createGalleryMarkup(galleryItems);

window.addEventListener("click", windowClickHandler);



function createGalleryMarkup (galleryElements) {
  return galleryElements.map(({ original, preview, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  }).join("");
}
function windowClickHandler(event) {
  if (!event.target.classList.contains('gallery__image')) return;
  event.preventDefault();
  const clickImg = {
    src: event.target.dataset.source,
    alt: event.target.alt
  }
  const instance = basicLightbox.create(
    `<img src="${clickImg.src}" alt="${clickImg.alt}" />`, {
      closable: true,
      className: 'my-class',
      onShow: (instance) => {
        // console.log("modal open");
        window.addEventListener("keydown", pressEscHandler);
      },
      onClose: (instance) => {
        // console.log("modal close");
        window.removeEventListener("keydown", pressEscHandler);
      }
    },
  )
  instance.show();
  function pressEscHandler(event) {
  if (event.code === "Escape") {
    // console.log("press esc");
    instance.close();
    }
  } 
}