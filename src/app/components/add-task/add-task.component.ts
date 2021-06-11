import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  newTask: Task = {
    description: '',
    createdBy: '',
    done: false,
  };

  initTask() {
    this.newTask = {
      description: '',
      createdBy: '',
      done: false,
    }
  }

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.initTask();
  }

  createTask() {
    console.log(this.newTask);
    this.taskService.newTask(this.newTask).subscribe();
    this.initTask();
  }

}
