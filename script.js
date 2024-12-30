document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });
});


function toggleFavorite(button) {
    if (button.textContent.trim() === "♡ Favorite") {
        button.textContent = "♥";
        button.style.backgroundColor = "#4CAF50"; // Change to a green shade when favorited
    } else {
        button.textContent = "♡";
        button.style.backgroundColor = "#e25985"; // Revert to the original color
    }
}

const cardSlider = document.querySelector('.card-slider');
let scrollAmount = 0;

function slideLeft() {
    const cardWidth = document.querySelector('.recipe-card').offsetWidth + 16; // Include margin
    scrollAmount -= cardWidth;
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    cardSlider.style.transform = `translateX(-${scrollAmount}px)`;
}

function slideRight() {
    const cardWidth = document.querySelector('.recipe-card').offsetWidth + 16; // Include margin
    const maxScroll = (cardSlider.scrollWidth - cardSlider.offsetWidth);
    scrollAmount += cardWidth;
    if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
    }
    cardSlider.style.transform = `translateX(-${scrollAmount}px)`;
}