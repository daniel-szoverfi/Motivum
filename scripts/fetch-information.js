import { fetchInformation } from './fetching.js';

fetchInformation(function(data) {
    document.getElementById('title').innerText = data.content.home.title;
    document.getElementById('subtitle').innerText = data.content.home.subtitle;
});


