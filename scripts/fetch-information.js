import { fetchInformation } from './fetching.js';

fetchInformation(function(data) {
    document.getElementById('home-title').innerText = data.content.home.home_title;
    document.getElementById('home-subtitle').innerText = data.content.home.home_subtitle;

    document.getElementById('about-description').innerText = data.content.about.about_description;
    document.getElementById('about-title').innerText = data.content.about.about_title;
});

