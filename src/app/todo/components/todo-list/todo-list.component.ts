import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todos.model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  title: string = 'todo-list';
  todos?: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos(); /*.subscribe({
        next: (data) => {
          this.todos = data;
          console.log(data);
        },
        error: (e) => {
          console.log(e);
        },
      });
    };*/
  }
}
