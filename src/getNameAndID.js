//prints name of the cocktail and th ID of the cocktail
function getNameAndID(drinks, i) {
  let cocktailList = {};
  cocktailList["id"] = drinks[i].idDrink;
  cocktailList["name"] = drinks[i].strDrink;
  return cocktailList;
}

module.exports = { getNameAndID };
