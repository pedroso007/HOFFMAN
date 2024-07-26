const perguntas = [
{
enunciado: “Insira o enunciado da Pergunta 1”,
alternativas: [
{
texto: “Alternativa 1”,
afirmação: “Afirmação da alternativa 1”
},
{
texto: “Alternativa 2”,
afirmação: “Afirmação da alternativa 2”
}
]
}

function mostraAlternativa() {
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document. createElement(“button”);
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener(“click”,
function () {
atual++;
mostraPergunta();
});
caixaAlternativas.appendChild(botaoAlternativas);
}
}
