import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/produtos.model';
import { ProdutosService } from '../../services/produtos.service';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { categoriaProduto } from '../../models/produtos.model';


@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-produtos',
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',
})
export class Produtos implements OnInit{

  categoriaSelecionada$ = new BehaviorSubject<string>('TODOS')

  produtosFiltrados$!: Observable<Produto[]>;

  categorias = [
    { label: 'Todos', valor: 'TODOS' },
    { label: 'Proteínas', valor: categoriaProduto.PROTEINAS },
    { label: 'Pré-Treino', valor: categoriaProduto.PRE_TREINO },
    { label: 'Creatina', valor: categoriaProduto.CREATINA },
    { label: 'Vitaminas', valor: categoriaProduto.VITAMINAS },
    { label: 'Vestimenta', valor: categoriaProduto.VESTIMENTAS },
    { label: 'Acessórios', valor: categoriaProduto.ACESSORIOS }
  ];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    const todosProdutos$ = this.produtosService.getProdutos();

    this.produtosFiltrados$ = combineLatest([todosProdutos$, this.categoriaSelecionada$]).pipe(
      map(([produtos, categoria]) => {
        if (categoria === 'TODOS') {
          return produtos;
        }
        return produtos.filter(p => p.categoria === categoria);
      })
    );
  }

  filtrarPorCategoria(categoria: string): void {
    this.categoriaSelecionada$.next(categoria);
  }
}