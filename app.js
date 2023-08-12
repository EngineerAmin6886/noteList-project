// 1402-05-18
// noteList-project
// gr:Amin
// discription: here we can write our daily notes.

let main = document.querySelector('#main');
let noteList = document.querySelector('#note-list');

main.addEventListener('click',newNote);

function newNote (e){
    e.preventDefault();
    let userText = document.querySelector('#no').value

    let span = document.createElement('span')
    span.innerText = userText

    let li = document.createElement('li')
    li.appendChild(span)

    let a = document.createElement('a')
    a.innerText = 'X'
    a.setAttribute('href','#')
    a.classList.add('remove-note')
    
    // add removeBtn to li
    li.appendChild(a)
    // add li to note List
    noteList.appendChild(li)
}