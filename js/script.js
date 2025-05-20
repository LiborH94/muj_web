const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animace');
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.skill-block').forEach(el => {
  observer.observe(el);
});
