
function photographerTemplate(data) {
  const { name, portrait, city, country, tagline } = data.photographers
  console.log
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

  function createGallery(medias) {
    const { id, photographerId, title, image, video, likes } = medias;
    const pictureMedia = `assets/photographers/${name}/${image ? image : video}`;
    const figureElement = createElementWithClass('figure', 'img-container', '');
    const mediaImage = createImage(pictureMedia, title, video ? 'video' : 'image');
    const figcaption = createElementWithClass('figcaption', 'image-caption', '');
    const p = createElementWithClass('p', '', title);
    const likeContainer = createElementWithClass('div', 'like-container', '');
    const likeCount = createElementWithClass('p', 'like-count', likes);
    const link = createElementWithClass('a', 'image-swiper');
    
    figureElement.append(link, figcaption);
    figcaption.append(p, likeContainer);
    likeContainer.append(likeCount);
    likeContainer.innerHTML += `
        <svg aria-label="likes" class="heart toggle-like" width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z"/>
        </svg>`;
    link.appendChild(mediaImage)
    return { figureElement };
  }

  function addNameInContactForm() {
    document.getElementById('dialogHeading').textContent = `Contactez moi ${name}`
  }

  function createLightboxContent(medias) {
    const { id, photographerId, title, image, video, likes } = medias;
    const pictureMedia = `assets/photographers/${name}/${image ? image : video}`;
    const mediaImageLightbox = createImage(pictureMedia, title, video ? 'video' : 'image');
    mediaImageLightbox.classList.add('lightboxImg')
    mediaImageLightbox.dataset.title = title
    return {mediaImageLightbox}
  }


  return {createGallery, createPhotographeHeader, addNameInContactForm, createLightboxContent}
}