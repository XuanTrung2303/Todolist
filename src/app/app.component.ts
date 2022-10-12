import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from './services/todo.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hasTodo$!: Observable<boolean>;
  

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.todoService.fetchFromLocalStorage();
    this.hasTodo$ = this.todoService.length$.pipe(map(length => length > 0));
  }
}
