import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { categoriaProduto, Produto } from '../../models/produtos.model';

@Component({
  imports: [RouterLink, CommonModule],
  selector: 'app-gerenciar-produtos',
  styleUrls: ['../painel.css', './gerenciar-produtos.css'],
  templateUrl: './gerenciar-produtos.html',
})
export class GerenciarProdutos {

  categorias = [
    categoriaProduto.PROTEINAS,
    categoriaProduto.CREATINA,
    categoriaProduto.PRE_TREINO,
    categoriaProduto.VITAMINAS,
    categoriaProduto.VESTIMENTAS,
    categoriaProduto.ACESSORIOS
  ];

  // dados de exemplo apenas para visualizar o layout
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'WHEY PROTEIN',
      descricao: 'Concentrado 900g',
      preco: 119.90,
      imagemUrl: '/assets/produtos/whey.png',
      maisVendido: true,
      categoria: categoriaProduto.PROTEINAS
    },
    {
      id: 2,
      nome: 'CREATINA',
      descricao: 'Monohidratada 300g',
      preco: 69.90,
      imagemUrl: '/assets/produtos/creatina.png',
      maisVendido: true,
      categoria: categoriaProduto.CREATINA
    },
    {
      id: 3,
      nome: 'PRÉ-TREINO',
      descricao: 'Insano 300g',
      preco: 89.90,
      imagemUrl: '/assets/produtos/pre-treino.png',
      maisVendido: true,
      categoria: categoriaProduto.PRE_TREINO
    },
    {
      id: 4,
      nome: 'BCAA',
      descricao: '120 cápsulas',
      preco: 49.90,
      imagemUrl: '/assets/produtos/bcaa.png',
      maisVendido: false,
      categoria: categoriaProduto.VITAMINAS
    },
    {
      id: 5,
      nome: 'CAMISETA DE TREINO CANALHAS',
      descricao: 'Tamanhos P, M, G e GG',
      preco: 49.90,
      imagemUrl: '/assets/produtos/camiseta.png',
      maisVendido: false,
      categoria: categoriaProduto.VESTIMENTAS
    },
    {
      id: 6,
      nome: 'GARRAFA CANALHAS',
      descricao: 'Coqueteleira de treino 700ml',
      preco: 19.90,
      imagemUrl: '/assets/produtos/garrafa.png',
      maisVendido: false,
      categoria: categoriaProduto.ACESSORIOS
    }
  ];

  maisVendidos = this.produtos.filter(p => p.maisVendido).length;

  cadastrar(evento: Event) {
    evento.preventDefault();
  }
}
