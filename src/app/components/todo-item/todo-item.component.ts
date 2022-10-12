import { trigger,state,style,animate,transition } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
const fadeStrikeThroughAnimation =  trigger('fadeStrikeThrough',[
  state(
    'active',
    style({
      fontSize: '18px',
      color:'black',
    }),
  ),
  state(
    'completed',
    style({
      fontSize: '17px',
      color: 'lightgrey',
      textDecoration: 'line-through'
    }),
  ),
  transition('active <=> completed', [animate(250)]),
])
@Component({
  selector: 'app-todo-item',
  templateUrl:'./todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  animations: [
   fadeStrikeThroughAnimation
  ],
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() changeStatus: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodo: EventEmitter<Todo>= new EventEmitter<Todo>(); 

  isHovered = false;
  isEditing = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  submitEdit(event: KeyboardEvent){
    const {keyCode} = event;
    event.preventDefault();
    if (keyCode === 13) {
      this.editTodo.emit(this.todo);
    }
  }

  changeTodoStatus() {
    this.changeStatus.emit({...this.todo, isCompleted: !this.todo.isCompleted});
  }
  removeTodo() {
    this.deleteTodo.emit(this.todo);
  }
}
