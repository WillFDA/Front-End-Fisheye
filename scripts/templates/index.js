function createElementWithClass(type, className, textContent) {
    const element = document.createElement(type);
    if (className) element.classList.add(className);
    if (textContent) element.textContent = textContent;
    return element;
}

function createImage(src, alt, type) {
    if(type === 'video') {
        const video = document.createElement('video')
        video.setAttribute('src', `${src}${'#t=0.1'}`)
        video.setAttribute('alt', alt)
        video.setAttribute('preload', 'metadata')
        return video
    }
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    return img;
}

function photographerTemplate({ name, portrait, city, country, tagline, price, id }) {
    const picture = `assets/photographers/${portrait}`;
    const altText = `${name}'s portrait`;

    function getUserCardDOM() {
        // Create elements
        const article = createElementWithClass('article');
        const img = createImage(picture, altText);
        const a = createElementWithClass('a');
        a.setAttribute("href", `/photographer.html?id=${id}`); // Set the actual navigation link here
        const h2 = createElementWithClass('h2', '', name);
        const location = createElementWithClass('p', 'country', `${city}, ${country}`);
        const taglineEl = createElementWithClass('p', 'tagline', tagline);
        const priceEl = createElementWithClass('p', 'price', `${price}€`);

        a.append(img, h2); 
        article.append(a, location, taglineEl, priceEl);

        return article;
    }

    return { name, picture, getUserCardDOM };
}
