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
