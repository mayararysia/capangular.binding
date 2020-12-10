import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Desconto } from './desconto';

@Component({
  selector: 'app-desconto',
  templateUrl: './desconto.component.html',
  styleUrls: ['./desconto.component.css']
})
export class DescontoComponent implements OnInit {
   // @Input decorator : conseguimos expor uma propriedade (ex, nome) para um seletor (a tag html)
   @Input() porcentagem: 0;
   @Input() categoria: string;
   @Input() codigoDesconto: string;
   
   @Output() mostrarEventoDesconto = new EventEmitter();
 
   submeteu = false;
 
  desconto: Desconto = {
    porcentagem: 0,
    categoria: '',
    codigoDesconto: ''
  }
  constructor() { }

  ngOnInit(): void {
    this.desconto.porcentagem = this.porcentagem;
    this.desconto.categoria = this.categoria;
    this.desconto.codigoDesconto = this.codigoDesconto;
  }

  submeterForm() { this.submeteu = true; }

  novoDesconto() {
    console.log("Clicou no botão de cadastrar desconto");
    console.log(this.desconto);
  }

  limparFormulario(){
    this.desconto.porcentagem = 0;
    this.desconto.categoria = '';
    this.desconto.codigoDesconto = '';
  }

  mostrarMensagem(){
    this.mostrarEventoDesconto.emit();
  }

}
