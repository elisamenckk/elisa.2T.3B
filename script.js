const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Vamos comerçar? ",

        alternativas: [
            {
                texto: "Sim",
                afirmacao: ""
            },
            {
                texto: "Claro",
                afirmacao: ""
            }
        ]
    },{
        enunciado: "Em qual temporada Doni fez seu primeiro show? ",

        alternativas: [
            {
                texto: "3ª temporada",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "2ª temporada",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual foi a primeira música que Doni lançou?",
        alternativas: [
            {
                texto: "Te Amo Sem Compromisso",
                afirmacao: "Falso"
            },
            {
                texto: "Passei de Nave",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Quem Ta é Nois",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Quantos filhos Nando teve?",
        alternativas: [
            {
                texto: "2",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "3",
                afirmacao: "Falso"
            },  
        {
            texto: "Nenhum",
            afirmacao: "Falso"
        }   
        ]
    },
    {
        enunciado: "Qual das alternativas não é considerada uma produção em área rural?",
        alternativas: [
            {
                texto: "Agricultura",
                afirmacao: "Falso"
            },
            {
                texto: "Pecuária",
                afirmacao: "Falso"
            },
            {
                texto: "Extrativismo",
                afirmacao: "Falso"
            },
            {
                texto: "Comércio",
                afirmacao: "Verdadeiro"
            }
        ]
    },
    {
        enunciado: "As áreas rurais são mais propensas a ter uma qualidade de ar melhor?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Não",
                afirmacao: "Falso"
            }
        ]
    },
    {
        enunciado: "Qual é o nome dado ao movimento migratório em que a pessoa se desloca da área urbana para a rural?",
        alternativas: [
            {
                texto: "Sedentarismo",
                afirmacao: "Falso"
            },
            {
                texto: "Êxodo rural",
                afirmacao: "Verdadeiro"
            },
            {
                texto: "Migração",
                afirmacao: "Falso"
            },
            {
                texto: "Êxodo urbano",
                afirmacao: "Falso"
            }
        ]
    }
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

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    historiaFinal += afirmacaoSelecionada + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    if (Object.keys(contagemAfirmacoes).length > 0) {
        caixaPerguntas.innerHTML = '<a class="clique2" href="https://AlmeidaGabrielzinho.github.io/agrinho_2024">Reiniciar Teste</a> Parabéns pela tentativa. De 10 questões, você acertou: ';
        const numeroVerdadeiro = contagemAfirmacoes['Verdadeiro'] || 0;
        textoResultado.textContent = numeroVerdadeiro > 1 ? numeroVerdadeiro : 0;
        caixaAlternativas.textContent = "";
    } else {
        caixaPerguntas.innerHTML = '<a class="clique2" href="https://AlmeidaGabrielzinho.github.io/agrinho_2024">Reiniciar Teste</a> Parabéns pela tentativa. De 10 questões, você acertou: ';
        textoResultado.textContent = 0;
        caixaAlternativas.textContent = "";
    }
}