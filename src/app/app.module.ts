import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';
import { PessoaCreateComponent } from './pessoa-create/pessoa-create.component';
import { EnderecoFormComponent } from './endereco-form/endereco-form.component';
import { DescontoComponent } from './desconto/desconto.component';
import { ProdutoCreateComponent } from './produto-create/produto-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    PedidoFormComponent,
    PessoaCreateComponent,
    EnderecoFormComponent,
    DescontoComponent,
    ProdutoCreateComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
