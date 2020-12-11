import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {
    path: "produto",
    component: ProdutoComponent
  },
  {
    path: "pessoa",
    component: PessoaComponent
  },
  {
    path: "pedido",
    component: PedidoComponent
  },
  {
    path: "cliente",
    component: ClienteComponent
  },
  {
    path: "home",
    component: HomeComponent
   },
  {
     path: '', redirectTo: '/home', pathMatch: 'full' 
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
