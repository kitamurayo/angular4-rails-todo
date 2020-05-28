import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {

  public todosChanged = new Subject<Todo[]>();
  private todos: Todo[];

  constructor() {}

  setTodos(todos: Todo[]) {
    this.todos = todos;
    this.todosChanged.next(this.todos);
  }

  setTodo(todo: Todo) {
    this.todos.push(todo);
  }

  getTodos() {
    return this.todos;
  }

  getTodo(index: number) {
    return this.todos[index];
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }


}
