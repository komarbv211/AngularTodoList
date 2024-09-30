import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { TodoService } from '../services/todo.service';
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
  constructor(private todoService: TodoService) {}

  onDelete(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.delete.emit(id);
    });  }
  
  onCheckboxChange(todo: ITodo) {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo).subscribe(updatedTodo => {
      this.todoUpdated.emit(updatedTodo);
    });
  }
}
