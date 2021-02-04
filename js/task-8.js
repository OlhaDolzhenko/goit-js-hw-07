// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const controlsContainerRef = document.querySelector("#controls");
const containerForBoxesRef = document.querySelector("#boxes");
const NumberberOfBoxesRef = document.querySelector("#controls > input");
const renderButtonRef = document.querySelector(
  '#controls > button[data-action="render"]'
);
const destroyButtonRef = document.querySelector(
  '#controls > button[data-action="destroy"]'
);

function createBoxes(amount) {
  amount = NumberberOfBoxesRef.value;
  let size = 30;
  for (var i = 0; i < amount; i++) {
    let nextSize = size + i * 10;
    const div = document.createElement("div");
    const string = `width: ${nextSize}px; height: ${nextSize}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    div.setAttribute("style", string);
    containerForBoxesRef.appendChild(div);
  }
}
function destroyBoxes() {
  containerForBoxesRef.innerHTML = "";
  NumberberOfBoxesRef.value = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}
renderButtonRef.addEventListener("click", createBoxes);
destroyButtonRef.addEventListener("click", destroyBoxes);
