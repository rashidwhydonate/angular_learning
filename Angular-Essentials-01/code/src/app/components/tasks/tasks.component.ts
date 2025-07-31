import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/user.model';
import { TaskComponent } from './task/task.component';
import { Task } from '../../models/task.model';
import { DUMMY_TASKS } from '../../mock/tasks.mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnChanges {
  @Input() user!: User;
  tasks: Task[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      this.tasks = DUMMY_TASKS.filter(
        (task) => task.userId.toString() == this.user.id.toString()
      );
    }
  }
  addTask() {}
}
