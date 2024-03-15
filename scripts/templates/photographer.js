
function photographerTemplate(data) {
  const { name, portrait, city, country, tagline } = data.photographers

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
    const { id, photographerId, title,  image, video, like} = medias

    
    const pictureMedia = `assets/photographers/${name}/${image ? image : video}`
    const figureElement = createElementWithClass('figure', 'img-container', '')
    const mediaImage = createImage(pictureMedia, title, video ? 'video' : 'image')
    const figcaption = createElementWithClass('figcaption', 'image-caption', '')
    const p = createElementWithClass('p', '', title)
    const likeContainer = createElementWithClass('div', 'like-container', '')
    const likeCount = createElementWithClass('p','like-count', like)
    const likeIcon = createElementWithClass('i', 'like-icon')
    figcaption.append(p)
    figureElement.append(mediaImage, figcaption)
    return { figureElement }
  }

  return {createGallery, createPhotographeHeader}
}