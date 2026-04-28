export const validarCPF = (cpf: string): boolean => {
  if (!cpf) return false;

  const cpfLimpo = cpf.replace(/\D/g, "");

  if (cpfLimpo.length !== 11) return false;

  if (/^(\d)\1{10}$/.test(cpfLimpo)) return false;

  const calcularDigito = (digitos: string): number => {
    let soma = 0;
    let peso = digitos.length + 1;

    for (let i = 0; i < digitos.length; i++) {
      soma += parseInt(digitos[i]) * peso;
      peso--;
    }

    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const digito1 = calcularDigito(cpfLimpo.substring(0, 9));
  if (digito1 !== parseInt(cpfLimpo[9])) return false;

  const digito2 = calcularDigito(cpfLimpo.substring(0, 10));
  if (digito2 !== parseInt(cpfLimpo[10])) return false;

  return true;
};
