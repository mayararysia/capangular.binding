import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'ecommercev2';
 
 
  mostrarMensagemSucesso(){
    alert("Sucesso no cadastro!");
  }
}
