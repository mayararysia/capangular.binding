import { Produto } from './produto.model';

export class Pedido {

    constructor(
      public id?: number,
      public cliente?: string,
      public produto?: Produto,
      public freteTarifado?: boolean,
      public data?: string
    ) {  }
  
  }