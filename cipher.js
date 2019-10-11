window.cipher = {
  encode: (string, offset) => {
  /* mensaje recibido */
  /* eslint radix: ["error", "as-needed"] */
  /* eslint max-len: ["error", { "ignoreComments": true }] */
    let resultado = '';
    let letra;
    for (let i = 0; i < string.length; i += 1) {
      const ascii = string.charCodeAt(i); /* que me devuelva el numero que cuenta con el bucle */
      if (ascii >= 65 && ascii <= 90) { /* regla de ese numero desde hasta */
        const cambialo = ((ascii - 65 + parseInt(offset)) % 26) + 65; /* formula para obtener mayusculas */
        letra = String.fromCharCode(cambialo); /* que lo cambie a letra */
      } else if (ascii >= 97 && ascii <= 122) {
        const cambialo = ((ascii - 97 + parseInt(offset)) % 26) + 97; /* formula para obtener minusculas */
        letra = String.fromCharCode(cambialo); /* que lo cambie a letra */
      } else {
        letra = string[i]; /* que no considere caracteres */
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
      resultado2 += letra2;
    } return resultado2;
  },
};
