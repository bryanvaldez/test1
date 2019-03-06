import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PadronService} from '../../services/padron.service';
import { Router } from '@angular/router';
import { Padron } from '../../models/padron.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public listPadron: Padron[];
  constructor(
      private _padronService: PadronService,
      private _router: Router
  ) {

  }

  ngOnInit() {
    this.listPadron = this._padronService.getListPadron();
  }

  showRegister(item: Padron) {
    this._router.navigate(['/register', item.key]);
  }

  searchText(text: string): Padron[] {
    const response: Padron[] = [];
    text = text.toLowerCase();
    for (const person of this.listPadron) {
      const name = person.label.toLowerCase();
      if (name.indexOf(text) >= 0) {
        response.push(person);
      }
    }
    console.log(response);
    return response;
  }

  submitText(text: string) {
    this._router.navigate(['/search', text]);
  }

}

