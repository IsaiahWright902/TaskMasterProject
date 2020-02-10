import { generateId } from "../utils.js";

export default class TaskList {
  constructor(data) {
    this.taskList = data.taskList
    this.id = data.id || generateId()


    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)

  }


  get Template() {
    return /*html*/` 
    <li>${this.taskList}  <button onclick="app.listController.deleteTask('${this.id}')" class="btn btn-danger">Delete</button> </li>

    `
  }
}