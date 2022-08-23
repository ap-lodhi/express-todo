const express = require('express');
 const Todos =require('./todo')
const app = express();
app.use(express.json())
//console.log(process)
// const todos =[]

const todos =new Todos()
app.get('/todos', (req,res)=>{
   return res.send({
    todos: todos.getTodos()
   })
})

app.post('/todo', (req,res)=>{
    try{
        const {todo} =req.body 
    const {task} =todo;
    console.log(task)
   todos.addTodo(task)
    return res.send('todo has been added')
    }catch(ex){
        console.error(ex)
        return res.status(500).send('internal server error')
    }
})

app.delete('/todo/:id', (req,res)=>{
  let {id}=req.params;
  id =parseInt(id)

  try{
    todos.deleteTodo(id)
  }catch(ex){

      return res.status(404).send("the todo is not exist")
  }
   
   
    
        return res.send("Deleted ")

})


const PORT =3020;
app.listen(3020, ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})