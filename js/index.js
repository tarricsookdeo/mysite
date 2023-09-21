const imageContainer = document.getElementById('image-container');
const headshotSrc = '../img/headshot.jpg'; // Loads headshot image
const waldoSrc = '../img/waldo.jpg'; // Loads waldo image

/*
Gets value for width and length of the users device on load.
Note that the this value does not update if the screen size is resized after the initial load.
This could be account for by updating these values with a reszise event listener. Will evaluate if needed.
These values will always take up the entire viewable screen on the users device upon initial load.
This is done through 100vh values set in CSS.
*/
const width = window.innerWidth;
const length = window.innerHeight;

// Number of headshots
const num = 1;

/* An array of objects. Each object will contain the properties of the associated image.

Properties of an image object:
{
  x: int,
  y: int,
  xd: int,
  yd: int
}
*/
const images = [];

function generateImageObjects() {
  
}

// for (let i = 0; i < num; i++) {
//   const img = document.createElement('img');
//   img.src = headshotSrc;
//   img.className = 'headshot';
//   img.style.position = 'absolute';
//   img.style.left = `${Math.floor(Math.random() * innerWidth - 50)}px`;
//   img.style.top = `${Math.floor(Math.random() * innerHeight - 50)}px`;
//   imageContainer.append(img);
// }

// // Waldo image
// const img = document.createElement('img');
// img.src = waldoSrc;
// img.className = 'headshot';
// img.style.position = 'absolute';
// img.style.left = `${Math.floor(Math.random() * innerWidth - 100)}px`;
// img.style.top = `${Math.floor(Math.random() * innerHeight - 100)}px`;
// imageContainer.append(img);

// function animateImages() {
//   const images = document.getElementsByClassName('headshot');
//   for (let i = 0; i < images.length; i++) {}
// }

// animateImages();
