//prints ingredeiants and their quantities as objects in array
function getIngredientQuantity(drinks, i, cocktailList) {
  let ingredients = [];
  let totalNumIngredients = 16;
  for (let j = 1; j < totalNumIngredients; j++) {
    let eachIngredientQuantity = {};
    if (drinks[i]["strIngredient" + j] !== null) {
      eachIngredientQuantity["name"] = drinks[i]["strIngredient" + j];
      eachIngredientQuantity["quantity"] = drinks[i]["strMeasure" + j];
      ingredients.push(eachIngredientQuantity);
    }
  }
  return (cocktailList["ingredeients"] = ingredients);
}
module.exports = { getIngredientQuantity };
