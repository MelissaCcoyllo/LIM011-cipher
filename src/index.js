const btn= document.getElementById("btn"); 
const encode1= document.getElementById("encode1"); 
const decode1= document.getElementById("decode1"); 
const cifrar= document.getElementById("cifrar"); 
const salir= document.getElementById("salir"); 
const comienzo1= document.getElementById("comienzo1"); 
const descifrar= document.getElementById("descifrar"); 
const salir2= document.getElementById("salir2"); 
const comienzo2= document.getElementById("comienzo2"); 

bienvenida1.classList.remove("hide");
hello.classList.add("hide");
YesEncode.classList.add("hide");
answer.classList.add("hide");
YesDecode.classList.add("hide");
answer2.classList.add("hide");

btn.addEventListener("click", Function1);
encode1.addEventListener("click", Function2);
decode1.addEventListener("click", Function3);
cifrar.addEventListener("click", Function4);
salir.addEventListener("click", Function5);
comienzo1.addEventListener("click", Function6);
descifrar.addEventListener("click", Function7);
salir2.addEventListener("click", Function8);
comienzo2.addEventListener("click", Function9);

function Function1(){
bienvenida1.classList.add("hide");
hello.classList.remove("hide");
}
function Function2() {
 hello.classList.add("hide");
 YesEncode.classList.remove("hide");  
 } 
 function Function3() {
 hello.classList.add("hide");
 YesDecode.classList.remove("hide");      
 } 
 function Function4() {
 YesEncode.classList.add("hide");
 answer.classList.remove("hide");   
 }
 function Function5() {
 answer.classList.add("hide");
 bienvenida1.classList.remove("hide");    
 }
 function Function6() {
 answer.classList.add("hide");
 hello.classList.remove("hide");    
 }
 function Function7() {
 YesDecode.classList.add("hide");
 answer2.classList.remove("hide");    
 }
 function Function8() {
 answer2.classList.add("hide");
 bienvenida1.classList.remove("hide");    
 }
 function Function9() {
 answer2.classList.add("hide");
 hello.classList.remove("hide");    
 }