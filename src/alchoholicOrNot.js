//alchocolic or non alchoholic drinks
const { getNameAndID } = require("./getNameAndID");
const { getIngredientQuantity } = require("./getIngredientQuantity");

function alchoholicOrNot(drinks) {
  let alcoholic = [];
  let nonAlcoholic = [];
  for (let i = 0; i < drinks.length; i++) {
    if (drinks[i].strIngredient5 !== null) {
      let cocktailList = getNameAndID(drinks, i);
      getIngredientQuantity(drinks, i, cocktailList);
      if (drinks[i].strAlcoholic === "Alcoholic") {
        alcoholic.push(cocktailList);
      } else if (drinks[i].strAlcoholic !== "Alcoholic") {
        nonAlcoholic.push(cocktailList);
      }
      cocktailList = {};
    }
  }
  console.log("Alchoholic drinks :");
  console.log(alcoholic);
  console.log("non Alchoholic drinks :");
  console.log(nonAlcoholic);
}

module.exports = { alchoholicOrNot };
