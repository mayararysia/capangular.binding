import { Component } from '@angular/core';

import { Pedido } from './pedido';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent {
  
  produtos = ['Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E'];

  model = new Pedido(1, 'Hermione Granger', this.produtos[0], false, '09/12/2020');

  submitted = false;

  informativoAliquota: string = "Esse produto tem uma Alíquota de 8%";

  constructor(){}

  onSubmit() { this.submitted = true; }

  newPedido() {
    this.model = new Pedido(3, '', '', false, '');
  }
}