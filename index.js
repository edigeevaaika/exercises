//1. У нас есть массив ["Banana", "Cola", "Cat"] вывести их на страницу в виде карточек.

let items = ["Banana", "Cola", "Cat"];
let container = document.getElementById("card-container");

for (let i = 0; i < items.length; i++) {
  let card = document.createElement("div");
  card.className = "card";
  card.innerText = items[i];
  container.appendChild(card);
}

//2. У нас есть массив ["hand", "leg", "head", "finger", "eye"] вывести элементы массива в виде списка.
let bodyParts = ["hand", "leg", "head", "finger", "eye"];
let list = document.createElement("ul");

for (let i = 0; i < bodyParts.length; i++) {
  let item = document.createElement("li");
  item.innerText = bodyParts[i];
  list.appendChild(item);
}
document.body.appendChild(list);
list.style.color = "green";
// 3. У нас есть массив ["hi", "hello", "bonjour"] вывести элементы массива в виде кнопок.

let greetings = ["hi", "hello", "bonjour"];
let = document.createElement("div");

for (let i = 0; i < greetings.length; i++) {
  let button = document.createElement("button");
  button.innerText = greetings[i];
  container.appendChild(button);
}

document.body.appendChild(container);
// 4.BoomBam! У нас есть массив [["1", "2", "3", "4", "5", "6"], ["7", "8", "9", "10", "11", "12"], ["13", "14", "15", "16", "17", "18"], ["19", "20", "21", "22", "23", "24"], ["25", "26", "27", "28", "29", "30"]] вывести этот массив в виде таблицы.


