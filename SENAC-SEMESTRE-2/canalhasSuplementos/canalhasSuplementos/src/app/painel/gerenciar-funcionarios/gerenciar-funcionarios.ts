import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { cargoFuncionario, Funcionario, setorFuncionario } from '../../models/funcionarios.model';

@Component({
  imports: [RouterLink],
  selector: 'app-gerenciar-funcionarios',
  styleUrls: ['../painel.css', './gerenciar-funcionarios.css'],
  templateUrl: './gerenciar-funcionarios.html',
})
export class GerenciarFuncionarios {

  cargos = [
    cargoFuncionario.VENDEDOR,
    cargoFuncionario.ATENDENTE,
    cargoFuncionario.ESTOQUISTA,
    cargoFuncionario.GERENTE,
    cargoFuncionario.ADMINISTRADOR
  ];

  setores = [
    setorFuncionario.VENDAS,
    setorFuncionario.ATENDIMENTO,
    setorFuncionario.ESTOQUE_LOGISTICA,
    setorFuncionario.FINANCEIRO,
    setorFuncionario.ADMINISTRACAO
  ];

  // dados de exemplo apenas para visualizar o layout
  funcionarios: Funcionario[] = [
    {
      id: 1,
      nome: 'Carlos Henrique Souza',
      cpf: '111.222.333-01',
      telefone: '(11) 91234-0001',
      matricula: 'CS0001',
      email: 'carlos.souza@canalhas.com.br',
      dataAdmissao: '14/02/2022',
      cargo: cargoFuncionario.GERENTE,
      setor: setorFuncionario.ADMINISTRACAO
    },
    {
      id: 2,
      nome: 'Mariana Alves',
      cpf: '111.222.333-02',
      telefone: '(11) 91234-0002',
      matricula: 'CS0002',
      email: 'mariana.alves@canalhas.com.br',
      dataAdmissao: '02/05/2023',
      cargo: cargoFuncionario.VENDEDOR,
      setor: setorFuncionario.VENDAS
    },
    {
      id: 3,
      nome: 'Rafael Lima',
      cpf: '111.222.333-03',
      telefone: '(11) 91234-0003',
      matricula: 'CS0003',
      email: 'rafael.lima@canalhas.com.br',
      dataAdmissao: '18/09/2023',
      cargo: cargoFuncionario.ESTOQUISTA,
      setor: setorFuncionario.ESTOQUE_LOGISTICA
    },
    {
      id: 4,
      nome: 'Juliana Rocha',
      cpf: '111.222.333-04',
      telefone: '(11) 91234-0004',
      matricula: 'CS0004',
      email: 'juliana.rocha@canalhas.com.br',
      dataAdmissao: '08/01/2024',
      cargo: cargoFuncionario.ATENDENTE,
      setor: setorFuncionario.ATENDIMENTO
    },
    {
      id: 5,
      nome: 'Bruno Martins',
      cpf: '111.222.333-05',
      telefone: '(11) 91234-0005',
      matricula: 'CS0005',
      email: 'bruno.martins@canalhas.com.br',
      dataAdmissao: '10/03/2025',
      cargo: cargoFuncionario.ADMINISTRADOR,
      setor: setorFuncionario.FINANCEIRO
    }
  ];

  cadastrar(evento: Event) {
    evento.preventDefault();
  }
}
