import { PadronService } from '../../services/padron.service';
import { Padron } from '../../models/padron.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public listPadron: Padron[];

  constructor(
    private _padronService: PadronService
  ) { }

  ngOnInit() {
    this.listPadron = this._padronService.getListPadron();
  }

}
