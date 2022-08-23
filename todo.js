class Todos{
    constructor(){
        this.todos=[]
    }

    getTodos(){
        return this.todos;
    }
    addTodo(task){
        let max =0;
        this.todos.forEach(todo =>{
           max =Math.max(max, todo.id)
        })
        let data ={
            id:max+1,
            task,
            createdAt: new Date()
        }
    
        this.todos.push(data)
    }

    deleteTodo(id){
        let index =null
    this.todos.forEach((todo,i)=>{
        if(todo.id == id){
            index =i;
        }
    }) 

    if(index == null){
        throw new Error('Does not exist ')
    }
     this.todos.splice(index,1)
    }
}
module.exports =Todos