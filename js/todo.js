const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify로 localStorage에 toDos를 array 처럼 생긴 string으로 저장시켜준다
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDo.id 는 number, li.id는 string이므로 타입이 달라 filter 적용 안되므로 li.id를 parseInt함수로 number로 만들어준다
  saveToDos(); // 삭제가 적용된 toDos array를 다시 저장해줌
}

function paintToDo(newToDo) {
  // console.log('i will paint', newToDo);
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  span.innerText = newToDo.text;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  }; // object형태로 만들어줌
  toDos.push(newToDoObj); //object형태로 만든 inputvalue를 toDos array에 push해줌
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //localStorage에 array형태의 'string'으로 저장된 todos를 'array'로 꺼내준다 즉, index를 통해 각 value에 access할 수 있다.
  toDos = parsedToDos; // 새로 todo리스트 작성해도 localStorage에 저장되어있던 기존 todos를 toDos array에 재할당해주어 지워지지 않게 해줌
  parsedToDos.forEach(paintToDo);
}
