document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const controlButtons = document.querySelector('.control-buttons');
    const socialIcons = document.querySelector('.social-icons');
  
    menuToggle.addEventListener('click', () => {
      if (controlButtons.style.display === 'flex' && socialIcons.style.display === 'flex') {
        controlButtons.style.display = 'none';
        socialIcons.style.display = 'none';
      } else {
        controlButtons.style.display = 'flex';
        socialIcons.style.display = 'flex';
      }
    });
  });