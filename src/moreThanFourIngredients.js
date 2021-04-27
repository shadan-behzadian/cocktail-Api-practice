// cocktails with more than 4 ingrediantes
function moreThanFourIngredients(drinks) {
  console.log("Cocktails with more than 4 ingredients :");
  for (let i = 0; i < drinks.length; i++) {
    if (drinks[i].strIngredient5 !== null) {
      console.log(drinks[i].strDrink);
    }
  }
}

module.exports = { moreThanFourIngredients };
