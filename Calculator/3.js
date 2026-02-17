let input=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button");

let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML =='AC'){
            string="";
            input.value=string;
        }

        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }

        else{
            string+=e.target.innerHTML;
            input.value=string;
        }
    });
});

document.addEventListener("keydown", (event) => {
    let key = event.key;

    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        string += key;
        input.value = string;
    }
    else if (key === "Enter") {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    }
    // ✅ Fix: handle Backspace and Delete keys
    else if (key === "Backspace" || key === "Delete") {
        string = string.substring(0, string.length - 1);
        input.value = string;
    }
    else if (key === "Escape") {
        string = "";
        input.value = "";
    }
});