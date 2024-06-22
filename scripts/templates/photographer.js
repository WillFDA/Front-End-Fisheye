function photographerTemplate(data) {
  // Déstructure les propriétés pertinentes de l'objet photographe
  const { name, portrait, city, country, tagline } = data.photographers

  // Fonction pour créer l'en-tête du photographe
  function createPhotographeHeader() {
    const picture = `assets/photographers/${portrait}`;
    const altText = `${name}'s portrait`;
    const infoPhotograph = createElementWithClass('div', 'info-left')
    const h1 = createElementWithClass('h1', '', name);
    const location = createElementWithClass('p', 'country', `${city}, ${country}`);
    const taglineEl = createElementWithClass('p', 'tagline', tagline);
    infoPhotograph.append(h1, location, taglineEl)
    const imagePhotograph = createImage(picture, altText)
    return {infoPhotograph, imagePhotograph}
  }

  // Fonction pour créer un élément de galerie pour chaque média
  function createGallery(medias) {
    const { title, image, video, likes } = medias;
    const pictureMedia = `assets/photographers/${name}/${image ? image : video}`;
    const figureElement = createElementWithClass('figure', 'img-container', '');
    const mediaImage = createImage(pictureMedia, title, video ? 'video' : 'image');
    const figcaption = createElementWithClass('figcaption', 'image-caption', '');
    const p = createElementWithClass('p', '', title);
    const likeContainer = createElementWithClass('div', 'like-container', '');
    const likeCount = createElementWithClass('p', 'like-count', likes);
    const link = createElementWithClass('a', 'image-swiper');
    link.setAttribute('href', '#');
    figureElement.append(link, figcaption);
    figcaption.append(p, likeContainer);
    likeContainer.append(likeCount);
    likeContainer.innerHTML += `<a class="toggle-like" href="#" aria-label="Like">
    <svg aria-hidden="true" class="heart-outlined" width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
      <path class="heart-path" d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z"/>
    </svg>
    </a>`;
    link.appendChild(mediaImage)
    return { figureElement };
  }

  // Fonction pour ajouter le nom du photographe dans la boîte de dialogue de contact
  function addNameInContactForm() {
    document.getElementById('dialogHeading').innerHTML = 'Contactez moi </br>' + name
  }

  // Fonction pour créer le contenu de la lightbox pour un média
  function createLightboxContent(medias) {
    const { title, image, video } = medias;
    const pictureMedia = `assets/photographers/${name}/${image ? image : video}`;
    const mediaImageLightbox = createImage(pictureMedia, title, video ? 'video' : 'image');
    if (video) {
      mediaImageLightbox.controls = true
    }
    mediaImageLightbox.classList.add('lightboxImg')
    mediaImageLightbox.dataset.title = title
    return {mediaImageLightbox}
  }

  // Retourne un objet contenant les fonctions pour créer différents éléments liés au photographe
  return {createGallery, createPhotographeHeader, addNameInContactForm, createLightboxContent}
}