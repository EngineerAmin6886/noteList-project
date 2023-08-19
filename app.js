// select kardn input-box az html v rehktan o dar motghaer.
const inputBox = document.getElementById("input-box");

// select kardn list-container az html v rehktan o dar motghaer.
const listContainer = document.getElementById("list-container");

// shakt function brai ezafeh kardn b  list-container.
function addTask() {
  // braeh vagty k input mon kali bod bhemon hosehdar bedeh.
  if (inputBox.value === "") {
    alert("باید یه چیزی بنویسی!");

    // braeh vagty k to input chezi nvestim
  } else {
    // shakt element li v rehktan o da motghaer.
    let li = document.createElement("li");

    // neshan dadn text to input dar li.
    li.innerHTML = inputBox.value;

    // gharar dadn li dar list-container ya ul.
    listContainer.appendChild(li);

    // sahkt element span v rehktan o dar motghaer.
    let span = document.createElement("span");
    // ezafeh kardn icon b span.
    span.innerHTML = `<i class="lnr lnr-trash"></i>`;
    // grar dadn span dar li.
    li.appendChild(span);
    alert("یادداشت شما با موفقیت ثبت شد.");
  }
  // braei reset kardn input.
  inputBox.value = "";
  // braeh save kardn.
  saveData();
}

// shakt function braeh ul ya list-container
listContainer.addEventListener(
  "click",
  function (e) {
    // braeh kat khsedan ro li b maneh kar anjam sodeh.
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();

      // braeh delete kardan span ya li ya yaddasteh moredeh nazar.
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// braeh save kardan li ha dar hafezeh.
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// braeh nmaeseh li ha mogeh load kardan safeh.
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
