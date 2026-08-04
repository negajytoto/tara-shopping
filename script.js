document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

const mainImage = document.querySelector('#mainImage');
document.querySelectorAll('.thumb').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.thumb').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    mainImage.src = button.dataset.image;
    mainImage.alt = button.dataset.alt;
  });
});
