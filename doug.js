// Doug - O Conselheiro Amoroso com Jogos e Comandos
const prompt = require("readline-sync");

// Comandos disponíveis do Doug
const dougCommands = {
  "conselho amoroso": () => {
    const conselhos = [
      "Se declare com um meme, sempre funciona.",
      "Se ela curte café, você já tem meio caminho andado.",
      "O segredo é rir das mesmas bobagens. Procure por isso.",
      "Se o crush sumiu, lembre-se: quem quer, dá um jeito. Quem não quer, some no rolê."
    ];
    const random = Math.floor(Math.random() * conselhos.length);
    console.log("Doug diz: " + conselhos[random]);
  },

  "mini jogo": () => {
    console.log("Doug apresenta: Uma situação inusitada amorosa aparece... 💘\n");

    const cenas = [
      {
        pergunta: "Você está num date e a pessoa saca um baralho de Uno. O que você faz?",
        opcoes: ["Aceita o desafio", "Corre", "Pede pra jogar truco"],
        reacoes: [
          "Você perde feio, mas ganha o coração dela. 💘",
          "Você tropeça ao correr, vira meme e viraliza. Famoso, mas solteiro. 📸",
          "Ela aceita jogar truco. Agora vocês têm uma história juntos (e 4 denúncias por gritaria). 🃏"
        ]
      },
      {
        pergunta: "Você descobre que o crush curte horóscopo. Qual sua reação?",
        opcoes: ["Finge que é astrólogo", "Muda de signo", "Corre"],
        reacoes: [
          "Você inventa que é de Marte em ascendente. Ela acredita. Casados em 3 meses. 🪐💍",
          "Agora você é 'Gêmeos' com ascendente em 'Louco'. Ela curtiu. 😂",
          "Correu tanto que entrou em outra galáxia. Mas o Doug te respeita. 🚀"
        ]
      }
    ];

    const cena = cenas[Math.floor(Math.random() * cenas.length)];

    console.log(cena.pergunta);
    cena.opcoes.forEach((op, i) => {
      console.log(`${i + 1}. ${op}`);
    });

    const escolha = prompt.questionInt("\nEscolha sua opção (1-3): ");
    const index = escolha - 1;

    if (index >= 0 && index < cena.reacoes.length) {
      console.log("\nDoug diz: " + cena.reacoes[index]);
    } else {
      console.log("\nDoug não entendeu sua escolha, mas ele respeita sua confusão. 🤔");
    }
  },

  "ideia criativa": () => {
    const ideias = [
      "Crie um podcast fictício entre um humano e um gato falante.",
      "Monte um mapa de um mundo onde as estações do ano são reinos que vivem em guerra.",
      "Invente um superpoder inútil, mas engraçado, tipo: saber a cor favorita de qualquer pombo.",
      "Escreva uma carta do futuro pra você mesmo, mas como se você fosse um alienígena infiltrado."
    ];
    const random = Math.floor(Math.random() * ideias.length);
    console.log("Doug te inspira: " + ideias[random]);
  }
};

// Início do programa
console.log("Seja bem-vindo(a) ao Doug, seu assistente emocional e aleatório. 💬\n");

while (true) {
  console.log("Comandos disponíveis: 'conselho amoroso', 'mini jogo', 'ideia criativa', 'sair'");
  const comando = prompt.question("\nDigite um comando: ");

  if (comando === "sair") {
    console.log("Doug se despede com um abraço virtual. Até a próxima! 🤖");
    break;
  } else if (dougCommands[comando]) {
    console.log();
    dougCommands[comando]();
    console.log("\n-----------------------------\n");
  } else {
    console.log("Doug olha confuso... Esse comando não existe ainda. 😅\n");
  }
}
