import { auth, firestore } from '../config/firebase';
import { validarCadastro } from '../utils/validaCadastro';
import { Usuario } from '../models/Usuario';

export async function handleRegister(dados: any) {
  const validacao = validarCadastro(dados);
  if (!validacao.sucesso) return validacao;

  try {
    const credenciais = await auth.createUserWithEmailAndPassword(dados.email, dados.senha);

    const usuario: Usuario = {
      email: dados.email,
      cpf: dados.cpf,
      dataNascimento: dados.dataNascimento,
      telefone: dados.telefone,
      criadoEm: new Date(),
    };

    await firestore.collection('usuarios').doc(credenciais.user?.uid).set(usuario);

    return { sucesso: true, mensagem: 'Conta criada com sucesso!' };
  } catch (erro: any) {
    return { sucesso: false, mensagem: erro.message };
  }
}
