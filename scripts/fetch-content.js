import { fetchComponent } from "./fetching.js";

fetchComponent('components/header.html', function(data) {
    document.getElementById('header-container').innerHTML = data;
});

fetchComponent('sections/home.html', function(data) {
    document.getElementById('home-container').innerHTML = data;
});

fetchComponent('sections/about.html', function(data) {
    document.getElementById('about-container').innerHTML = data;
});

