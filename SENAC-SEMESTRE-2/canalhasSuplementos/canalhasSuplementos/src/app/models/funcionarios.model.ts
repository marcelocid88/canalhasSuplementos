//cargos dos funcionários
export enum cargoFuncionario {
    VENDEDOR = 'Vendedor',
    ATENDENTE = 'Atendente',
    ESTOQUISTA = 'Estoquista',
    GERENTE = 'Gerente',
    ADMINISTRADOR = 'Administrador'
}

//setores dos funcionários
export enum setorFuncionario {
    VENDAS = 'Vendas',
    ATENDIMENTO = 'Atendimento',
    ESTOQUE_LOGISTICA = 'Estoque e Logística',
    FINANCEIRO = 'Financeiro',
    ADMINISTRACAO = 'Administração'
}

//definir dados do funcionário
export interface Funcionario {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    matricula: string;
    email: string;
    dataAdmissao: string;
    cargo: cargoFuncionario;
    setor: setorFuncionario;
}
