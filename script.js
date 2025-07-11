// GSAP Animations
gsap.from(".gsap-title", { duration: 1.5, y: -50, opacity: 0, ease: "power3.out" });
gsap.from(".gsap-subtitle", { duration: 1.5, y: 50, opacity: 0, delay: 0.3, ease: "power2.out" });

gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reset"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});
