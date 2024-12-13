import axios from "axios";
import { IAssento, IOnibus } from "../@types";

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

//ENDPOINTS
const _ONIBUS = '/onibus';
const _ASSENTOS = '/assentos';

//ONIBUS
const getOnibus = (assento: IOnibus) => (api.get(`${_ASSENTOS}?onibus=${onibus.id}`));

//ASSENTOS
const fazerReserva = (assento: IAssento) => (api.post(_ASSENTOS, assento));
const getAssentosByOnibus =  (onibus: IOnibus) => (api.get(`${_ASSENTOS}?onibus=${onibus.id}`));

export {
    fazerReserva,
    getAssentosByOnibus
}