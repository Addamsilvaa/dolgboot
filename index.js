const venom = require('venom-bot');

venom
  .create()
  .then((client) => {
    console.log('✅ Cliente criado!');
  })
  .catch((erro) => {
    console.error('Erro ao iniciar:', erro);
  });