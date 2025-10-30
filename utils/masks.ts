export const maskCPF = (value: string) => {
  const numeros = value.replace(/[^0-9]/g, '');
  
  return numeros
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d)/, '$1.$2') 
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
};

export const maskTelefone = (value: string) => {
  const numeros = value.replace(/[^0-9]/g, ''); 
  
  if (numeros.length > 2) {
    return numeros
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{1,4})$/, '$1-$2');
  }
  
  return numeros.replace(/(\d{2})(\d)/, '($1) $2');
};