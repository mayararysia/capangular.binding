import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from '../categoria-form/categoria';
import { Produto } from './produto';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})

export class ProdutoCreateComponent implements OnInit {
  // @Input decorator :conseguimos expor uma propriedade (ex, nome) para um seletor (a tag html)
  @Input() nome: string = '';
  @Input() preco: number = 0.0;
  @Input() codigo: string = '';
  @Input() categoria: Categoria = { 
    nome: '',
    codigoCategoria: ''
  };

  
  @Output() mostrarEventoProduto = new EventEmitter();

  submeteu = false;

  produto: Produto = {
    nome: '',
    preco: 0.0,
    codigo: '',
    categoria: {
      nome: '',
      codigoCategoria: ''
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.produto.nome = this.nome;
    this.produto.preco = this.preco;
    this.produto.codigo = this.codigo;
    this.produto.categoria = this.categoria
  }

  submeterForm() { this.submeteu = true; }

  novoProduto() {
    console.log("Clicou no botão de cadastrar produto");
    console.log(this.produto);
  }

  limparFormulario(){
    this.produto.nome = '';
    this.produto.preco = 0.0;
    this.produto.codigo = '';
    this.produto.categoria = { nome: '', codigoCategoria: ''};
  }

  mostrarMensagem(){
    this.mostrarEventoProduto.emit();
  }
}
