// Плавное появление секций при прокрутке
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

// Кнопка “Наверх”
document.querySelector('.back-to-top').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Плавный скролл от интро к контенту
document.querySelector('.scroll-to-main').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#main').scrollIntoView({ behavior: 'smooth' });
});
