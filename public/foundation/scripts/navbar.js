const updateNavOrientation = () => {
  const titleBar = document.querySelector('.title-bar');
  const topBar = document.querySelector('.top-bar');
  const navMenu = document.getElementById('nav-menu');
  const isTitleBarVisible = window.getComputedStyle(titleBar).display !== 'none';

  if (isTitleBarVisible) {
    navMenu.classList.add('vertical');
  } else {
    navMenu.classList.remove('vertical');
    topBar.style.display = 'flex';
  }
};

updateNavOrientation();
window.addEventListener('resize', updateNavOrientation);