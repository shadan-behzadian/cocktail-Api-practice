<!-- # Code Assignment

This project is configured for you to get started.
It includes a dependency: `node-fetch`, so you can use the fetch API inside this project.
You can read more about the fetch API in [the Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

Remember to run `npm install` to download the library inside the project.

## Running the project

You can write your code in as many separate files as you want.
You should import your code inside the `src/index.js` file, which you can run using the project's _test_ script:

```bash
npm run test
``` -->

## Explanation of the Code :

I have used functional programming approach in response to questions :

1. fechCocktails.js => is a function that recieves the letter "g" as an argument for reusability parameter is used.

2. cocktailNames.js => prints name of cocktails and total number of cocktails

3. moreThanFourIngredients.js => prints only the cocktails that have more than four ingredients (there are 15 ingredients for each cocktail I check with (an if statement) if the 5th one is not null prints that coctaik)

4.cocktailDetails.js => prints name / id / ingredients . uses a function getNameAndId() that prints name and id and createIngredientArray() to print ingredients for each cocktail as an array

5.cocktailDetailQuantity.js => prints name /id / ingredients / ingredient quantity . uses getNameAndId() that prints name and id and getIngredientQuantity() to print ingredients and tehir quantity for each cocktail as an array of objects

6.alchoholicOrNot.js => seperate the cocktaildetailQuantity drinks to alchoholic and noneAlchoholic drinks
uses uses getNameAndId() that prints name and id and getIngredientQuantity() and at the end uses if else statement to separate the drinks based on "strAlcoholic" field in the data.

7. getNameAndID , createIngredientArray , getIngredientQuantity are functions that I have created for reusibility between the main functions and prevent repetition.
