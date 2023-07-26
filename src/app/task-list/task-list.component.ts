import { Component, Input, OnInit } from '@angular/core';

interface taskItem{
  description:string,
  isChecked:boolean,
  hide:boolean
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

  @Input() taskList:taskItem[] = [
    {description:'Read to kill a  mockingbird', isChecked:false, hide:false},
    {description:'Clean my bathroom', isChecked:false, hide:false},
    {description:'Write an email to edu about Scss', isChecked:false, hide:false},
    {description:'Plan a banana themed birthday party for Dalia', isChecked:false, hide:false},
    {description:'Plan a Princesses themed birthday party for Clara', isChecked:false, hide:false}
  ];

  openAddTask:boolean = false;

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
    currDate.toLocaleString('default', { month: 'long' }).toLocaleUpperCase():
    currDate.getFullYear();

  }

}
