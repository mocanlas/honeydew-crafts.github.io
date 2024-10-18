// Select the toggler checkbox and the navigation links
const toggler = document.getElementById('toggler');
const navLinks = document.querySelectorAll('.navigation a'); // Select all navigation links
const hamburgerIcon = document.querySelector('.hamburger i'); // Select the icon

// Add an event listener to handle the change event on the toggler
toggler.addEventListener('change', function () {
    if (toggler.checked) {
        // Show navigation if toggler is checked
        hamburgerIcon.classList.remove('fa-bars'); // Remove hamburger icon
        hamburgerIcon.classList.add('fa-times'); // Add 'X' icon
        animateLinks(true); // Animate links in
    } else {
        // Hide navigation if toggler is unchecked
        hamburgerIcon.classList.remove('fa-times'); // Remove 'X' icon
        hamburgerIcon.classList.add('fa-bars'); // Add hamburger icon
        animateLinks(false); // Animate links out
    }
});

