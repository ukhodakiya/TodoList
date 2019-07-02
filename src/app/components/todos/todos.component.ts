import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos: Todo[];
  constructor(private todoservice: TodoService) {  }

  ngOnInit() {
  this.todoservice.getTodos().subscribe(todos => {
    this.todos = todos;
  });
  }

 deleteTodo(todo:Todo) {
   //delete from ui
this.todos = this.todos.filter(ft => ft.id !== todo.id);
// delete from server
this.todoservice.deleteTodo(todo).subscribe();

  }

  addTodo(todo:Todo){
    this.todoservice.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });

  }

}