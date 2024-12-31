import { fetchInformation } from './fetching.js';
import { observeImages } from "./animations.js";

function fetchInformationFromJson(source) {
    fetchInformation(source, function(data) { 
        // Fetch the header & footer information
        const header_menu = data.menu;
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
    
        document.getElementById('gallery-title').innerText = data.content.gallery.gallery_title;
        const gallery_categories = data.content.gallery.gallery_categories;
        const gallery_selector_container = document.getElementById('gallery-selector-container');
        gallery_categories.forEach(category => {
            document.getElementById(category.id).innerText = category.name;
        });
    
        // Fetch the museum section information
        document.getElementById('museum-title').innerText = data.content.museum.museum_title;
        document.getElementById('museum-description').innerText = data.content.museum.museum_description;
    
        // Fetch the footer section information
        document.getElementById('footer-phone').innerText = data.content.footer.phone;
        document.getElementById('footer-email').innerText = data.content.footer.email;
        document.getElementById('footer-address').innerText = data.content.footer.address;
        document.getElementById('footer-facebook').href = data.content.footer.facebook;
    });

    setTimeout(function() {
        const buttons = [
            { id: 'hungarian-img', file: 'json/hunagrian-information.json' },
            { id: 'romanian-img', file: 'json/romanian-information.json' },
            { id: 'english-img', file: 'json/english-information.json' }
        ];
        
        buttons.forEach(button => {
            const element = document.getElementById(button.id);
            console.log(element);
            if (element) {
                element.addEventListener('click', () => {
                    console.log('clicked');
                    fetchInformationFromJson(button.file);
                });
            }
        });
    }, 100);
}

fetchInformation('json/gallery.json', function(data) {
    const imageContainer = document.getElementById('gallery-images-container');

    data.gallery_images[0].images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src;
        img.classList.add('appearing');
        imageContainer.appendChild(img);
    });

    observeImages();

    data.gallery_images.forEach(category => {
        const gallery_selector = document.getElementById(category.id);
        gallery_selector.addEventListener('click', function() {
            imageContainer.innerHTML = '';
            category.images.forEach(image => {
                const img = document.createElement('img');
                img.src = image.src;
                img.classList.add('appearing');
                imageContainer.appendChild(img);
            });
            observeImages();
        });
    });
});

fetchInformationFromJson('json/hunagrian-information.json');


