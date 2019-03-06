import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: any = {};

  @Output() emitCard: EventEmitter<string>;

  constructor() {
    this.emitCard = new EventEmitter();
  }

  ngOnInit() {
  }

  submitCard(type) {
    console.log(type);
    this.emitCard.emit(type);
  }

}
