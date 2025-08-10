let currentIndex = 0;
let filteredImages = [];
const allimages = document.querySelectorAll('.gallery img');

function openLightbox(index) {
    currentIndex = index;
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox-img').src = filteredImages[currentIndex].src;
}
 
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeSlide(step) {
    currentIndex = (currentIndex + step + filteredImages.length) % filteredImages.length;
    document.getElementById('lightbox-img').src = filteredImages[currentIndex].src;    
}

function filterImages(category) {
    filteredImages = [];
    allimages.forEach((img) => { 
        if (category === 'all' || img.classList.contains(category)) {
            img.style.display = 'block';
            filteredImages.push(img);
            img.onclick = () => openLightbox(filteredImages.indexof(img));
        } else {
            img.style.display = "none";
        }
    });
}
filterImages('all');