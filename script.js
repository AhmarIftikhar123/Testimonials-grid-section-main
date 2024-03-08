const animateTestimonial = () => {
  gsap.from(".testimonials article", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "power3.out",
  });
};
window.addEventListener("load", animateTestimonial);
