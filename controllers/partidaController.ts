import { auth, firestore } from '../config/firebase';
import { collection, addDoc, Timestamp, getDocs, getDoc, doc, updateDoc, deleteDoc, query, where, orderBy, arrayUnion,
  arrayRemove, increment
} from 'firebase/firestore';

export async function criarPartida(dadosForm: any, usuarioLogado: { uid: string; nome: string }) {
  
  try{
    const [dia, mes, ano] = dadosForm.data.split('/').map(Number);
    const [hora, minuto] = dadosForm.hora.split(':').map(Number);
    const dataHoraObjeto = new Date(ano, mes - 1, dia, hora, minuto);

    const novaPartida = {
      criadorId: usuarioLogado.uid,
      nomeCriador: usuarioLogado.nome,
      nome: dadosForm.nome,
      modalidade: dadosForm.modalidade,
      dataHora: Timestamp.fromDate(dataHoraObjeto),
      local: dadosForm.local,
      piso: dadosForm.piso,
      nivel: dadosForm.nivel,
      valor: Number(String(dadosForm.valor).replace(',', '.')) || 0,
      vagasJogadores: Number(dadosForm.vagasJogadores) || 0,
      vagasGoleiros: Number(dadosForm.vagasGoleiros) || 0,
      vagasOcupadas: 1,
      observacoes: dadosForm.observacoes || '',
      status: 'aberta',
      jogadoresConfirmados: [
        {
          uid: usuarioLogado.uid,
          nome: usuarioLogado.nome,
          confirmadoEm: Timestamp.now()
        }
      ],
      criadoEm: Timestamp.now()
    }
      const docRef = await addDoc(collection(firestore, 'partidas'), novaPartida);

      return { sucesso: true, id: docRef.id, mensagem: 'Partida criada com sucesso!' };
  } catch (erro: any) {
    console.error('Erro ao criar partida:', erro);
    return { sucesso: false, mensagem: erro.message || 'Erro ao criar partida.' };
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

export async function excluirPartida(id: string) {
  try {
    const usuario = auth.currentUser;
    if (!usuario) {
      return { sucesso: false, mensagem: 'Usuário não autenticado.' };
    }

    const partidaDocRef = doc(firestore, 'partidas', id);
    await deleteDoc(partidaDocRef);

    return { sucesso: true, mensagem: 'Partida excluída com sucesso!' };
  } catch (erro: any) {
    console.error('❌ Erro ao excluir partida:', erro);
    return { sucesso: false, mensagem: erro.message || 'Erro ao excluir partida.' };
  }
}

export async function buscarPartidaPorId(id: string) {
  try {
    const usuario = auth.currentUser;
    if (!usuario) {
      return { sucesso: false, mensagem: 'Usuário não autenticado.' };
    }
    
    const partidaDocRef = doc(firestore, 'partidas', id);
    const docSnap = await getDoc(partidaDocRef);

    if (docSnap.exists()) {
      // Opcional: Verificar se o usuário é o dono
      if (docSnap.data().uidCriador !== usuario.uid) {
         return { sucesso: false, mensagem: 'Você não tem permissão para editar esta partida.' };
      }
      return { sucesso: true, partida: docSnap.data() };
    } else {
      return { sucesso: false, mensagem: 'Partida não encontrada.' };
    }
  } catch (erro: any) {
    console.error('❌ Erro ao buscar partida:', erro);
    return { sucesso: false, mensagem: erro.message || 'Erro ao buscar dados da partida.' };
  }
}

export async function atualizarPartida(id: string, dados: any) {
  try {
    const usuario = auth.currentUser;
    if (!usuario) {
      return { sucesso: false, mensagem: 'Usuário não autenticado.' };
    }
    
    const partidaDocRef = doc(firestore, 'partidas', id);

    // O 'dados' vem da tela, não incluímos 'criadoEm' ou 'uidCriador'
    // para não sobrescrever os dados originais.
    await updateDoc(partidaDocRef, {
      ...dados
    });

    return { sucesso: true, mensagem: 'Partida atualizada com sucesso!' };
  } catch (erro: any) {
    console.error('❌ Erro ao atualizar partida:', erro);
    return { sucesso: false, mensagem: erro.message || 'Erro ao salvar alterações.' };
  }
}