import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() description:string = 'this is a new task you have to complete!';
  @Output() isRemoved = new EventEmitter<boolean>();
  isChecked:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sendRemoveEvent(){
    this.isRemoved.emit(true);
  }

}
