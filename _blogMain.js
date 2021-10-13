var prueba1; var prueba2; var prueba3; var prueba4; var prueba5;
let ourArray = [];
let ventasFX = [];
let sum = 0;
let upAbs;
let exPost;
//-------------------------------
function calcularG(){
prueba1 = document.getElementById('ventasMax1').value; prueba1 = Number(prueba1);
prueba2 = document.getElementById('ventasMax2').value; prueba2 = Number(prueba2);
prueba3 = document.getElementById('ventasMax3').value; prueba3 = Number(prueba3);
prueba4 = document.getElementById('ventasMax4').value; prueba4 = Number(prueba4);
prueba5 = document.getElementById('ventasMax5').value; prueba5 = Number(prueba5);
/*ourArray.push(prueba1);
ourArray.push(prueba2);
ourArray.push(prueba3);
ourArray.push(prueba4);
ourArray.push(prueba5);
console.log('ourArray');*/
//-------------------------------
var upVentas1 = prueba2 - prueba1;
var upVentas2 = prueba3 - prueba2;
var upVentas3 = prueba4 - prueba3;
var upVentas4 = prueba5 - prueba4;
ventasFX.push(upVentas1);
ventasFX.push(upVentas2);
ventasFX.push(upVentas3);
ventasFX.push(upVentas4);
console.log('ventasFX');
//-------------------------------
for (let i = 0; i<ventasFX.length; i++){
  sum += ventasFX[i];}
console.log(sum);
//-------------------------------
upAbs = sum/4;
//-------------------------------
exPost = prueba5;
  for (var i = 0; i <5; i++) {
    exPost+= upAbs;
  } /*console.log(exPost);
    console.log(exPost - upAbs);
    console.log(exPost - (upAbs*2));
    console.log(exPost-(upAbs*3));
    console.log(exPost-(upAbs*4));*/
    document.getElementById('ventasMax10').value= exPost;
    document.getElementById('ventasMax9').value= exPost - upAbs;
    document.getElementById('ventasMax8').value= exPost - (upAbs*2);
    document.getElementById('ventasMax7').value= exPost - (upAbs*3);
    document.getElementById('ventasMax6').value= exPost - (upAbs*4);
}
