import GameSavingLoader from './game/GameSavingLoader.js';

GameSavingLoader.load()
  .then((result) => console.log(result), 
    (error) => console.log(error));
