import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pessoa } from './../model/pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})

export class PessoaComponent implements OnInit {
  // @Input decorator :conseguimos expor uma propriedade (ex, nome) para um seletor (a tag html)
  @Input() nome: string = '';
  @Input() cpf: string = '';
  
  @Output() mostrarEvento = new EventEmitter();

  submeteu = false;

  pessoa: Pessoa = {
    nome: '', 
    cpf: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.pessoa.nome = this.nome;
    this.pessoa.cpf = this.cpf;
  }

  submeterForm() { this.submeteu = true; }

  novaPessoa() {
    console.log("Clicou no botão de cadastrar pessoa");
    console.log(this.pessoa);
  }

  limparFormulario(){
    this.pessoa.nome = '';
    this.pessoa.cpf = '';
  }

  mostrarMensagem(){
    this.mostrarEvento.emit();
  }
}
