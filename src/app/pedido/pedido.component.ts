import { Component } from '@angular/core';
import { Cliente } from '../model/cliente.model';

import { Pedido } from '../model/pedido.model';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  mock_produtos: Produto[] = [
    {  
      nome: 'Celular',
      preco: 400,
      codigo: 'C',
      categoria: {
        nome: 'tecnologia',
        codigoCategoria: 'Tec'
      }
    },
    {  
      nome: 'Computador',
      preco: 5000,
      codigo: 'CC',
      categoria: {
        nome: 'tecnologia',
        codigoCategoria: 'Tec'
      }
    },
    {  
      nome: 'Barra de Chocolate Cacau Show',
      preco: 20,
      codigo: 'BC',
      categoria: {
        nome: 'alimentos',
        codigoCategoria: 'Al'
      }
    },
  ];

  mock_clientes: Cliente[] = [
    { cpf: '1', nome: "John", usuario: 'J', senha: 'jj' },
    { cpf: '2', nome: "Mary", usuario: 'm', senha: 'x'},
    { cpf: '3', nome: "Sophie", usuario: 's', senha: 'y'},
    { cpf: '4', nome: "Susan", usuario: 's', senha: 'z'},
    { cpf: '5', nome: "Michel", usuario: 'm', senha: 'd'}
  ];

  public listaProdutos?:Array<Produto>;
  private TAXA_ALIQUOTA = 0.08;
  private TAXA_FRETE = 0.15;
  
  pedido = new Pedido(1, this.mock_clientes[0].nome , this.mock_produtos[0], false, '09/12/2020');
  precoTotal: number = 0;
  submitted = false;

  informativoAliquota: string = "Esse produto tem uma Alíquota de 8%";

  constructor(){}

  onSubmit() { this.submitted = true; }

  newPedido() {
    this.pedido = new Pedido(3, '', {}, false, '');
  }

  obterValorTotalPedidoListaProdutos(): number {
    const handler = (acumulador, produto:Produto) => acumulador + produto.preco;
    const totalSemImposto = this.listaProdutos.reduce(handler, 0);
    const totalComAliquota = totalSemImposto * (1 + this.TAXA_ALIQUOTA);
    let total = totalComAliquota;

    if(this.pedido.freteTarifado){
        total = totalComAliquota * (1 + this.TAXA_FRETE);
    }
    return total;
  }

  obterValorTotalPedidoProduto(): number {
    const totalComAliquota = this.pedido.produto.preco * (1 + this.TAXA_ALIQUOTA);
    let total = totalComAliquota;

    if(this.pedido.freteTarifado){
        total = totalComAliquota * (1 + this.TAXA_FRETE);
    }
    return total;
  }

  calcularPrecoTotalPedido(){
    this.precoTotal = this.obterValorTotalPedidoProduto();
  }
}