import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  manterConectado: boolean = false;

  ngOnInit(): void {
    // const manterConectado = localStorage.getItem('manterConectado');
    // if (manterConectado === 'true') {
    //   window.location.href = 'https://teddy-app-flax.vercel.app/';
    // }
  }

  onCheckboxChange(event: MatCheckboxChange): void {
    this.manterConectado = event.checked;
  }

  login() {
    localStorage.setItem(
      'manterConectado',
      this.manterConectado ? 'true' : 'false'
    );
    window.location.href = 'https://teddy-iqdokcn6o-cfads-projects.vercel.app/';
  }
}
