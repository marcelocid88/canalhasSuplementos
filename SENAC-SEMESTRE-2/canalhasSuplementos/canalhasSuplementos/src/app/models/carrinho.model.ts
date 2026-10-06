import { Produto } from "./produtos.model";

//definir item do carrinho
export interface ItemCarrinho {
    produto: Produto;
    quantidade: number;
}
