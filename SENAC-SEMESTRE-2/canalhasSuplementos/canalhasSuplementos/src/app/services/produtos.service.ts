import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Produto } from "../models/produtos.model";

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
            imagemUrl: '',
            maisVendido: true
        },
        {
            id: 2,
            nome: 'CREATINA',
            descricao: 'Monohidratada 300g',
            preco: 69.90,
            imagemUrl: '',
            maisVendido: true
        },
        {
            id: 3,
            nome: 'PRÉ-TREINO',
            descricao: 'Insano 300g',
            preco: 89.90,
            imagemUrl: '',
            maisVendido: true
        },
        {
            id: 4,
            nome: 'BCAA',
            descricao: '120 cápsulas',
            preco: 49.90,
            imagemUrl: '',
            maisVendido: true
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