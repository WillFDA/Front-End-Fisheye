// Sélectionne les éléments du DOM
const photographHeader = document.querySelector('.photograph-header'); 
const main = document.getElementById('main'); 
const gallery = document.getElementById('gallery'); 
const lightBoxImageContainer = document.querySelector('.lightbox-image-container'); 

// Récupère l'ID du photographe depuis l'URL
const params = new URLSearchParams(location.href.split('?')[1]); // Crée un objet URLSearchParams à partir des paramètres de l'URL
const photographerId = +params.get('id'); // Récupère la valeur du paramètre 'id' et la convertit en nombre

// Fonction asynchrone pour récupérer les données des photographes depuis un fichier JSON
async function getPhotographers() {
  const response = await fetch('../../data/photographers.json'); // Fait une requête pour récupérer le fichier JSON
  const photographers = await response.json(); // Transforme la réponse en objet JavaScript
  return photographers; // Retourne les données des photographes
}

// Fonction asynchrone pour récupérer les données du photographe spécifique et de ses médias
async function getThePhotographer() {
  let { photographers, media } = await getPhotographers(); // Récupère les données des photographes et des médias
  photographers = photographers.find(photographer => photographer.id === photographerId); // Trouve le photographe correspondant à l'ID
  media = media.filter(media => media.photographerId === photographerId); // Filtre les médias pour récupérer ceux du photographe
  return { photographers, media }; // Retourne les données du photographe et de ses médias
}

// Appel de la fonction getThePhotographer() et initialisation des composants
getThePhotographer().then(data => {
  const photographModel = photographerTemplate(data).createPhotographeHeader(); // Crée le modèle du photographe
  photographerTemplate(data).addNameInContactForm(); // Ajoute le nom du photographe dans le formulaire de contact
  photographHeader.prepend(photographModel.infoPhotograph); // Ajoute les informations du photographe à l'en-tête
  photographHeader.append(photographModel.imagePhotograph); // Ajoute l'image du photographe à l'en-tête
  createTheGallery(data, 'likes'); // Crée la galerie, triée par likes
  initDropdown(data); // Initialise le menu déroulant de tri
  initQuickInfo(data); // Initialise les informations rapides (prix journalier, total de likes)
});

// Fonction pour créer la galerie avec un tri spécifique
async function createTheGallery(data, sortBy = 'likes') {
  let sortMedia; // Tableau qui contiendra les médias triés

  // Trie les médias selon le critère spécifié
  switch (sortBy) {
    case 'likes':
      sortMedia = data.media.sort((a, b) => b.likes - a.likes); // Trie par nombre de likes décroissant
      break;
    case 'date':
      sortMedia = data.media.sort((a, b) => new Date(b.date) - new Date(a.date)); // Trie par date décroissante
      break;
    case 'title':
      sortMedia = data.media.sort((a, b) => a.title.localeCompare(b.title)); // Trie par titre alphabétique
      break;
  }

  gallery.innerHTML = ''; // Réinitialise la galerie
  lightBoxImageContainer.querySelectorAll('.lightboxImg').forEach(image => image.remove()); // Supprime les images de la lightbox

  sortMedia.forEach((content, index) => {
    const photographModel = photographerTemplate(data); // Crée le modèle du photographe
    const createGallery = photographModel.createGallery(content); // Crée les éléments HTML pour la galerie
    const createLightboxContent = photographModel.createLightboxContent(content); // Crée les éléments HTML pour la lightbox
    lightBoxImageContainer.append(createLightboxContent.mediaImageLightbox); // Ajoute l'image à la lightbox
    gallery.append(createGallery.figureElement); // Ajoute l'élément à la galerie
  });

  initLikes(document.querySelectorAll('.toggle-like')); // Initialise les boutons de likes

  // Ajoute un écouteur d'événement pour ouvrir la lightbox lorsqu'une image est cliquée
  document.querySelectorAll('.image-swiper').forEach((element, index) => element.addEventListener('click', () => {
    let imageArray = document.querySelectorAll('.lightboxImg'); // Récupère toutes les images de la lightbox
    initializeLightbox(imageArray, index); // Ouvre la lightbox avec l'image cliquée
  }));
}