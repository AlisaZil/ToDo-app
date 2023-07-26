import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {

  @Input() description:string = 'this is a new task you have to complete!';

  @Output() sendIsRemoved = new EventEmitter<boolean>();
  @Output() sendIsChecked = new EventEmitter<boolean>();

  isChecked:boolean = false;

  sendRemoveEvent(){
    this.sendIsRemoved.emit(true);
  }

}
