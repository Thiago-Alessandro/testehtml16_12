var dataInicial = new date(document.getElementById(dataInicial).value);
dataInicial.setDate(dataInicial.getDate())
console.log(dataInicial.getDate())
var dataFinal = new date(document.getElementById(dataFinal).value);
var diferencaDatas;

function calcular(){

    diferencaDatas = dataFinal - dataInicial;
    alert(diferencaDatas);

    console.log(dataInicial);
console.log(dataFinal);
console.log(diferencaDatas);

}

console.log(dataInicial);
console.log(dataFinal);
console.log(diferencaDatas);