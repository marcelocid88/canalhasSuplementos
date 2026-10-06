import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './auth/login/login';
import { Cadastro } from './auth/cadastro/cadastro';
import { Produtos } from './pages/produtos/produtos';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
    { path:'', component:Home },
    { path:'login', component:Login },
    { path:'cadastro', component:Cadastro},
    { path:'produtos', component:Produtos},
    { path:'cart', component:Cart}

];
