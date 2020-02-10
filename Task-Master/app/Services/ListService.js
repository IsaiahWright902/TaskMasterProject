import List from "../Models/List.js";
import store from "../store.js";
import TaskList from "../Models/listContent.js"

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  constructor() {
    console.log("list service is working")
  }
  createNewTask(newcreateNewTask) {
    newcreateNewTask = new List(newcreateNewTask)
    store.State.lists.push(newcreateNewTask)
    store.saveState()
  }
  addTask(newTask, Listid) {
    newTask = new TaskList(newTask)
    let list = store.State.lists.find(list => list.id === Listid)
    list.taskList.push(newTask)
    store.saveState()
  }
  deleteTaskList(id) {
    let lists = store.State.lists.filter(list => list.id !== id)
    store.State.lists = lists
    store.saveState()
  }
  deleteTask(id) {
    let list = store.State.lists.find(list => list.taskList.find(l => l.id === id))
    let taskList = list.taskList.filter(task => task.id !== id)
    store.State.lists.find(list => list.taskList.find(l => l.id === id)).taskList = taskList
    store.saveState()
  }
}

const SERVICE = new ListService();
export default SERVICE;
