import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produto } from '../../models/produtos.model';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
}
