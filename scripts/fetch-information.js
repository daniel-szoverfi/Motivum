import { fetchInformation } from './fetching.js';
import { observeImages } from "./animations.js";


fetchInformation(function(data) {
    document.getElementById('home-title').innerText = data.content.home.home_title;
    document.getElementById('home-subtitle').innerText = data.content.home.home_subtitle;

    document.getElementById('about-description').innerText = data.content.about.about_description;
    document.getElementById('about-title').innerText = data.content.about.about_title;
});

fetchInformation(function(data) {
    const imageContainer = document.getElementById('gallery-images-container');
    const selectorContainer = document.getElementById('gallery-selector-container');
    const images = data.content.gallery.images;
    const categories = data.content.gallery.gallery_categories;

    document.getElementById('gallery-title').innerText = data.content.gallery.gallery_title;

    images.slice(0, 10).forEach(image => {
        const img = document.createElement('img');
        img.src = image.path;
        img.classList.add('appearing');
        imageContainer.appendChild(img);
    });

    observeImages();

    categories.forEach(category => {
        const gallery_selector = document.createElement('span');
        gallery_selector.innerText = category.name;
        gallery_selector.id = 'gallery-selector';
        gallery_selector.addEventListener('click', function() {
            const filteredImages = images.filter(image => image.type.toLowerCase() === category.name.toLowerCase());
            imageContainer.innerHTML = '';
            filteredImages.slice(0, 10).forEach(image => {
                const img = document.createElement('img');
                img.src = image.path;
                img.classList.add('appearing');
                console.log(img);
                imageContainer.appendChild(img);
            });
            observeImages();
        });
        selectorContainer.appendChild(gallery_selector);
    });

});

fetchInformation(function(data) {
    document.getElementById('museum-title').innerText = data.content.museum.museum_title;
    document.getElementById('museum-description').innerText = data.content.museum.museum_description;
});

fetchInformation(function(data) {
    document.getElementById('footer-phone').innerText = data.content.footer.phone;
    document.getElementById('footer-email').innerText = data.content.footer.email;
    // Give the footer link a href attribute
    document.getElementById('footer-facebook').innerText = 'link';
    document.getElementById('footer-facebook').href = data.content.footer.facebook;

});

