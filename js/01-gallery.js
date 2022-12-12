import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

const items = [];


const markup = galleryItems.reduce((acc, {preview, original, description}) => 
    acc + `<div class="gallery__item">
  <a class="gallery__link" href= "${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`, ''
)
gallery.insertAdjacentHTML('beforeend', markup)
	
gallery.append(...items)

gallery.addEventListener('click', elem => {
  elem.preventDefault();
  if (elem.target.getAttribute('data-source') == undefined) {
    return;
  }
  
    const selectedImage = elem.target.getAttribute('data-source');
    // console.log(selectedImage);

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)
    instance.show()


    gallery.addEventListener('keydown', function(e) {
       if (e.key === 'Escape') {

            instance.close()
} 
	})
})


