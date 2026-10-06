import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { categoriaProduto, Produto } from "../models/produtos.model";

@Injectable({
    providedIn: 'root'
})
export class ProdutosService{

    private produtos: Produto[] = [
        {
            id: 1,
            nome: 'WHEY PROTEIN',
            descricao: 'Concentrado 900g',
            preco: 119.90,
            imagemUrl: '/public/assets/produtos/whey.png',
            maisVendido: true,
            categoria: categoriaProduto.PROTEINAS
        },
        {
            id: 2,
            nome: 'CREATINA',
            descricao: 'Monohidratada 300g',
            preco: 69.90,
            imagemUrl: '',
            maisVendido: true,
            categoria: categoriaProduto.CREATINA
        },
        {
            id: 3,
            nome: 'PRÉ-TREINO',
            descricao: 'Insano 300g',
            preco: 89.90,
            imagemUrl: '',
            maisVendido: true,
            categoria: categoriaProduto.PRE_TREINO
        },
        {
            id: 4,
            nome: 'BCAA',
            descricao: '120 cápsulas',
            preco: 49.90,
            imagemUrl: '',
            maisVendido: true,
            categoria: categoriaProduto.VITAMINAS
        },
        {
            id: 5,
            nome: 'CAMISETA DE TREINO CANALHAS',
            descricao: 'Tamanhos P, M, G e GG',
            preco: 49.90,
            imagemUrl: '',
            maisVendido: false,
            categoria: categoriaProduto.VESTIMENTAS
        },
        {
            id: 5,
            nome: 'GARRAFA CANALHAS',
            descricao: 'Coqueteleira de treino 700ml',
            preco: 19.90,
            imagemUrl: '',
            maisVendido: false,
            categoria: categoriaProduto.ACESSORIOS
        }
    ];

    getProdutos(): Observable<Produto[]> {
        return of(this.produtos);
    }

    getMaisVendidos(): Observable<Produto[]> {
        const maisVendidos = this.produtos.filter(p => p.maisVendido);
        return of(maisVendidos);
    }

}