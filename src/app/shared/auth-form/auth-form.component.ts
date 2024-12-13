import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FORM } from '../../types/form.type';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
  imports: [CommonModule, RouterLink],
})
export class AuthFormComponent implements OnInit {
  type: FORM = 'login';

  ngOnInit(): void {
    this.type = window.location.pathname.split('/')[1] as FORM;
  }
}
