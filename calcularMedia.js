let nome = window.prompt("Qual é o seu nome: ")
let n1 = Number(window.prompt("Nota 1"))
let n2 = Number(window.prompt("Nota 2"))
let n3 = Number(window.prompt("Nota 3"))
let n4 = Number(window.prompt("Nota 4"))
let media = (n1+n2+n3+n4)/4
if(media >= 7 ){
	document.getElementById('situacao').style.color = 'green'
	document.getElementById('situacao').innerHTML = `${nome}, parabéns está aprovado - Média: ${media.toFixed(2)}`
} else if ( (media < 7) && (media >= 5)) {
	document.getElementById('situacao').style.color = 'yellow'
	document.getElementById('situacao').innerHTML = `${nome} Está de recuperação - Média: ${media.toFixed(2)}`
} else {
	document.getElementById('situacao').style.color = 'red'
	document.getElementById('situacao').innerHTML = `${nome}, infelizmente está reporvado - Média: ${media.toFixed(2)}`
}