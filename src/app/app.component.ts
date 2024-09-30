import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from '../app/todo-list/todo-list.component';
import { ITodo, TODO } from './todo.model';
import { SearchBarComponent } from '../app/search-bar/search-bar.component';
import { TodoFormComponent } from '../app/todo-form/todo-form.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoListComponent, SearchBarComponent, TodoFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app';
  todos: ITodo[] = TODO;
  sortedTodos: ITodo[] = [];
  filterImportant: boolean = false;
  searchQuery: string = '';
  showForm: boolean = false; 

  constructor() {
    this.sortedTodos = [...this.todos];
  }

  onTodoUpdated(updatedTodo: ITodo) {    
    const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
      this.todos[index] = updatedTodo;
      this.applyFilters();
    }
  }

  sortByDeadline() {
    this.sortedTodos.sort((a, b) => {
      if (!a.deadline) return 1;
      if (!b.deadline) return -1;
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    });
  }

  toggleFilterImportant() {
    this.filterImportant = !this.filterImportant;
    this.applyFilters();
  }

  applyFilters() {
    this.sortedTodos = this.todos.filter(todo => {
      const matchesImportance = this.filterImportant ? todo.important : true;
      const matchesSearch = this.searchQuery ? todo.title.toLowerCase().includes(this.searchQuery.toLowerCase()) : true;
      return matchesImportance && matchesSearch;
    });
    this.sortByDeadline();
  }

  onSearch(query: string) {
    this.searchQuery = query;
    this.applyFilters();
  }

  deleteItem(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.applyFilters();
    }
  }

  clearAll() {
    this.todos = [];
    this.sortedTodos = [];
  }

  onCreate() {
    this.showForm = true;
  }

  onCancelCreate() {
    this.showForm = false;
  }

  onAddTodo(newTodo: ITodo) {
    this.todos.push(newTodo);
    this.applyFilters();
    this.showForm = false;
  }
}
