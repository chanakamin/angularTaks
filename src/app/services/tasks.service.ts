import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';
import { Task } from '../interfaces/Task';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasksChanged: Subject<true> = new Subject();

  constructor(private httpService: HttpClient) { }

  getTasks() {
    return this.httpService.get<Task[]>(config.baseUrl);
  }

  newTask(task: Task) {
    return this.httpService.post(config.baseUrl, task, {
      responseType: 'text',
    })
    .pipe(tap((data) => {
      this.tasksChanged.next(true);
    }));
  }

  deleteTask(id: number) {
    return this.httpService.delete(`${config.baseUrl}/${id}`, {
      responseType: 'text',
    })    
    .pipe(tap((data) => {
      this.tasksChanged.next(true);
    }));
  }
}
