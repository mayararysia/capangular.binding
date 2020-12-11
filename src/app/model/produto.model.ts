import { Categoria } from './categoria.model';
import { Fornecedor } from './fornecedor.model';

export interface Produto extends Fornecedor{
    nome?: string;
    preco?: number;
    codigo?: string;
    categoria?: Categoria;
}