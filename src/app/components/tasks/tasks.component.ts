import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(public tasksService: TasksService) { }

  fetchTasks() {
    this.tasksService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit(): void {
    this.fetchTasks();
    this.tasksService.tasksChanged.subscribe(() => {
      this.fetchTasks();
    })
  }

  deleteTask(task: Task) {
    this.tasksService.deleteTask(task.id as number).subscribe();
  }

}
