import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  token!: string

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('token') !== undefined){
      this.token = localStorage.getItem('token')!.toString() //! EL LOCAL STORAGE GUARDA A PESAR DE RECARGAR
    }
    else {
      this.token = "no hay token"
    }
  }

}
