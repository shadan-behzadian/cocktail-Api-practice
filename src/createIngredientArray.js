//prints only name of ingredients in an array
function createIngredientArray(drinks, i, cocktailList) {
  let ingredients = [];
  let totalNumIngredients = 16;
  for (let j = 1; j < totalNumIngredients; j++) {
    if (drinks[i]["strIngredient" + j] !== null) {
      ingredients.push(drinks[i]["strIngredient" + j]);
    }
  }
  return (cocktailList["ingredients"] = ingredients);
}

module.exports = { createIngredientArray };
