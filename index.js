const nav = document.querySelector('.navbar');

nav.addEventListener('click', e => {
  const link = e.target.closest('a');
  if (!link) return;

  nav.querySelectorAll('a')
    .forEach(a => a.classList.remove('active'));

  link.classList.add('active');
});