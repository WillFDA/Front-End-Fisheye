
function photographerTemplate(data) {
  const { name, portrait, city, country, tagline } = data.photographers
  const { id, photographerId, title, image, video, likes } = data.media

  

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

  function createGallery() {
    const pictureMedia = `assets/photographers/`
    const figureElement = createElementWithClass('figure', '', '')
    
  }

  return {createGallery, createPhotographeHeader}
}