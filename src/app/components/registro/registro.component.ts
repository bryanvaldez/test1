import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe( params => {
            // console.log(params);
        });
    }

    ngOnInit(): void {

    }
}
