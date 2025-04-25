
  const hoverSound = document.getElementById('hoverSound');
  const clickSound = document.getElementById('clickSound');

  // Mainkan saat hover
  document.querySelectorAll('.button-cyber, .card').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0;
      hoverSound.play();
    });
  });

  // Mainkan saat klik
  document.querySelectorAll('.button-cyber, .card').forEach(elem => {
    elem.addEventListener('click', () => {
      clickSound.currentTime = 0;
      clickSound.play();
    });
  });