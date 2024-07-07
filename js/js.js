document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImg');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const imgSrc = thumbnail.src.replace('-thumb', ''); // get full-sized image URL
            mainImage.src = imgSrc; // set main image src to clicked thumbnail's src
        });
    });
});
