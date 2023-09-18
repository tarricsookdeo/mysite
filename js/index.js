const imageContainer = document.getElementById('image-container');
const headshotSrc = '../img/headshot.jpg';
const waldoSrc = '../img/waldo.jpg';

const num = 25;

for (let i = 0; i < num; i++) {
  const img = document.createElement('img');
  img.src = headshotSrc;
  img.className = 'headshot';
  imageContainer.append(img);
}

const img = document.createElement('img');
img.src = waldoSrc;
img.className = 'headshot';
imageContainer.append(img);
