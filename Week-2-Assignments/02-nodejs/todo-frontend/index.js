let todo = [];

function getData() {
  fetch('http://localhost:3000/todos', { method: "GET" })
    .then(response => response.json())
    .then(populatetodo)
    .catch(error => {
      console.error('Error:', error);
    });
}

function populatetodo(data) {
  todo = data; // Assign fetched data to the todo array
  console.log("hererer");
  console.log(todo);
  showData();
}

getData();


function showData(){
    let parent = document.getElementById('mainframe');
    for(let i=0;i<todo.length;i++){
        let pd = document.createElement('div');
        pd.id = 'todo-items';
        let child1 = document.createElement('div');
        child1.id = "title"
        child1.innerHTML = todo[i].title;
        let child2 = document.createElement('div');
        child2.id = "description";
        child2.innerHTML = todo[i].description;
        pd.appendChild(child1);
        pd.appendChild(child2);
        let child3 = document.createElement('button');
        child3.id = "del";
        child3.innerHTML = "delete";
        parent.appendChild(pd);
        parent.appendChild(child3);
        
    }
}


