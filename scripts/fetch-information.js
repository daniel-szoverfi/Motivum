import { fetchInformation } from './fetching.js';
import { observeImages } from "./animations.js";

fetchInformation(function(data) {
    
    // Fetch the header & footer information
    const header_menu = data.menu;
    console.log(header_menu);
    header_menu.forEach(menu_item => {
        document.getElementById(menu_item.header_id).innerText = menu_item.name;
        document.getElementById(menu_item.header_id).href = menu_item.href;
        document.getElementById(menu_item.footer_id).innerText = menu_item.name;
        document.getElementById(menu_item.footer_id).href = menu_item.href;
    });

    // Fetch the home section information
    document.getElementById('home-title').innerText = data.content.home.home_title;
    document.getElementById('home-subtitle').innerText = data.content.home.home_subtitle;

    // Fetch the about section information
    document.getElementById('about-description').innerText = data.content.about.about_description;
    document.getElementById('about-title').innerText = data.content.about.about_title;

    // Fetch the gallery section information
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

    // Fetch the museum section information
    document.getElementById('museum-title').innerText = data.content.museum.museum_title;
    document.getElementById('museum-description').innerText = data.content.museum.museum_description;

    // Fetch the footer section information
    document.getElementById('footer-phone').innerText = data.content.footer.phone;
    document.getElementById('footer-email').innerText = data.content.footer.email;
    // document.getElementById('footer-facebook').innerText = 'link';
    // document.getElementById('footer-facebook').href = data.content.footer.facebook;
});

