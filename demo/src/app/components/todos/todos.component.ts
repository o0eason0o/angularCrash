import { Component, OnInit } from '@angular/core';
import {Todo} from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'one',
        completed: false
      },
      {
        id: 2,
        title: 'two',
        completed: true
      },
      {
        id: 3,
        title: 'three',
        completed: false
      }
    ];
  }

}
