import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Produto } from '../../models/produtos.model';
import { ItemCarrinho } from '../../models/carrinho.model';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  imports: [RouterLink, CommonModule],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart implements OnInit {

  itens: ItemCarrinho[] = [];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.carrinhoService.getItens().subscribe({
      next: (dados) => {
        this.itens = dados;
      },
      error: (err) => console.error('Erro ao carregar carrinho:', err)
    });
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.carrinhoService.adicionarAoCarrinho(produto);
  }

  retirarDoCarrinho(produto: Produto): void {
    this.carrinhoService.retirarDoCarrinho(produto);
  }

  calcularTotal(): number {
    let total = 0;

    for (const item of this.itens) {
      total += item.produto.preco * item.quantidade;
    }

    return total;
  }
}
