//Mettre le code JavaScript lié à la page photographer.html

const photographHeader = document.querySelector('.photograph-header')
const main = document.getElementById('main')
const gallery = document.getElementById('gallery')
const lightBoxImageContainer = document.querySelector('.lightbox-image-container');

const params = new URLSearchParams(location.href.split('?')[1])
const photographerId = +params.get('id'); // le + pour recuperer un number et non string

async function getPhotographers() {
  const response = await fetch('../../data/photographers.json')
  const photographers = await response.json()
  return photographers
}

async function getThePhotographer() {
  let { photographers, media } = await getPhotographers()
  photographers = photographers.find(photographer => photographer.id === photographerId)
  media = media.filter(media => media.photographerId === photographerId);
  return {photographers, media}
}

getThePhotographer().then(data => {
  const photographModel = photographerTemplate(data).createPhotographeHeader()
  photographerTemplate(data).addNameInContactForm()
  photographHeader.prepend(photographModel.infoPhotograph)
  photographHeader.append(photographModel.imagePhotograph)
  createTheGallery(data, 'likes')
  initDropdown(data)
  initQuickInfo(data)
  
})

async function createTheGallery(data, sortBy = 'likes') {
  let sortMedia

  switch (sortBy) {
    case 'likes':
      sortMedia = data.media.sort((a, b) => b.likes - a.likes)
      break;
    case 'date':
      sortMedia = data.media.sort((a, b) => new Date(b.date) - new Date(a.date))
      break;
    case 'title':
      sortMedia = data.media.sort((a, b) => a.title.localeCompare(b.title))
      break;
  }

  gallery.innerHTML = ''
  lightBoxImageContainer.querySelectorAll('.lightboxImg').forEach(image => image.remove())


  sortMedia.forEach((content, index) => {
    const photographModel = photographerTemplate(data);
    const createGallery = photographModel.createGallery(content);
    const createLightboxContent = photographModel.createLightboxContent(content);
    lightBoxImageContainer.append(createLightboxContent.mediaImageLightbox);
    gallery.append(createGallery.figureElement);
  });

  initLikes(document.querySelectorAll('.toggle-like'))
  
  document.querySelectorAll('.image-swiper').forEach((element, index) =>
    element.addEventListener('click', () => {
      let imageArray = document.querySelectorAll('.lightboxImg')
      initializeLightbox(imageArray, index)
    })
  );
}

