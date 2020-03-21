const todos = [
    {
      id: 1,
      text: 'take out trash',
      isCompleted: true  
    },

    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true  
      },

    {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false 
    }

];

// console.log(todos[1]);

// //JSON strings, how we send data to sever.
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


// // for loop
// for(let i=0; i<10; i++){
//     console.log(`For Loop Number: ${i}`);
// }

// // while loop
// let j = 0;
// while(j<10){
//     console.log(`While Loop Numbe: ${j}`);
//     j++;
// }

// for (let i=0; i<todos.length;i++){
//     console.log(todos[i]);
// }

// for(let todo of todos){
//     console.log(todo.id);
// }

// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

// const todoFilter = todos.filter(function(todo){
//     return todo.isCompleted===true;
// });

// console.log(todoFilter);

const todoFilter = todos.filter(function(todo){
    return todo.isCompleted===true;
}).map(function(todo){
    return todo.text;
});

console.log(todoFilter);
