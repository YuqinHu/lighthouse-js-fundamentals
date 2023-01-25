const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("for loop:");
for (let i=0; i<ingredients.length; i++){
  console.log(ingredients[i]);
}

console.log("while loop:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

console.log("for loop backward:");
for (let i=ingredients.length-1; i>=0; i--){
  console.log(ingredients[i]);
}
