const inputBox = document.getElementById("input-box");
const button = document.querySelector("button");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

button.addEventListener("click", addTask);

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.setAttribute("class", "checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentNode.remove();
    }
    saveData();
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
