// 1402-05-18
// noteList-project
// gr:Amin
// discription: here we can write our daily notes.

let main = document.querySelector("#main");
let noteList = document.querySelector("#note-list");

main.addEventListener("submit", newNote);

function newNote(e) {
  e.preventDefault();
  let userText = document.querySelector("#no").value;

  let span = document.createElement("span");
  span.innerText = userText;

  let li = document.createElement("li");
  li.appendChild(span);

  let a = document.createElement("a");

  a.classList.add("remove-note");

  li.appendChild(a);

  noteList.appendChild(li);
}














// let save = document.querySelector("#save");
// save.addEventListener("submit", saveList);

// function saveList(ev) {
//     ev.preventDefault();
//   localStorage.setItem("noteList", "li");
//   var myName = localStorage.getItem("noteList");
//   myName;
// }
