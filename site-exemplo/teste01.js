/*function criarAnimal(tipoDeAnimal, nomeDoAnimal, porte){
    return tipoDeAnimal = tipoDeAnimal,
           nomeDoAnimal = nomeDoAnimal,
           porte = porte;
}


function mediaAluno(array){
    var soma = 0;
    for (let i=0;i<array.length; i++){
        soma += array[i];
    }
    
    return soma / array.length;
}

const array = [70,70,80];


function asteriscos(linhas){
    let padrao = '';

    for (let i =0; i<linhas; i++){
        padrao += '*';
        console.log(padrao);
    }

}
*/

function exibirNumerosPrimos(limite){

    for (let numero = 2; numero <= limite; numero++ ){
        let primo = true;

        for (let divisor = 2; divisor < numero; divisor++){
              if(numero % divisor === 0 ){
                  primo = false;
                  break;
              }
        }

        if(primo) console.log(numero);
    }

}

 
