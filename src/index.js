const btn = document.getElementById('btn')
const encode1 = document.getElementById('encode1')
const decode1 = document.getElementById('decode1')
const cifrar = document.getElementById('cifrar')
const salir = document.getElementById('salir')
const comienzo1 = document.getElementById('comienzo1')
const descifrar = document.getElementById('descifrar')
const salir2 = document.getElementById('salir2')
const comienzo2 = document.getElementById('comienzo2')

btn.addEventListener('click', () => {
  bienvenida1.classList.add('hide')
  hello.classList.remove('hide')
})
encode1.addEventListener('click', () => {
  hello.classList.add('hide')
  YesEncode.classList.remove('hide')
})
decode1.addEventListener('click', () => {
  hello.classList.add('hide')
  YesDecode.classList.remove('hide')
})
cifrar.addEventListener('click', () => {
  YesEncode.classList.add('hide')
  answer.classList.remove('hide')
  /* rescatando el valor del texto a codificar */
  const texto1 = document.getElementById('texto1').value
  const offset3 = document.getElementById('offset3').value
  document.getElementById('msj-encode').innerHTML = window.cipher.encode(texto1, offset3)
})
salir.addEventListener('click', () => {
  answer.classList.add('hide')
  bienvenida1.classList.remove('hide')
})
comienzo1.addEventListener('click', () => {
  answer.classList.add('hide')
  hello.classList.remove('hide')
})
descifrar.addEventListener('click', () => {
  YesDecode.classList.add('hide')
  answer2.classList.remove('hide')
  /* rescatando el valor del texto a decodificar */
  const text2 = document.getElementById('texto2').value
  const offset2 = document.getElementById('offset2').value
  document.getElementById('msj-decode').innerHTML = window.cipher.decode(text2, offset2)
})
salir2.addEventListener('click', () => {
  answer2.classList.add('hide')
  bienvenida1.classList.remove('hide')
})
comienzo2.addEventListener('click', () => {
  answer2.classList.add('hide')
  hello.classList.remove('hide')
})
