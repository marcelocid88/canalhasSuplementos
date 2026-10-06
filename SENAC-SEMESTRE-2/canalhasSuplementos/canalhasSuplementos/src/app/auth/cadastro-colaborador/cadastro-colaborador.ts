import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-cadastro-colaborador',
  styleUrls: ['../auth.css', './cadastro-colaborador.css'],
  templateUrl: './cadastro-colaborador.html',
})
export class CadastroColaborador {
  constructor(private router: Router) {}

  cadastrar(evento: Event) {
    evento.preventDefault();
    this.router.navigate(['/colaborador/login']);
  }
}
