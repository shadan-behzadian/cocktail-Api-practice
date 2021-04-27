//Log the names of cocktails found that start with "G" and the total number.
function cocktailNames(drinks) {
  console.log("Cocktails begining with G :");
  let names = [];
  for (let i = 0; i < drinks.length; i++) {
    names.push(drinks[i].strDrink);
  }
  console.log("Names:" + names);
  console.log("Total:" + drinks.length);
}

module.exports = { cocktailNames };
