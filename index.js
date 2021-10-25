//if encadeados 

var anoAtual = 2021

var anoNasc = parseInt(prompt('Informe ano de nascimento'))

var idade = anoAtual - anoNasc

if(idade >= 60){   
  alert('Você é Idos@')
}
else if(idade >=18){
 alert('Você é Adulto@')
}
else if(idade >=12){
  alert('Você é Adolescente')
}
else if(idade>0){
  alert('Você é Criança')
}
else{
  alert('Idade inválida')
}
