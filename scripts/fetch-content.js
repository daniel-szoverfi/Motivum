import { fetchComponent } from "./fetching.js";
import { observeImages } from "./animations.js";



fetchComponent('components/header.html', function(data) {
    document.getElementById('header-container').innerHTML = data;
});

fetchComponent('sections/home.html', function(data) {
    document.getElementById('home-container').innerHTML = data;
});

fetchComponent('sections/about.html', function(data) {
    document.getElementById('about-container').innerHTML = data;
});

fetchComponent('sections/gallery.html', function(data) {
    document.getElementById('gallery-container').innerHTML = data;
});

fetchComponent('sections/museum.html', function(data) {
    document.getElementById('museum-container').innerHTML = data;
});

