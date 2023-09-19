const imageContainer = document.getElementById('image-container');
const headshotSrc = '../img/headshot.jpg';
const waldoSrc = '../img/waldo.jpg';

const width = window.innerWidth;
const length = window.innerHeight;

const num = 25;

for (let i = 0; i < num; i++) {
  const img = document.createElement('img');
  img.src = headshotSrc;
  img.className = 'headshot';
  img.style.position = 'absolute';
  img.style.left = `${Math.floor(Math.random() * innerWidth - 100)}px`;
  img.style.top = `${Math.floor(Math.random() * innerHeight - 100)}px`;
  imageContainer.append(img);
}

// Waldo image
const img = document.createElement('img');
img.src = waldoSrc;
img.className = 'headshot';
img.style.position = 'absolute';
img.style.left = `${Math.floor(Math.random() * innerWidth - 100)}px`;
img.style.top = `${Math.floor(Math.random() * innerHeight - 100)}px`;
imageContainer.append(img);
