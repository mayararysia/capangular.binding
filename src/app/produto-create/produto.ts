import { Categoria } from '../categoria-form/categoria';
import { Fornecedor } from '../fornecedor-form/fornecedor';

export interface Produto extends Fornecedor{
    nome?: string;
    preco?: number;
    codigo?: string;
    categoria?: Categoria;
}