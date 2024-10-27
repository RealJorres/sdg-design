let slideIndex = 0;
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;

    function moveSlide(direction) {
        slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }