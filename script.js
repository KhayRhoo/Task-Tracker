// document.addEventListener('DOMConentLoaded', function(){
//    // fetch('http:')
//     loadHTMLTable([]);
// });

// function loadHTMLTable(data){
//     const table = document.querySelector('table tbody');

//     if(data.length === 0){
//         table.innerHTML = "<tr><td class='no data' colsoan='5'> No Data</td></tr>";
//     }
// }










// window.addEventListener('load', () => {
//     tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     //const taskInput = document.querySelector('#task');
//     //const newForm = document.querySelector('#new-form') || '';

//     taskInput.adEventListener('change', e => {
//         localStorage.setItem('task', e.target.value);
//     })

//     newForm.addEventListener('submit', e => {
//         e.preventDefault();
//         const task = {
//             content: e.target.elements.content.value,
//             category: e.target.elements.category.value,
//             done: false,
//             createAt: new Date().getTime()
//         }
//         task.push(todo);

//         localStorage.setItem('task', JSON.stringify(task));

//         e.target.reset();

//         //display
//         Displaytasks();
//     })
// })


// function displayTasks() {
//     const tasklist = document.querySelector('#tasklist');
//     tasklist.innerHTML = '';
//     task.forEach(task => (
//         const taskitem = document.createElement('div');
//         taskitem.classlist.add('task-item')

//         const label = document.createElement('label');
//         const input = document.createElement('input');
//         const span = document.createElement('span');
//         const content = document.createElement('content');
//         const actions = document.createElement('actions');
//         const edit = document.createElement('edit');
//         const deletebtn = document.createElement('deletebtn');

//         content.classlist.add('tast-content');
//         actions.classlist.add('actions');
//         edit.classlist.add('edit');
//         deletebtn.classlist.add('deletebtn');

//         content.innerHTML = `<input type= "text" value= "${task.content}" readonly>`;
//         edit.innerHTML = 'Edit';
//         deletebtn.innerHTML = 'Delete'

//         label.appendChild(input);
//         label.appendChild(span);
//         actions.appendChild(edit);
//         action.appendChild(deletebtn);
//         taskitem.appendChild(label);
//         taskItem.appendChild(content);
//         taskItem.appendChild(actions);

//     ))
// }










const task = document.querySelector(".inputField input");
const addbtn = document.querySelector(".inputField button");

task.onkeyup = () =>{
    let userData = task.Value;
    if(userData.trim() != 0){
        addbtn.classList.add("active");
    }else{
        addbtn.classList.remove("active");
    }
}

addbtn.onclick = () =>{
    let userData = task.value;
    let getLocalStorage = localStorage.getItem("NewTodo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }

    listArr.push("userData");
    localStorage.setItem("New Todo", JSON.stringify(listArr));
}