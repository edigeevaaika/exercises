//1. У нас есть массив ["Banana", "Cola", "Cat"] вывести их на страницу в виде карточек.

const items = ["Banana", "Cola", "Cat"];
const container = document.getElementById("card-container");

for (let i = 0; i < items.length; i++) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerText = items[i];
  container.appendChild(card);
}

//2. У нас есть массив ["hand", "leg", "head", "finger", "eye"] вывести элементы массива в виде списка.
let list = ["hand", "leg", "head", "finger", "eye"];
let example = document.createElement("ul");
document.body.append(example);
example.append(list);