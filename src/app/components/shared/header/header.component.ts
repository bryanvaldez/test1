import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    name: 'Header Base Project';

    public active: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router
        ) { }

    ngOnInit() {
        this.active = localStorage.getItem('isLoggedIn') === 'true';
        // this.active = sessionStorage.getItem('token');
    }

    logout() {
        sessionStorage.setItem('token', '');
        this.router.navigate(['login']);
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('token');
    }
    activeSession() {
        // return sessionStorage.getItem('token') !== '';
        return localStorage.getItem('isLoggedIn') === 'true';
    }


}
