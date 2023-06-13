import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../models/todos.model';

const baseUrl = 'api/todos';

@Injectable({
  providedIn: 'any',
})
export class TodoService {
  currentId = 5;
  todos: Todo[] = [
    {
      id: 1,
      title: 'TodoItem1',
      description: 'This is TodoItem1.',
      completed: false,
    },
    {
      id: 2,
      title: 'TodoItem2',
      description: 'This is TodoItem2.',
      completed: false,
    },
    {
      id: 3,
      title: 'TodoItem3',
      description: 'This is TodoItem3.',
      completed: false,
    },
    {
      id: 4,
      title: 'TodoItem4',
      description: 'This is TodoItem4.',
      completed: false,
    },
  ];

  constructor(private http: HttpClient) {}

  //getTodos(): Observable<Todo[]> {
  //return this.http.get<Todo[]>(baseUrl);
  getTodos() {
    return this.todos;
  }

  getTodo(id: any) {
    return this.todos.find((todo: Todo) => {
      return todo.id == id;
    });
  }

  addTodo(todo: Todo) {
    todo.id = this.currentId;
    this.currentId++;
    this.todos.push(todo);
  }

  updateTodo(todoItem: Todo) {
    const index: number = this.todos.findIndex((todo: Todo) => {
      return todo.id == todoItem.id;
    });

    this.todos[index] = todoItem;
  }

  deleteTodo(todo: Todo) {
    this.todos = [
      ...this.todos.filter((todoItem: Todo) => {
        return todoItem.id != todo.id;
      }),
    ];
  }

  clearTodos() {
    this.todos = [];
    return this.todos;
  }
}
