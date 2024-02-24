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

getThePhotographer().then( element => {
  const photographModel = photographerTemplate(element)
  photographHeader.prepend(photographModel.infoPhotograph)
  photographHeader.append(photographModel.imagePhotograph)
})



/* 
async function displayData(photographers, media) {
  const photographModel = photographerTemplate(photographers, media)
  photographHeader.prepend(photographModel.infoPhotograph)
  photographHeader.append(photographModel.imagePhotograph)
}

async function init() {
  let { photographers, media } = await getPhotographers()
  photographers = photographers.find(photographer => photographer.id === photographerId)
  media = media.filter(media => media.photographerId === photographerId);
  displayData(photographers, media)
}

init()
*/



/*
getPhotographers().then(photograph => {
  

})

*/


/*

 async function photographer() {
  const {photographers} = await getPhotographers()
  return photographers.find(photographer => photographer.id === photographerId)
}

async function getMediaPhotographer() {
  const {media} = await getPhotographers()
  return media.filter(media => media.photographerId === photographerId);
}


photographer().then(photographer => {
  const photographModel = createPhotographeHeader(photographer)
  photographHeader.prepend(photographModel.infoPhotograph)
  photographHeader.append(photographModel.imagePhotograph)
})

getMediaPhotographer().then(media => {
  media.forEach(element => {
    return createGallery(element)
  });
})

*/