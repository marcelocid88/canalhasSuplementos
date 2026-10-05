//categorias dos produtos
export enum categoriaProduto {
    PROTEINAS = 'Proteínas',
    CREATINA = 'Creatina',
    PRE_TREINO = 'Pré-Treino',
    VITAMINAS = 'Vitaminas',
    VESTIMENTAS = 'Vestimentas',
    ACESSORIOS = 'Acessórios'
}

//definir dados do produto
export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagemUrl: string;
    maisVendido?: boolean;
    categoria: categoriaProduto;
}