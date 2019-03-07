import { Component, OnInit,  Input,  Output,  EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ReporteService } from '../../services/reporte.service';
import { Request } from 'src/app/models/request.model';
import { Types } from 'src/app/constants/types.constant';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class Reporte1Component implements OnInit {

  @Output() typeOrg = new EventEmitter();
  response = {type: 'TYPE_ORG', data: 0};
  private request: Request;

  public listData: any[];
  public color: any[];


  constructor(private _reporteService: ReporteService) {
    this.color = Types.CLAS_COLOR1;
  }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.request = {
      codigoUbigeo: '000000',
      tipoOrg: 0,
      autoridad: [],
      codigoOrg: 0,
      winner: 0,
      codPresentado: 0,
      ranking: 0,
    };
    this._reporteService.get_RL_ORGANIZACION(this.request)
    .subscribe((dataResponse: HttpResponse<any>) => {
      this.listData = dataResponse.body.data;
    });
  }

  selectOption(data) {
    this.response.data = data;
    this.typeOrg.emit(this.response);
  }

}
