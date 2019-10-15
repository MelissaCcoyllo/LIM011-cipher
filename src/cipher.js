window.cipher = {
  encode: (string, offset) => {
  /* mensaje recibido */
  /* eslint radix: ["error", "as-needed"] */
  /* eslint max-len: ["error", { "ignoreComments": true }] */
    let resultado = '';
    let letra;
    for (let i = 0; i < string.length; i += 1) { /* bucle */
      const ascii = string.charCodeAt(i); /* que recorra las letras de acuerdo al bucle */
      if (ascii >= 65 && ascii <= 90) { /* si cumple rango de numeros en ascii para mayusculas */
        const cambialo = ((ascii - 65 + parseInt(offset)) % 26) + 65; /* formula para obtener mayusculas con offset */
        letra = String.fromCharCode(cambialo); /* que lo cambie a letra */
      } else if (ascii >= 97 && ascii <= 122) { /* si no es el primero entonces rango de numeros en ascii para minusculas */
        const cambialo = ((ascii - 97 + parseInt(offset)) % 26) + 97; /* formula para obtener minusculas con offset */
        letra = String.fromCharCode(cambialo); /* que lo cambie a letra */
      } else {
        letra = string[i]; /*  y si no cumple las dos primeras entonces es un caracter y no se considera cambio */
      }
      resultado += letra;
    } return resultado;
  },

  decode: (string, offset) => {
    /* mensaje recibido */
    let resultado2 = '';
    let letra2;
    for (let i = 0; i < string.length; i += 1) {
      const ascii2 = string.charCodeAt(i);
      if (ascii2 >= 65 && ascii2 <= 90) {
        const cambialo = ((ascii2 + 65 - parseInt(offset)) % 26) + 65;
        letra2 = String.fromCharCode(cambialo);
      } else if (ascii2 >= 97 && ascii2 <= 122) {
        const cambialo = ((ascii2 - 97 - parseInt(offset) + 52) % 26) + 97;
        letra2 = String.fromCharCode(cambialo);
      } else {
        letra2 = string[i];
      }
      resultado2  = resultado2 + letra2;
    } return resultado2;
  },
};
