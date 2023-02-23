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

const data = [
  ["1", "2", "3", "4", "5", "6"],
  ["7", "8", "9", "10", "11", "12"],
  ["13", "14", "15", "16", "17", "18"],
  ["19", "20", "21", "22", "23", "24"],
  ["25", "26", "27", "28", "29", "30"],
];
const table = document.createElement("table");

for (let i = 0; i < data.length; i++) {
  const row = document.createElement("tr");

  for (let j = 0; j < data[i].length; j++) {
    const cell = document.createElement("td");
    cell.innerText = data[i][j];
    row.appendChild(cell);
  }

  table.appendChild(row);
}

document.body.appendChild(table);
table.style.fontSize = "50px";
table.style.paddingTop = "70px";
table.style.paddingLeft = "70px";
table.style.color = "blue";

// 5.BoomBam! - 2 У нас есть массив [["Table", "2", "3", "4", "5"], ["2", "4", "6", "8", "10"], ["3", "6", "9", "12", "15"], ["4", "8", "12", "16", "20"], ["5", "10", "15", "20", "25"]] вывести этот массив в виде таблицы.

const data2 = [
  ["Table", "2", "3", "4", "5"],
  ["2", "4", "6", "8", "10"],
  ["3", "6", "9", "12", "15"],
  ["4", "8", "12", "16", "20"],
  ["5", "10", "15", "20", "25"],
];
const table2 = document.createElement("table");

for (let e = 0; e < data2.length; e++) {
  const row2 = document.createElement("tr");

  for (let r = 0; r < data2[e].length; r++) {
    const cell2 = document.createElement(e === 0 ? "th" : "td");
    cell2.innerText = data2[e][r];
    row2.appendChild(cell2);
  }

  table2.appendChild(row2);
}

document.body.appendChild(table2);
table2.style.fontSize = "50px";
table2.style.paddingTop = "70px";
table2.style.paddingLeft = "70px";
table2.style.color = "blue";
