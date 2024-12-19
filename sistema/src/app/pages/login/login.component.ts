import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeseroService } from '../../services/mesero.service';
import { Login } from '../../models/login';
import { NgIf } from '@angular/common';

@Component({
  imports: [NgIf,ReactiveFormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: MeseroService, // Suponiendo que tienes un servicio para autenticación
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const usuario: Login = {email:this.loginForm.get('email')?.value, password:this.loginForm.get('password')?.value } ;

    // Llamar al servicio de autenticación
    this.authService.login(usuario).subscribe({
      next: (response:any) => {
        console.log('Login exitoso', response);
        // Redirigir al home o dashboard
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error al iniciar sesión', error);
        // Manejar el error, mostrar un mensaje al usuario si es necesario
      }
    });
  }
}
