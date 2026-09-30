import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './auth/login/login';
import { Cadastro } from './auth/cadastro/cadastro';
import { Produtos } from './pages/produtos/produtos';

export const routes: Routes = [
    { path:'', component:Home },
    { path:'login', component:Login },
    { path:'cadastro', component:Cadastro},
    { path:'produtos', component:Produtos}
];
