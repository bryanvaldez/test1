import { Component, OnInit } from '@angular/core';
import { PadronService } from '../../services/padron.service';
import { Padron } from 'src/app/models/padron.model';
import {FormControl, Validators} from '@angular/forms';

const ELEMENT_DATA: any[] = [
  {position: 1, titulo: 'Archivo 1', version: '1.0', publicacion: '01/01/2018', descripcion: 'descripición del archivo', size: '2mb', archivo: 'archivo.txt' },
  {position: 2, titulo: 'Archivo 2', version: '5.0', publicacion: '01/01/2018', descripcion: 'descripición del archivo', size: '2mb', archivo: 'archivo.txt' },
  {position: 3, titulo: 'Archivo 3', version: '1.1', publicacion: '01/01/2018', descripcion: 'descripición del archivo', size: '2mb', archivo: 'archivo.txt' },
  {position: 4, titulo: 'Archivo 4', version: '1.2', publicacion: '01/01/2018', descripcion: 'descripición del archivo', size: '2mb', archivo: 'archivo.txt' },
  {position: 5, titulo: 'Archivo 5', version: '2.0', publicacion: '01/01/2018', descripcion: 'descripición del archivo', size: '2mb', archivo: 'archivo.txt' },
  {position: 6, titulo: 'Archivo 6', version: '1.0', publicacion: '01/01/2018', descripcion: 'descripición del archivo', size: '2mb', archivo: 'archivo.txt' }

];

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'titulo', 'version', 'publicacion', 'descripcion', 'size', 'archivo' ];
  dataSource = ELEMENT_DATA;

  public list: Padron[];

  constructor(private _padronService: PadronService) {

   }

  ngOnInit() {
    this.list  = this._padronService.getListPadron();
  }

  submit(data) {
    console.log(data);
  }

}
