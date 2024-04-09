const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcImc = () => {
  if (altura.value !== '' && peso.value !== ''){
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)

let classification = ''
if(imc <18.5){
  classification = 'baixo do peso'
} else if (imc<25){
  classification = 'peso normal'
} else if (imc<30){
  classification='acima do peso'
}else if (imc<35){
  classification ='obesidade Grau 1'
}else if (imc<41){
  classification = 'obesidade Grau2'
}else{
  classification = 'obesidades Grau3'
}
resultado.innerHTML= `IMC: ${imc} (${classification})`

  }else{
         resultado.innerHtml = 'preencha todos os campos!'
  }
}