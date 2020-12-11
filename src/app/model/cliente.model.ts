import { Pessoa } from './pessoa.model';

export interface Cliente extends Pessoa{
    senha?: string;
    usuario?: string;
}