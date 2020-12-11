import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'E-commerce';
 
 
  mostrarMensagemSucesso(){
    alert("Sucesso no cadastro!");
  }
}
