import { Component, OnInit } from '@angular/core';
import { TodoApiService } from '../service/todo-api.service';
import { TodoService } from '../service/todo.service';
import { Todo } from '../models/todo.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  todoForm: FormGroup;

  constructor(private todoApiService: TodoApiService,
              private todoService: TodoService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.todoApiService.createTodo(this.todoForm.value);
    this.initForm();
  }

  private initForm() {
    this.todoForm = new FormGroup({
      'title': new FormControl('', Validators.required)
    });
  }
}
