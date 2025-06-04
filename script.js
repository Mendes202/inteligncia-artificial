const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você sai do campo de futbol voce se depara com algo surpreendente um super carro com motor v12 da koenigsegg qual seria sua reação?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "e a pesoa q esta dentro do super carro pergunta se vc quer dar ma volta no carro. Qual seria sua reação",
        alternativas: [
            {
                texto: "voce entra no carro",
                afirmacao: "afirmação"
            },
            {
                texto: "voce suspeita do convite",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "mas voce entra no carro, o piloto pergunta se voce quer dirigir, porem voce nao tem carteira de abilitação mas sabe dirigir e com isso tenque tomar a dicisao de dirigir e nao dirigir",
        alternativas: [
            {
                texto: "voce dirigi sem carteira de abilitação",
                afirmacao: "afirmação"
            },
            {
                texto: "voce se preocupa com a segurança do carro e de voces caso vc bata seria um prejuizo muito caro",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "porem voce decide nao entrar no caso e com isso ele dar uma gargalhada dizendo " clro que é brincadeira". E voce faz uma pergunta a ele",
        alternativas: [
            {
                texto: "porque voce me chamou para dar uma volta?",
                afirmacao: "afirmação"
            },
            {
                texto: "voce pode dr uma arrancada ai o pa noi ver como é?",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "ele ignora totalmente suas perguntas e com isso voce toma conta que é um carro ROUBADO! ele começa a acelerar de uma forma desccontrolada e voce decide",
        alternativas: [
            {
                texto: "voce decide falar para ele parar de dirigir em alta velocidade.",
                afirmacao: "afirmação"
            },
            {
                texto: "voce decide usar força bruta para faer ele parar de dirigire e acaba com tudo isso",
                afirmacao: "afirmação"
            }
        ]
    },
];


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
