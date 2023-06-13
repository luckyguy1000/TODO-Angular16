import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todos.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent {
  todo: Todo = {
    id: '',
    title: '',
    description: '',
    completed: false,
  };

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todo = {
      ...this.todoService.getTodo(this.route.snapshot.params['id']),
    };
  }

  onSubmit(): void {
    if (this.todo.id) this.todoService.updateTodo(this.todo);
    else this.todoService.addTodo(this.todo);
    this.router.navigate(['todos']);
  }
}
