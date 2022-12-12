import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const items = [];

const markup = galleryItems.reduce((acc, {preview, original, description}) => 
    acc + `<div class="gallery__item">
  <a class="gallery__item" href= "${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`, ''
)

gallery.insertAdjacentHTML('beforeend', markup)

gallery.append(...items)



const ligthbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
	captionDelay: 250
})
