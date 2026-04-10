// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Form Submission Logic
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real scenario, you would use an API or Email service here
    alert('Thank you, Vivek! Your message has been sent successfully.');
    contactForm.reset();
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#0d1f33';
    } else {
        nav.style.background = '#1a3a5f';
    }
});

// --- Gallery Update Logic ---
const imageInput = document.getElementById('image-input');
const galleryContainer = document.getElementById('gallery-container');

imageInput.addEventListener('change', function() {
    const files = this.files;

    if (files) {
        // Loop through all selected files
        Array.from(files).forEach(file => {
            const reader = new FileReader();

            reader.onload = function(e) {
                // Create new gallery item
                const div = document.createElement('div');
                div.className = 'gallery-item';
                
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = "New Upload";

                div.appendChild(img);
                // Add to the beginning of the gallery
                galleryContainer.prepend(div);
            }

            reader.readAsDataURL(file);
        });
    }
});

// --- Review System Logic (keep from previous code) ---
const reviewForm = document.getElementById('review-form');
const reviewDisplay = document.getElementById('review-display');

reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('reviewer-name').value;
    const rating = document.getElementById('reviewer-rating').value;
    const text = document.getElementById('reviewer-text').value;

    let starString = '★'.repeat(rating) + '☆'.repeat(5 - rating);

    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
        <p>"${text}"</p>
        <div class="stars">${starString}</div>
        <span>- ${name}</span>
    `;

    reviewDisplay.prepend(card);
    reviewForm.reset();
});