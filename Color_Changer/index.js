const buttons=document.querySelectorAll('button');
const body=document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        body.style.backgroundColor=e.target.id;
        if (e.target.id==='Grey'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='Red'){
            e.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='yellow'){
            body.style.back=e.target.id;
        }
        if (e.target.id==='pink'){
            body.style.back=e.target.id;
        }
        if (e.target.id==='green'){
            body.style.back=e.target.id;
        }
        if (e.target.id==='orange'){
            body.style.back=e.target.id;
        }
    });
});