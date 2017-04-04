const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
  .goto('http://localhost:1337/')
  .click('#e2e-create-game-link-button')
  .type('#e2e-name-the-game-input', 'Test Game')
  .click('#e2e-submit-new-game-button')
  .goto('http://localhost:1337/games')
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Error:', error);
  });
