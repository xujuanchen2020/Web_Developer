// const form=(document.getElementById('my-form'));
// console.log(form);
// console.log(document.querySelector('.container'));
// console.log(document.querySelector("h1"));

//multiple element
//console.log(document.querySelectorAll(".items"));
//console.log(document.getElementsByClassName('li'));

//const items = document.querySelectorAll('.items');
//items.forEach((item)=>console.log('item'));

// const ul = document.querySelector(".items");
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerHTML="World";
// ul.lastElementChild.innerHTML = "<h1>Title</h1>";

//  const btn = document.querySelector('.btn');
// // btn.style.background = "red";
// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     //console.log(e.target.className);
//     document.querySelector('#my-form').style.background='#ccc';
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value==='' || emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(()=>msg.remove(),3000);
    }else{
        //console.log("success");
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameInput.value}:${emailInput.value}`));
        userList.appendChild(li);
        //clear fields
        nameInput.value='';
        emailInput.value='';
    }
}
