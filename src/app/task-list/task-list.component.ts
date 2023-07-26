import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCurrDateByType(type:'dayOfWeek'|'day'|'month'|'year'){

    let currDate = new Date();
    
    return type === 'dayOfWeek'?
    currDate.toLocaleDateString('locale', {weekday: 'long'}):
    type === 'day'?
    currDate.getDay():
    type === 'month'?
    currDate.toLocaleString('default', { month: 'long' }):
    currDate.getFullYear();
  }

}
