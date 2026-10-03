import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-login-colaborador',
  styleUrls: ['../auth.css', './login-colaborador.css'],
  templateUrl: './login-colaborador.html',
})
export class LoginColaborador {
  constructor(private router: Router) {}

  entrar(evento: Event) {
    evento.preventDefault();
    this.router.navigate(['/']);
  }
}
