const nav = document.querySelector('.navbar');

nav.addEventListener('click', e => {
  const link = e.target.closest('a');
  if (!link) return;

  nav.querySelectorAll('a')
    .forEach(a => a.classList.remove('active'));

  link.classList.add('active');
});

document.querySelectorAll('.form input, .form textarea')
  .forEach(field => {
    field.addEventListener('blur', () => {
      field.classList.add('touched');
    });
  });

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});