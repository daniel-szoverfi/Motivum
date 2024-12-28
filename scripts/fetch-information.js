import { fetchInformation } from './fetching.js';

fetchInformation(function(data) {
    document.getElementById('home-title').innerText = data.content.home.home_title;
    document.getElementById('home-subtitle').innerText = data.content.home.home_subtitle;

    document.getElementById('about-description').innerText = data.content.about.about_description;
    document.getElementById('about-title').innerText = data.content.about.about_title;
});

fetchInformation(function(data) {
    // Load images
    const imageContainer = document.getElementById('gallery-images-container');
    const selectorContainer = document.getElementById('gallery-selector-container');
    const images = data.content.gallery.images;
    const categories = data.content.gallery.gallery_categories;

    document.getElementById('gallery-title').innerText = data.content.gallery.gallery_title;

    images.slice(0, 10).forEach(image => {
        const img = document.createElement('img');
        img.src = image.path;
        imageContainer.appendChild(img);
    });

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
                imageContainer.appendChild(img);
            });
        });
        selectorContainer.appendChild(gallery_selector);
    });
});

