interface UsuarioCadastro {
  email: string;
  senha: string;
  confirmarSenha: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
}

export function validarCadastro(dados: UsuarioCadastro) {
  const { email, senha, confirmarSenha, cpf, dataNascimento, telefone } = dados;

  if (!email || !senha || !confirmarSenha || !cpf || !dataNascimento || !telefone) {
    return { sucesso: false, mensagem: 'Preencha todos os campos.' };
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    return { sucesso: false, mensagem: 'Digite um e-mail válido.' };
  }

  const regexData = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regexData.test(dataNascimento)) {
    return { sucesso: false, mensagem: 'Data de nascimento inválida. Use o formato DD/MM/AAAA.' };
  }

  if (senha.length < 6) {
    return { sucesso: false, mensagem: 'A senha deve ter pelo menos 6 caracteres.' };
  }

  if (senha !== confirmarSenha) {
    return { sucesso: false, mensagem: 'As senhas não coincidem.' };
  }

  return { sucesso: true, mensagem: 'Validação concluída.' };
}