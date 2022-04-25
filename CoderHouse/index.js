const frase =[];
let salir = false;
do
{
  let pregunta = prompt("Ingrese S/N si ingresar una palabra");
  if (pregunta == "S" || pregunta == "s"){
let ingresada=prompt();
frase.push( ingresada); }
if (pregunta == "N" || pregunta == "n")
{
  salir=true;
}
}while(!salir)
for(let i = 0 ; i < frase.length;i++)
{
  console.log( frase[i]+ " ")
}