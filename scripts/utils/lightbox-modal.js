const lightBoxModal = document.getElementById("lightbox-modal");
const lightBoxImage = document.createElement('img');
const title = document.querySelector('.lightbox-image-title')
let currentIndex = 0;
let images = []
function initializeLightbox(imageArray, index) {
  currentIndex = index
  images = imageArray
  images.forEach(image => image.classList.remove('showlightBox'))
  images[currentIndex].classList.add('showlightBox')
  title.textContent = imageArray[currentIndex].dataset.title
  lightBoxModal.showModal()
}


function swipeRight() {
  // Retire la classe 'showlightBox' à toutes les images
  images.forEach(image => image.classList.remove('showlightBox'));

  // Incrémente l'index de l'image courante
  currentIndex = (currentIndex + 1) % images.length;

  // Ajoute la classe 'showlightBox' à l'image courante
  images[currentIndex].classList.add('showlightBox');

  title.textContent = images[currentIndex].dataset.title
}

function swipeLeft() {
    // Retire la classe 'showlightBox' à toutes les images
    images.forEach(image => image.classList.remove('showlightBox'));

    // Incrémente l'index de l'image courante
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  
    // Ajoute la classe 'showlightBox' à l'image courante
    images[currentIndex].classList.add('showlightBox');

    title.textContent = images[currentIndex].dataset.title
}

function closeLightbox() {
  lightBoxModal.setAttribute("closing", "");
  lightBoxModal.addEventListener(
    "animationend",
    () => {
      lightBoxModal.removeAttribute("closing");
      lightBoxModal.close();
    },
    { once: true }
  );
  images = []
}