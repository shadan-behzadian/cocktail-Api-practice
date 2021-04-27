//cocktails with just id/name/ingredients
const { getNameAndID } = require("./getNameAndID");
const { createIngredientArray } = require("./createIngredientArray");

function cocktailDetails(drinks) {
  console.log("Cocktails with just ID/Name/ingredietnes");
  let allCocktailDetails = [];
  for (let i = 0; i < drinks.length; i++) {
    if (drinks[i].strIngredient5 !== null) {
      let cocktailList = getNameAndID(drinks, i);
      createIngredientArray(drinks, i, cocktailList);
      allCocktailDetails.push(cocktailList);
      cocktailList = {};
    }
  }
  console.log(allCocktailDetails);
}

module.exports = { cocktailDetails };
