import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  todoContent!: string;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if (this.todoContent.trim() === '') {
      return false;
    }
    
    this.todoService.addTodo(this.todoContent);
    this.todoContent = '';
  }
  
}
