import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ITodo } from '../todo.model';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  title: string = '';
  deadline?: string;
  important: boolean = false;

  @Output() addTodo = new EventEmitter<ITodo>();
  @Output() cancel = new EventEmitter<void>(); 
  onSubmit() {
    if (!this.title.trim()) {
      return;
    }

    const newTodo: ITodo = {
      id: Date.now(),
      title: this.title,
      deadline: this.deadline ? new Date(this.deadline).toLocaleDateString() : undefined,
      important: this.important,
      completed: false
    };

    this.addTodo.emit(newTodo);
    this.clearForm();
  }
  onCancel() {
    this.cancel.emit();
    this.clearForm();
  }
  clearForm() {
    this.title = '';
    this.deadline = undefined;
    this.important = false;
  }
}

