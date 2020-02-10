import { generateId } from "../utils.js";
import TaskList from "./listContent.js";

export default class List {
  constructor(data) {
    this.taskTitle = data.taskTitle
    this.taskList = data.taskList || []
    this.id = data.id || generateId()



    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    // this.id = data.id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Tasks() {
    let template = ""
    this.taskList.forEach(task => {
      template += task.Template
    })
    return template
  }
  get Template() {
    return /*html*/`
<div class="col-12">
<h1>${this.taskTitle}</h1>
<button onclick="app.listController.deleteTaskList('${this.id}')" class="btn btn-danger">Delete</button>
<h3>Task List:</h3>
<ul>

${this.Tasks}

</ul>

<form onsubmit="app.listController.addTask(event, '${this.id}')">
                    <div class="form-group">
                        <label for="">Tasks</label>
                        <input type="text" name="taskList" class="form-control" placeholder=""
                            aria-describedby="helpId">
                        <button class="btn btn-primary" type="submit">
                            Add Task
                        </button>
                    </div>
                </form>
</div>
`
  }
}

{/* <h3>TaskList: ${this.TaskList}</h3> */ }