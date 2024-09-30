import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  
  @Input() todos?: ITodo[];

  @Output() todoUpdated = new EventEmitter<ITodo>();
  @Output() delete = new EventEmitter<number>();

  onDelete(id: number) {
    this.delete.emit(id);
  }
  
  onCheckboxChange(todo: ITodo) {
    todo.done = !todo.done;
    this.todoUpdated.emit(todo);
  }
}
