import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './auth/login/login';
import { Cadastro } from './auth/cadastro/cadastro';
import { Produtos } from './pages/produtos/produtos';
import { LoginColaborador } from './auth/login-colaborador/login-colaborador';
import { CadastroColaborador } from './auth/cadastro-colaborador/cadastro-colaborador';
import { Cart } from './pages/cart/cart';
import { GerenciarProdutos } from './painel/gerenciar-produtos/gerenciar-produtos';
import { GerenciarFuncionarios } from './painel/gerenciar-funcionarios/gerenciar-funcionarios';

export const routes: Routes = [
    { path:'', component:Home },
    { path:'login', component:Login },
    { path:'cadastro', component:Cadastro},
    { path:'colaborador/login', component:LoginColaborador },
    { path:'colaborador/cadastro', component:CadastroColaborador },
    { path:'colaborador/produtos', component:GerenciarProdutos },
    { path:'colaborador/funcionarios', component:GerenciarFuncionarios },
    { path:'produtos', component:Produtos},
    { path:'cart', component:Cart}

];
