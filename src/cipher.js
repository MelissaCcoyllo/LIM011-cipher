window.cipher = {
encode: (string, offset) => {
     //mensaje recibido
    let result= "";
     //inicio de recorrido de caracteres
    for (let i =0; i<string.length; i++){
         let asciiPosition= string[i];
         if (asciiPosition.match(/[a-z]/i)) {
         if (string.charCodeAt(i)>= 65 && string.charCodeAt(i) <= 90) {

         let text= (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
         result += String.fromCharCode(text);
     }
         else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          text = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
          result += String.fromCharCode(text); 
     }      
     } else {
          result += asciiPosition;
     }
 }   
    return result;
     },

decode: (string, offset) => {
     //mensaje recibido
      let result2= "";
     //inicio de recorrido de caracteres
     for (let i =0; i<string.length; i++){
          let asciiPosition2= string[i];
          if (asciiPosition2.match(/[a-z]/i)) {
          if (string.charCodeAt(i)>= 65 && string.charCodeAt(i) <= 90) {
 
          let text2= (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
          result2 += String.fromCharCode(text2);
      }
          else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          let text= ((string.charCodeAt(i) - 97 - parseInt(offset) + 52) % 26) + 97;
           result2 += String.fromCharCode(text); 
      }      
      } else {
           result2 += asciiPosition2;
      }
  }   
     return result2;
  }
}
