import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Produto } from "../models/produtos.model";
import { ItemCarrinho } from "../models/carrinho.model";

@Injectable({
    providedIn: 'root'
})
export class CarrinhoService{

    private itens: ItemCarrinho[] = [];

    getItens(): Observable<ItemCarrinho[]> {
        return of(this.itens);
    }

    //se o produto já está no carrinho soma 1 na quantidade, senão adiciona
    adicionarAoCarrinho(produto: Produto): void {
        const item = this.itens.find(i => i.produto.id === produto.id);

        if (item) {
            item.quantidade++;
        } else {
            this.itens.push({ produto: produto, quantidade: 1 });
        }
    }

    //tira o produto do carrinho, independente da quantidade
    retirarDoCarrinho(produto: Produto): void {
        const posicao = this.itens.findIndex(i => i.produto.id === produto.id);

        if (posicao !== -1) {
            this.itens.splice(posicao, 1);
        }
    }

}
