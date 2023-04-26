const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
//const link = document.querySelector('a');

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = `Hello ${username}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
// }

loginForm.addEventListener('submit', loginSubmit);
//link.addEventListener('click', handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

// console.log(savedUsername);
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', loginSubmit);
} else {
  // show the greeting
  paintGreetings(savedUsername);
}

// Math.random()*10 // 0~10 사이 랜덤숫자
// Math.round()// 반올림
// Math.ceil()// 올림
// Math.floor()// 버림

// Math.floor(Math.random()*10) // 0~10 사이의 정수
