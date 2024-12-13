import { Component } from '@angular/core';
import { AuthSidebarComponent } from '../auth-sidebar/auth-sidebar.component';

@Component({
  selector: 'auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
  imports: [AuthSidebarComponent],
})
export class AuthLayoutComponent {}
