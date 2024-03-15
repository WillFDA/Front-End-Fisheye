//Mettre le code JavaScript lié à la page photographer.html

const photographHeader = document.querySelector('.photograph-header')
const main = document.getElementById('main')
const gallery = document.getElementById('gallery')

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
  photographHeader.prepend(photographModel.infoPhotograph)
  photographHeader.append(photographModel.imagePhotograph)
  createTheGallery(data)
})

async function createTheGallery(data) {
  data.media.forEach(content => {
    const photographModel = photographerTemplate(data)
    const createGallery = photographModel.createGallery(content)
    gallery.append(createGallery.figureElement)
    
  })
}