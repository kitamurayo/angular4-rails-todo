import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TodoApiService } from '../service/todo-api.service';
import { TodoService } from '../service/todo.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  subscription: Subscription;

  constructor(private todoApiService: TodoApiService,
              private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  deleteTodo(id: number, index: number) {
    this.todoApiService.deleteTodo(id, index);
  }

  private getTodos() {
    this.todoApiService.getTodos();
    this.subscription = this.todoService.todosChanged
    .subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
      }
    );
  }

}
