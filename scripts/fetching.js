function fetchInformation(callbackFunction) {
    setTimeout(() => {
        fetch('information.json')
            .then(response => response.json())
            .then(data => callbackFunction(data))
            .catch(error => console.error('Error loading information:', error));
    }, 10);
}

function fetchComponent(source, callbackFunction) {
    fetch(source)
        .then(response => response.text())
        .then(data => callbackFunction(data))
        .catch(error => console.error('Error loading header:', error));
}

export { fetchInformation, fetchComponent };
