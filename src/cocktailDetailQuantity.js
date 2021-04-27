// Cocktails with ingredient quantities
const { getNameAndID } = require("./getNameAndID");
const { getIngredientQuantity } = require("./getIngredientQuantity");

// Cocktails with ingredient quantities
function cocktailDetailQuantity(drinks) {
  console.log("Cocktails with ingredient quantities");
  let allCocktailDetails = [];
  for (let i = 0; i < drinks.length; i++) {
    if (drinks[i].strIngredient5 !== null) {
      let cocktailList = getNameAndID(drinks, i);
      getIngredientQuantity(drinks, i, cocktailList);
      allCocktailDetails.push(cocktailList);
      cocktailList = {};
    }
  }
  console.log(allCocktailDetails);
}

module.exports = { cocktailDetailQuantity };
