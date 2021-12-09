/* Создайте три переменные, содержащие ссылки на список (<ul>, <input> и <button> элементы. */

let ul = document.querySelector("ul"); //ссылка на элемент, хранящаяся в переменной
let input = document.querySelector("input"); //ссылка на элемент, хранящаяся в переменной
let button = document.querySelector("button"); //ссылка на элемент, хранящаяся в переменной

// console.log(input.value);

//let li = document.createElement('li'); // создала строку списка
//  ul.appendChild(li);  // строка списка li помещена внутрь ul
// li.textContent = 'input.value'; // добавлен текст в список
//li.setAttribute('class','li'); // присвоила стили li тегу

//Попытка № 1   добавляет список покупок до пяти

ul.innerHTML = "";
let myList = [];

button.onclick = function () {
  if (input.value !== "") {
    myList.unshift(input.value);
    ul.innerHTML = ""; //возвращает пустую строку после нажатия кнопки
    for (let i = 0; i < myList.length; i++) {
      item = myList[i];
      let li = document.createElement("li");
      let span = document.createElement("span");
      let liButton = document.createElement("button");
      li.textContent = item;
      ul.appendChild(li);
      li.appendChild(liButton);
      liButton.appendChild(span);
      span.textContent = "Delete";
      liButton.setAttribute("class", "li button");
      // удаляет элемент списка.
      liButton.onclick = function () {
        li.parentNode.removeChild(li);
      }; //
    }
    // Удаляет из списка удаляет значение, находящееся в конце массива,
    //когда список достигает 15

    if (myList.length >= 15) {
      myList.pop();
    }

    input.value = "";
    input.focus();
  }
};
