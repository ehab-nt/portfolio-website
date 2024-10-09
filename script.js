document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a JavaScript alert when the page loads
    // alert('Welcome to my biodata page!');

    // Typed Initiate
    if ($('.header h2').length == 1) {
        var typed_strings = $('.header .typed-text').text();
        var typed = new Typed('.header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 20,
            backSpeed:  0,
            smartBackspace: false,
            loop: true
        });
    }

    // Toggle visibility of sections
    document.querySelectorAll('.collapsible').forEach(function(section) {
        section.addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted successfully!');
    });

    // Hover effects
    document.querySelectorAll('.hover-highlight').forEach(function(element) {
        element.addEventListener('mouseover', function() {
            this.classList.add('highlight');
        });
        element.addEventListener('mouseout', function() {
            this.classList.remove('highlight');
        });
    });
});
