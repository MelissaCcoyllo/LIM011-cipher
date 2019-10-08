window.cipher = {
  encode: (string, offset) => {
  /* mensaje recibido */
    let result = ''
    /* inicio de recorrido de caracteres */
    for (let i = 0; i < string.length; i++) {
      const asciiPosition = string[i]
      /* Busqueda indistinta a minusculas o mayusculas /[]/expresion regular */
      if (asciiPosition.match(/[a-z]/i)) {
        /* condicion para cifrar en mayusculas */
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          /* obtener el numero ASCII con formula */
          const text = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65
          /* convertir el numero ASCII a letra */
          result += String.fromCharCode(text)
        }
      } else {
        result += asciiPosition
      }
    }
    return result
  },

  decode: (string, offset) => {
    /* mensaje recibido */
    let result2 = ''
    /* inicio de recorrido de caracteres */
    for (let i = 0; i < string.length; i++) {
      const asciiPosition2 = string[i]
      /* Busqueda indistinta a minusculas o mayusculas */
      if (asciiPosition2.match(/[a-z]/i)) {
        /* condicion para descifrar en mayusculas */
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          /* obtener el numero ASCII con formula */
          const text2 = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65
          /* convertir el numero ASCII a letra */
          result2 += String.fromCharCode(text2)
        }
      } else {
        result2 += asciiPosition2
      }
    }
    return result2
  }
}
