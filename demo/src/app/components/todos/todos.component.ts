import { Component, OnInit } from '@angular/core';
import {Todo} from 'src/app/models/Todo';
import {TodoService} from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos=>{
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo): void {
    // remove from UI
    this.todos = this.todos.filter(t=> t.id !== todo.id);
    // remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo): void {
    this.todoService.addTodo(todo).subscribe(todo=>{
      this.todos.push(todo);
    });
  }

}