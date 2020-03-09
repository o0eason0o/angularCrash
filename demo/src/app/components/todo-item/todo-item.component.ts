import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) {}

  ngOnInit(): void {}

  // set dynamic class
  setClass(){
    return {
      todo: true,
      "is-complete": this.todo.completed
    };
  }

  onToggle(todo:Todo) {
    // UI
    todo.completed = !todo.completed;
    // server
    this.todoService.toggleCompleted(todo).subscribe(todo=>{
      console.log(todo);
    });
  }

  onDelete(todo:Todo) {
    this.deleteTodo.emit(todo);
  }

}
