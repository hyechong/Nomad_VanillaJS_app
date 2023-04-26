const clock = document.querySelector('h2#clock');

// function sayHello() {
//   console.log('hello');
// }

// setInterval(sayHello, 5000); // 5초마다 실행
// setTimeout(sayHello, 5000); // 5초 뒤 한번 실행

function getClock() {
  const date = new Date();
  //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  const hours = String(date.getHours()).padStart(2, '0'); // date.getHours();의 값은 number이므로 padStart함수 적용 못함. 그러므로 String()함수로 감싸서 string으로 만들어주고 padStart적용
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 즉시 호출
setInterval(getClock, 1000); // 1초마다 실행

// '1'.padStart(2,'0') 'string'을 최소 2자리수로, 부족하면 앞쪽 빈 자리에 '0'을 추가 -> 결과 : '01'
// '12'.padStart(2,'0') string이 이미 두자릿수이므로 결과는 그대로 '12'
