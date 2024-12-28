function observeImages() {
    const images = document.querySelectorAll('.appearing');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    images.forEach(img => {
        img.classList.add('animate-on-scroll');
        observer.observe(img);
    });
}

export { observeImages };