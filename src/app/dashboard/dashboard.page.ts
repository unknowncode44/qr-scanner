import { Component, OnInit } from '@angular/core';
import { QrScannerService } from '../services/qr-scanner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  token!: string

  constructor(private api: QrScannerService, private router: Router) { }

  ngOnInit() {
    this.getUser
  }

  //* Obtenemos los datos y manejamos los errores
  getUser() {
    this.api.getUsers().subscribe({
      next: data => { console.log(data) },
      error: err => { console.log(err.error.msg, err.statusText, err.ok) }
    })
  }

}
