import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <header>
        <h1>Bienvenido al Dashboard</h1>
      </header>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Proyectos</li>
          <li>Tareas</li>
          <li>Perfil</li>
        </ul>
      </nav>
      <main>
        <h2>Resumen</h2>
        <p>Aquí puedes ver un resumen de tus actividades recientes.</p>
        <div class="summary">
          <div class="summary-item">
            <h3>Proyectos Activos</h3>
            <p>5</p>
          </div>
          <div class="summary-item">
            <h3>Tareas Pendientes</h3>
            <p>12</p>
          </div>
          <div class="summary-item">
            <h3>Mensajes Nuevos</h3>
            <p>3</p>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .dashboard {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    header {
      background-color: #007bff;
      color: white;
      padding: 10px;
      text-align: center;
    }
    nav ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      justify-content: space-around;
      background-color: #f8f9fa;
      margin-top: 0;
    }
    nav li {
      padding: 10px;
      cursor: pointer;
    }
    nav li:hover {
      background-color: #e9ecef;
    }
    main {
      margin-top: 20px;
    }
    .summary {
      display: flex;
      justify-content: space-between;
    }
    .summary-item {
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 4px;
      padding: 10px;
      text-align: center;
      width: 30%;
    }
    .summary-item h3 {
      margin-top: 0;
    }
  `]
})
class DashboardComponent {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, DashboardComponent],
  template: `
    <div *ngIf="!isLoggedIn" class="login-container">
      <h1>Iniciar Sesión</h1>
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input type="text" id="username" name="username" [(ngModel)]="username" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" [(ngModel)]="password" required>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
    <app-dashboard *ngIf="isLoggedIn"></app-dashboard>
  `,
  styles: [`
    .login-container {
      max-width: 300px;
      margin: 50px auto;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      background-color: #f9f9f9;
    }
    h1 {
      text-align: center;
      color: #333;
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      color: #666;
    }
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class App {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  onSubmit() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    // Aquí puedes agregar la lógica de autenticación
    this.isLoggedIn = true; // Simulamos un inicio de sesión exitoso
  }
}

bootstrapApplication(App);