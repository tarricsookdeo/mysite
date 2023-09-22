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

// Max values image left and top can have due to img size
const widthBoundary = width - 100;
const lengthBoundary = length - 100;

// Settime out interval
const delay = 1000 / 250;

// Number of headshots
const num = 100;

/* An array of objects. Each object will contain the properties of the associated image.
Properties of an image object:
{
  id: int,
  x: int,
  y: int,
  xd: int,
  yd: int
}
*/
const images = [];

function drawImages() {
  for (let i = 0; i < num; i++) {
    // Generate prop to be associated with an image
    let prop = {
      id: i,
      x: Math.floor(Math.random() * widthBoundary),
      y: Math.floor(Math.random() * lengthBoundary),
      xd: Math.random() * (5 - -5) + -5,
      yd: Math.random() * (5 - -5) + -5
    };

    images.push(prop);

    // Create image object and populate
    const img = document.createElement('img');
    img.src = headshotSrc;
    img.className = 'headshot';
    img.id = `${i}`;
    img.style.position = 'absolute';
    img.style.left = `${images[i].x}px`;
    img.style.top = `${images[i].y}px`;
    imageContainer.append(img);
  }
}

function animate() {
  // Expirimenting with X value trends over time
  const reduceX = images.reduce((acc, obj) => {
    return acc + obj.x;
  }, 0);
  console.log(`Average X: ${reduceX / images.length}`);
  const headshots = document.getElementsByClassName('headshot');
  for (let i = 0; i < num; i++) {
    const newX = images[i].x + images[i].xd;
    if (newX < widthBoundary && newX > 0) {
      headshots[i].style.left = `${newX}px`;
      images[i].x = newX;
    } else {
      images[i].xd = Math.random() * (5 - -5) + -5;
    }

    // Update y
    const newY = images[i].y + images[i].yd;
    if (newY < lengthBoundary && newY > 0) {
      headshots[i].style.top = `${newY}px`;
      images[i].y = newY;
    } else {
      images[i].yd = Math.random() * (5 - -5) + -5;
    }
  }
}

drawImages();

const intervalID = setInterval(animate, delay);
