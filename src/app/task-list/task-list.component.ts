import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;
  tasks: any;

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.tasks$;
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTask(task);
  }

  filterTasks(status: string): Task[] {
    let filteredTasks: Task[];

    if (status === 'completed') {
      filteredTasks = this.tasks.filter((task: { completed: any; }) => task.completed);
    } else if (status === 'pending') {
      filteredTasks = this.tasks.filter((task: { completed: any; }) => !task.completed);
    } else {
      throw new Error('Estado no válido. Usa "completed" o "pending".');
    }

    return filteredTasks;
  }
}