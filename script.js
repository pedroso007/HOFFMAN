const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "vc é o namorado da júlia:" [
            {
                texto: "Sim",
                afirmacao: "Que ótimo "
            },
            {
                texto: "Não",
                afirmacao: "Sai daqui."
            }
        ]
    },
    {
        enunciado: "Vc ama muito ela?",
        alternativas: [
            {
                texto: "Demais",
                afirmacao: "Pode prosseguir."
            },
            {
                texto: "Não",
                afirmacao: "Vsf!"
            }
        ]
    },
    {
        enunciado: "Vc acha que tem sido um bom namorado?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Pode seguir."
            },
            {
                texto: "Não, eu fiz ela ficar triste",
                afirmacao: "Babaca babaca chato sai daqui."
            }
        ]
    },
    {
        enunciado: "Quer um presente de natal?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Aee, vai até a júlia e peça pra ela!"
            },
            {
                texto: "Não",
                afirmacao: "Vai toma no cu"
            }
        ]
    } 
    


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();



