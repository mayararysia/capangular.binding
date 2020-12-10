export class Pedido {

    constructor(
      public id: number,
      public cliente: string,
      public produto: string,
      public freteTarifado: boolean,
      public data?: string
    ) {  }
  
  }