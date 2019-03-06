import { Component, OnInit,  Input,  Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class Reporte1Component implements OnInit {

  @Output() typeOrg = new EventEmitter();
  request = {type: 'TYPE_ORG', data: 0};

  public listTypeOrg: any[];


  constructor() {
    // this.typeOrg = new EventEmitter();
  }

  ngOnInit() {
  }

  selectOption(data) {
    this.request.data = data;
    this.typeOrg.emit(this.request);
  }

}
