/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
      constructor(name){
         this.name = name;
         this.myTodo = []
      }
      add = (todo)=> {
         this.myTodo.push(todo);
      }
      remove = (indexOfTodo)=> {
        this.myTodo.splice(indexOfTodo,1);
      }
      update = (index,updatedTodo) => {
        this.myTodo[index] = updatedTodo;
      }
      getAll = ()=> {
        for(let i=0;i<this.myTodo.length;i++){
          console.log(i+1," ",this.myTodo[i]);
        }
      }
      get =(indexOfTodo) => {
         console.log(this.myTodo[indexOfTodo]);
      }
      clear = ()=>{
         this.myTodo.splice(0,this.myTodo.length);
      }
}

const anshyy = new Todo("anshyy");
console.log(anshyy.name);


anshyy.add("Js interview");
anshyy.add("class of jaca");
anshyy.add("sabji lene jaa");
anshyy.add("heloo wosds");
console.log(anshyy.myTodo);
anshyy.remove(0);
console.log(anshyy.myTodo)
anshyy.update(1,"khana khalo");
console.log(anshyy.myTodo)
anshyy.getAll();
anshyy.get(1);
anshyy.clear();
console.log(anshyy.myTodo);


module.exports = Todo;
