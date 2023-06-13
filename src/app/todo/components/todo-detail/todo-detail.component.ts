import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Todo } from '../../models/todos.model';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
})
export class TodoDetailComponent {
  todo?: Todo;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todo = this.todoService.getTodo(this.route.snapshot.params['id']);
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo);
    this.router.navigate(['todos']);
  }
}
