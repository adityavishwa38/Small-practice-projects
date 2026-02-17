const inputbox=document.getElementById('inputbox');
const addbtn=document.getElementById('addbtn');
const todoList=document.getElementById('todoList');

let editTodo=null;

const addTodo=()=>{
    const inputText=inputbox.value.trim();
    if(inputText.length<=0){
        alert('no word found');
        return false;
    }

    if(addbtn.value==="Edit"){
        editTodo.target.previousElementSibling.innerHTML=inputText;
        addbtn.value="Add";
        inputbox.value="";
    }
    else{
        const li=document.createElement("li");
        const p=document.createElement("p");
        p.innerHTML=inputText;
        li.appendChild(p);

        const editbtn=document.createElement("Button");
        editbtn.innerText="Edit";
        editbtn.classList.add("btn");
        li.appendChild(editbtn);

        const deletebtn=document.createElement("Button");
        deletebtn.innerText="Remove";
        deletebtn.classList.add("btn");
        deletebtn.style.backgroundColor="#e36414"
        li.appendChild(deletebtn);

        todoList.appendChild(li);
        inputbox.value="";
    }
}

const updateTodo=(e)=>{
    if(e.target.innerHTML==="Remove"){
        todoList.removeChild(e.target.parentElement);
    }

    if(e.target.innerHTML==="Edit"){
        inputbox.value=e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addbtn.value="Edit";
        editTodo=e;
    }
}

addbtn.addEventListener('click',addTodo);
todoList.addEventListener('click',updateTodo);
