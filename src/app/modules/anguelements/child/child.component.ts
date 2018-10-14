import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() lang:any;
@Input() pos:any;

@Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClick(value) {
    this.childEvent.emit(value);
  }
}
