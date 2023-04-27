const images = ['0.png', '1.jpeg', '2.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage);
