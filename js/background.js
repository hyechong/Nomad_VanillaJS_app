const bgWrapper = document.querySelector('.bg-wrapper');
const images = ['0.png', '1.jpeg', '5.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `images/${chosenImage}`;

bgWrapper.appendChild(bgImage);
