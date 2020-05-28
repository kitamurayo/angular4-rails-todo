import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

import 'rxjs/Rx';

import { Todo } from '../models/todo.model';
import { TodoService } from './todo.service';

@Injectable()
export class TodoApiService {
  private url = '/todos';

  constructor(private httpClient: HttpClient,
              private todoService: TodoService) {
  }

  createTodo(todo: Todo) {
    const body = todo;
    this.httpClient.post(this.url, todo)
    .subscribe((req: Todo) => {
      console.log(req);
      this.todoService.setTodo(req);
    }
    );
  }

  deleteTodo(id: number, index: number) {
    this.httpClient.delete(this.url + '/' + id.toString()).subscribe(
      ((req: Todo) => {
        this.todoService.deleteTodo(index);
      }),
      error => {
        console.log('error');
      }
    );
  }

  getTodos() {
    this.httpClient.get<Todo[]>(this.url, {
      observe: 'body',
      responseType: 'json'
    })
    .subscribe(
      (todos: Todo[]) => {
        this.todoService.setTodos(todos);
      },
      error => {
        console.log('error');
      }
    );
  }
}
