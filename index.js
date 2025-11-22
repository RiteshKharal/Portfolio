  const totalStars = 50;

  for (let i = 0; i < totalStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * -100 + 'vh';

    star.style.animationDuration = (3 + Math.random() * 9) + 's';
    star.style.animationDelay = Math.random() * 5 + 's';

    document.body.appendChild(star);
  }