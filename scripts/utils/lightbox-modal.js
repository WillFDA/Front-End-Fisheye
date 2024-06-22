const lightBoxModal = document.getElementById("lightbox-modal");
const lightBoxImage = document.createElement('img');
const title = document.querySelector('.lightbox-image-title')
const previousButton = document.querySelector('.prevBtn')
const nextButton = document.querySelector('.nextBtn')
const closeButton = document.querySelector('.closeBtn')
let currentIndex = 0;
let images = []



function initializeLightbox(imageArray, index) {
  console.log(title)
  currentIndex = index
  images = imageArray
  images.forEach(image => image.classList.remove('showlightBox'))
  images[currentIndex].classList.add('showlightBox')
  title.textContent = imageArray[currentIndex].dataset.title
  lightBoxModal.showModal()
  document.addEventListener('keydown', (e) => handleKeydown(e))
}

function handleKeydown(e) {
  if (e.key === 'Escape') {
    closeLightbox()
  } else if (e.key === 'ArrowRight') {
    swipeRight()
  } else if (e.key === 'ArrowLeft') {
    swipeLeft()
  }
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

previousButton.addEventListener('click', swipeLeft)
nextButton.addEventListener('click', swipeRight)  
closeButton.addEventListener('click', closeLightbox)