import _listService from "../Services/ListService.js";
import store from "../store.js";
import List from "../Models/List.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = store.State.lists
  let listElem = document.getElementById("list")
  let template = ""

  lists.forEach(List => {
    template += List.Template
  })
  listElem.innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    console.log('list controller is working')
    _drawLists()
  }
  createNewTask(event) {
    event.preventDefault();
    let formData = event.target;
    let newCreateNewTask = {
      taskTitle: formData.taskTitle.value
    }
    console.log(newCreateNewTask);


    _listService.createNewTask(newCreateNewTask)
    _drawLists()
  }

  addTask(event, id) {
    event.preventDefault();
    let formData = event.target;

    let newTask = {
      taskList: formData.taskList.value
    }
    console.log(newTask);
    _listService.addTask(newTask, id);
    _drawLists();
  }
  deleteTaskList(id) {
    let popup2 = window.confirm("Are you sure you want to delte this task list?");
    if (popup2) {
      _listService.deleteTaskList(id)
      _drawLists()
    }
  }
  deleteTask(id) {
    let popup = window.confirm("Are You sure you want to delete this task?");
    if (popup) {
      _listService.deleteTask(id)
      _drawLists()
    }

  }

  //NOTE: After the store loads, we can automatically call to draw the lists.
  // _drawLists();


  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
