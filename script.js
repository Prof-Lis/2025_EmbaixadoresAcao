const principal = document.querySelector(".principal");
const pergunta = document.querySelector(".pergunta");
const respostas = document.querySelector(".respostas");
const resultado = document.querySelector(".resultado");
const txtresultado = document.querySelector(".txtresultado");

const perguntas = [
    {
         enunciado: "Em uma escola pública, a coleta seletiva de lixo começou a ser incentivada. Que tipo de sustentabilidade está sendo trabalhado principalmente?", 
         alternativas: [
            "a) Sustentabilidade social", 
            "b) Sustentabilidade ambiental", 
            "c) Sustentabilidade econômica"
        ],
    },
    {
         enunciado: "A escola organizou uma campanha de doação de agasalhos para famílias em situação de vulnerabilidade. Isso se relaciona com qual tipo de sustentabilidade?", 
         alternativas: [
            "a) Sustentabilidade econômica", 
            "b) Sustentabilidade social", 
            "c) Sustentabilidade ambiental"
        ],
    },
    {
         enunciado: "Estudantes do ensino médio criam um projeto para reaproveitamento de água da chuva na escola. Esse projeto se conecta com qual tipo de sustentabilidade?", 
         alternativas: [
            "a) Sustentabilidade ambiental", 
            "b) Sustentabilidade econômica", 
            "c) Sustentabilidade social"
        ],
    },
    {
         enunciado: "Uma comunidade começou a cultivar hortas comunitárias para diminuir os gastos com alimentação e melhorar a qualidade da comida. Quais tipos de sustentabilidade estão sendo trabalhados?", 
         alternativas: [
            "a) Ambiental e econômica", 
            "b) Só a social", 
            "c) Só a econômica"
        ],
    },
    {
         enunciado: "Quando uma escola decide comprar alimentos da agricultura familiar local para a merenda escolar, ela está ajudando a desenvolver:", 
         alternativas: [
            "a) Só o meio ambiente", 
            "b) Sustentabilidade social e econômic", 
            "c) Só a sustentabilidade econômica"
        ]
    } 
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    pergunta.textContent = perguntaAtual.enunciado;

}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent=alternativa;
        respostas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();


