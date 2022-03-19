import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticated: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.authenticated = localStorage.getItem('authenticated') == "true"? true: false;
    console.log("authenticated: ", this.authenticated);
  }

  logout() {
    console.log("Cerro sesion con exito")
    localStorage.removeItem('authenticated');
    this.router.navigate(['pages/home']);
    window.location.reload();
  }

}
