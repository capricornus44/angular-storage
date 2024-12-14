import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
})
export class AuthFormComponent implements OnInit {
  authForm!: FormGroup;
  isLoginMode: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.isLoginMode = this.router.url === '/login';
    this.initForm();
  }

  private initForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      ...(this.isLoginMode
        ? {}
        : {
            username: ['', [Validators.required, Validators.minLength(3)]],
          }),
    });
  }

  onSubmit(): void {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }

    const formData = this.authForm.value;
    if (this.isLoginMode) {
      console.log('Login data:', formData);
      // Handle login logic here
    } else {
      console.log('Register data:', formData);
      // Handle register logic here
    }
  }
}
