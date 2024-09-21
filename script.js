document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a, .dropbtn');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove 'active' class from all links (this will remove bold from others)
            navLinks.forEach(l => l.classList.remove('active'));

            // Add 'active' class to the clicked link to keep it bold
            this.classList.add('active');

            // Add animate class for click animation
            this.classList.add('animate');

            // Remove animate class after animation completes
            setTimeout(() => {
                this.classList.remove('animate');
            }, 700);

            // If it's a dropdown button, toggle the dropdown content visibility
            if (this.classList.contains('dropbtn')) {
                const dropdownContent = this.nextElementSibling;
                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});
