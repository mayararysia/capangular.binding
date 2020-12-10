import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Endereco } from './endereco';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.css']
})
export class EnderecoFormComponent implements OnInit {
  // @Input decorator : conseguimos expor uma propriedade (ex, nome) para um seletor (a tag html)
  @Input() rua: string = '';
  @Input() cep: string = '';
  @Input() estado: string = '';
  @Input() cidade: string = '';
  
  @Output() mostrarEventoEndereco = new EventEmitter();

  submeteu = false;

  endereco: Endereco = {
    rua: '', 
    cep: '', 
    estado: '', 
    cidade: ''
  }

  constructor() { }

  ngOnInit(): void {
    this.endereco.rua = this.rua;
    this.endereco.cep = this.cep;
    this.endereco.estado = this.estado;
    this.endereco.cidade = this.cidade;
  }

  submeterForm() { this.submeteu = true; }

  novoEndereco() {
    console.log("Clicou no botão de cadastrar endereço");
    console.log(this.endereco);
  }

  limparFormulario(){
    this.endereco.rua = '';
    this.endereco.cep = '';
    this.endereco.estado = '';
    this.endereco.cidade = '';
  }

  mostrarMensagem(){
    this.mostrarEventoEndereco.emit();
  }

}
