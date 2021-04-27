const fetch = require("node-fetch");
const { cocktailNames } = require("./cocktailNames");
const { moreThanFourIngredients } = require("./moreThanFourIngredients");
const { cocktailDetails } = require("./cocktailDetails");
const { cocktailDetailQuantity } = require("./cocktailDetailQuantity");
const { alchoholicOrNot } = require("./alchoholicOrNot");

function getData(letter) {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + letter)
    .then((res) => res.json())
    .then((data) => {
      let drinks = data.drinks;
      cocktailNames(drinks);
      moreThanFourIngredients(drinks);
      cocktailDetails(drinks);
      cocktailDetailQuantity(drinks);
      alchoholicOrNot(drinks);
    })
    .catch((err) => console.log(err));
}
module.exports = { getData };
