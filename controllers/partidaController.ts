import { auth, firestore } from '../config/firebase';
import { collection, addDoc, Timestamp, query, where, getDocs } from 'firebase/firestore';

interface Partida {
  nome: string;
  local: string;
  data: string;
  hora: string;
  piso: string;
  vagasJogadores: number;
  vagasGoleiros: number;
  nivel: string;
  valor: string;
  observacoes: string;
  criadoEm: Date;
}

export async function criarPartida(partida: Partida) {
  try {
    const usuario = auth.currentUser;
    if (!usuario) {
      return { sucesso: false, mensagem: 'Usuário não autenticado.' };
    }

    if (!partida.nome || !partida.local || !partida.data || !partida.hora) {
      return { sucesso: false, mensagem: 'Preencha todos os campos obrigatórios.' };
    }

    const dadosPartida = {
      ...partida,
      uidCriador: usuario.uid,
      criadoEm: Timestamp.fromDate(partida.criadoEm),
    };

    const docRef = await addDoc(collection(firestore, 'partidas'), dadosPartida);
    console.log('✅ Partida criada com ID:', docRef.id);
    return { sucesso: true, mensagem: 'Partida criada com sucesso!' };
  } catch (erro: any) {
    console.error('❌ Erro ao salvar partida:', erro);
    let mensagemErro = 'Erro ao salvar a partida.';
    if (erro.code === 'permission-denied') {
      mensagemErro = 'Sem permissão para gravar no Firestore. Verifique as regras do banco.';
    } else if (erro.code === 'unavailable') {
      mensagemErro = 'Servidor indisponível. Tente novamente.';
    } else if (erro.message) {
      mensagemErro = erro.message;
    }
    return { sucesso: false, mensagem: mensagemErro };
  }
}

export async function listarMinhasPartidas() {
  try {
    const usuario = auth.currentUser;
    if (!usuario) {
      return { sucesso: false, partidas: [], mensagem: 'Usuário não autenticado.' };
    }

    const q = query(collection(firestore, 'partidas'), where('uidCriador', '==', usuario.uid));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return { sucesso: true, partidas: [] };
    }

    const partidas = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return { sucesso: true, partidas };
  } catch (erro: any) {
    console.error('❌ Erro ao listar partidas:', erro);
    return { sucesso: false, partidas: [], mensagem: erro.message || 'Erro ao buscar partidas.' };
  }
}
