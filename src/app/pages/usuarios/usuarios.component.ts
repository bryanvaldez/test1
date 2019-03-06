import { Component, OnInit } from '@angular/core';

const USUARIOS: any[] = [
  {id: 1, titulo: 'Archivo 1', version: '1.0', publicacion: '01/01/2018', descripcion: 'descripición del archivo', size: '2mb', archivo: 'archivo.txt' },
  {id: 2, titulo: 'Archivo 2', version: '5.0', publicacion: '01/01/2018', descripcion: 'descripición del archivo', size: '2mb', archivo: 'archivo.txt' },
  {id: 3, titulo: 'Archivo 3', version: '1.1', publicacion: '01/01/2018', descripcion: 'descripición del archivo', size: '2mb', archivo: 'archivo.txt' },
  {id: 4, titulo: 'Archivo 4', version: '1.2', publicacion: '01/01/2018', descripcion: 'descripición del archivo', size: '2mb', archivo: 'archivo.txt' },
  {id: 5, titulo: 'Archivo 5', version: '2.0', publicacion: '01/01/2018', descripcion: 'descripición del archivo', size: '2mb', archivo: 'archivo.txt' },
  {id: 6, titulo: 'Archivo 6', version: '1.0', publicacion: '01/01/2018', descripcion: 'descripición del archivo', size: '2mb', archivo: 'archivo.txt' }

];


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users = USUARIOS;

  constructor() { }

  ngOnInit() {
  }


}
