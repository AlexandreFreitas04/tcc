import { auth, firestore } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { validarCadastro } from '../utils/validaCadastro';

export async function handleRegister(dados: any) {
  interface UsuarioCadastro {
    email: string;
    senha?: string;
    confirmarSenha?: string;
    cpf: string;
    dataNascimento: string;
    telefone: string;
    criadoEm: Date;
  }

  const validacao = validarCadastro(dados);
  if (!validacao.sucesso) return validacao;

  try {
    const credenciais = await createUserWithEmailAndPassword(auth, dados.email, dados.senha);

    const usuario: UsuarioCadastro = {
      email: dados.email,
      cpf: dados.cpf,
      dataNascimento: dados.dataNascimento,
      telefone: dados.telefone,
      criadoEm: new Date(),
    };

    await setDoc(doc(firestore, 'usuarios', credenciais.user.uid), usuario);

    return { sucesso: true, mensagem: 'Conta criada com sucesso!' };
  } catch (erro: any) {
    console.error('Erro ao registrar usuário:', erro);
    return { sucesso: false, mensagem: erro.message };
  }
}
