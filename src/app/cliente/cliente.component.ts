import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';
import { Cliente } from './../model/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  title: string = "E-commerce - Formulário Cadastro de Cliente";
  submeteu = false;

  @Output() mostrarEventoCliente = new EventEmitter();

  mock_pessoas: Pessoa[] = [
    { cpf: '1', nome: "John" },
    { cpf: '2', nome: "Mary" },
    { cpf: '3', nome: "Sophie" },
    { cpf: '4', nome: "Susan" },
    { cpf: '5', nome: "Michel" }
  ];

  cliente: Cliente = {
    senha: '',
    usuario: '',
    nome: this.mock_pessoas[0].nome,
    cpf: ''
  }
   constructor() { }

  ngOnInit(): void {
  }

  submeterForm() { this.submeteu = true; }

  novoCliente() {
    console.log("Clicou no botão de cadastrar cliente");
    console.log(this.cliente);
  }

  limparFormulario(){
    this.cliente.nome = '';
    this.cliente.cpf = '';
    this.cliente.usuario = '';
    this.cliente.senha = '';
  }

  mostrarMensagem(){
    this.mostrarEventoCliente.emit();
  }

}
