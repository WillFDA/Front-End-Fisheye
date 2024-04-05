const lightBoxModal = document.getElementById("lightbox-modal");
const lightBoxImage = document.createElement('img');
let currentIndex = 0;

function LightBoxModalFunction(content, index, name) {

}

function openLightboxModal() {
  lightBoxModal.showModal();
}

function swipeRight() {

}

function swipeLeft() {

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
}