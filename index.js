do{
  resp = 'y'
  alc = prompt('Preço da Alcool: ')
  gas = prompt('Preço da Gasolina: ')

  result = alc/gas

    console.log("Resultado: " + result)
  
  if(result > 0.7){
    console.log('Vale a pena comprar Gasolina')
  }
  else if(result < 0.7){
    console.log('Vale a pena comprar Alcool')
  }
  else{
    console.log('Pode comprar qualquer um dos dois')
  }

    resp = prompt('Gostaria de executar o programa novamente(y/n): ')
    console.clear();
}while(resp != 'n');

console.log('Fim da execução do programa. Tenha um ótimo dia')
