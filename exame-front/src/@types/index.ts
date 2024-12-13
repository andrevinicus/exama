export interface IAssento{
    id: number;
    numero: number;
    onibus: Onibus;
    passageiro: string;
}
export interface IOnibus{
    id: number;
    nomeCompleto: string;
}