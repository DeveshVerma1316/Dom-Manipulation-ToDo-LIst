function loadTodos(){
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todosList":[]};
    console.log(todos);
    return todos;

}
function addTodoToLocalStorage(todoText){
    const todos = loadTodos();
    todos.todosList.push(todoText);
    localStorage.setItem("todos",todos);
}
document.addEventListener("DOMContentLoaded",() =>{
    const todoInput = document.getElementById("todoInput");
    const submitButton = document.getElementById("addTodo");
    submitButton.addEventListener("click",(event)=>{
        const todoText = todoInput.value;
        if (todoText ==''){
            alert("please write something for the todo");
        }else{
            addTodoToLocalStorage (todoText);
        }
    })

  
})

document.addEventListener("DOMContentLoaded",()=> {
    const todoInput = document.getElementById("todoInput");
    const submitButton = document.getElementById("addTodo");

    todoInput.addEventListener("change",(event) =>{
        const todoText = event.target.value;
        event.target.value = todoText.trim();
        console.log(event.target.value)
    });
})