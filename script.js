const sections = document.querySelectorAll('.section');

function revealSections() {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) section.classList.add('visible');
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Scroll to top
const backToTop = document.querySelector('.back-to-top');
backToTop.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
