$(document).ready(function() {
  const testimonialSlides = $('.testimonial-slide');
  const slideCount = testimonialSlides.length;
  const slideWidth = $('.testimonial-slide').outerWidth();
  let currentSlide = 0;

  // Show the current slide and hide others
  function showSlide(index) {
    testimonialSlides.removeClass('active');
    testimonialSlides.eq(index).addClass('active');
  }

  // Navigate to the previous slide
  $('.prev-button').click(function() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    showSlide(currentSlide);
  });

  // Navigate to the next slide
  $('.next-button').click(function() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
  });
});



