document.addEventListener("DOMContentLoaded", function () {
    let testimonials = document.querySelectorAll(".testimonial");
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove("active");
            if (i === index) {
                testimonial.classList.add("active");
            }
        });
    }

    function nextTestimonial() {
        testimonials[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add("active");
    }

    showTestimonial(currentIndex);

    setInterval(nextTestimonial, 3000);
});
