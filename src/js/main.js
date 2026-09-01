document.addEventListener('DOMContentLoaded', () => {
    // Obsługa menu mobilnego
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close menu when clicking links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Obsługa modalu powiększającego zdjęcia w projektach
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const images = document.querySelectorAll(".project-img-card img");

    if (modal && modalImg && images.length > 0) {
        images.forEach(img => {
            img.style.cursor = "pointer";
            img.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = img.src;
            });
        });
    }
});

// Globalna funkcja zamykania okna modalnego
function closeModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
    }
}