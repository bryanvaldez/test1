import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Types } from 'src/app/constants/types.constant';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { CreateComponent } from 'src/app/components/modal/user/create/create.component';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  message: String = '';
  private user: User;


  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private _userService: UserService
    ) {
        if ( localStorage.getItem('isLoggedIn') === 'true') {
          this.router.navigate(['main']);
        }

     }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }
  login() {
    const url = 'http://localhost:8080/login';
    const data = {'userName': this.model.username, 'password': this.model.password};
    const hdrs = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post<HttpResponse<any>>(url, data, { headers: hdrs, observe: 'response'} )
    .subscribe(
      (dataResponse: HttpResponse<any>) => {
        console.log(dataResponse);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', dataResponse.headers.get('authorization'));
        sessionStorage.setItem('token', dataResponse.headers.get('authorization'));
        this.router.navigate(['usuarios']);
      },
      error => {
        if (error.status === 403) {
          this.message = 'Usuario y/o Clave incorrecta.';
        } else {
          this.message = 'Error de conexión';
        }
      }
    );
   }

   clean() {
      this.message = '';
   }

   iModal(type) {
    switch (type) {
      case Types.M_USER_CREATE:
          this.openDialog();
        break;
      case Types.M_PASS_FORGOT:
        break;
      case Types.M_PASS_CHANGE:
        break;
      case Types.M_CLOSE:
        break;
    }
   }

   openDialog(): void {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(dataRequest => {
      console.log(dataRequest);
      if (dataRequest) {
        this._userService.save(dataRequest).subscribe(dataResponse => {
          console.log(dataResponse);
        });
      }
    });
  }
}
