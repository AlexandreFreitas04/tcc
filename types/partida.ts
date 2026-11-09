import { Timestamp } from "firebase/firestore";

export interface JogadorConfirmado {
    uid: string;
    nome: string;
    confirmadoEm: Timestamp;
}

export interface Partida {
id?: string;
criadorId: string;
nomeCriador: string;
nome: string;
modalidade: string;
dataHora: Timestamp;
local: string;
piso: string; //sintetico, grama, areia
nivel: string; //amador, iniciante, competitivo
valor: number;
vagasJogadores: number;
vagasGoleiros: number;
observacoes?: string;
jogadoresConfirmados: JogadorConfirmado[];
criadoEm: Timestamp;
status: 'aberta' | 'finalizada' | 'cancelada' | 'lotada';
}