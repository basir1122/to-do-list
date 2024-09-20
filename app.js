let btn = document.getElementById('btn')
let todoInput = document.getElementById('txt')
let todo=document.getElementById('todo')



function todoList(){
  
  let todoText=todoInput.value
  console.log(todoText)


  
  if(todoText){
    
    const list= document.createElement("li");
  const todoItem=document.createElement("input");
  const delteBtn=document.createElement("button")
  const editBtn=document.createElement("button")
  todoItem.value=todoText;
  editBtn.innerText="Edit"
  delteBtn.innerText="remove"
  delteBtn.classList.add("btn")
  todoItem.classList.add('txt')
  editBtn.classList.add("btn")
  todoItem.readOnly=true

  delteBtn.addEventListener('click',()=>{
    todo.removeChild(list)
  })
  

  list.appendChild(todoItem)
  list.appendChild(delteBtn)
  list.appendChild(editBtn)
  todo.appendChild(list)
    
  

  }
 
  
}
