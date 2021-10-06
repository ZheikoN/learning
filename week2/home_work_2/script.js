// create array of items

let shoppingCart = [];
let cost = [];
let appleCost = [];
let orangeCost = [];

let apple = "apple";
let orange = "orange";


shoppingCart.push(apple);
shoppingCart.push(orange);
shoppingCart.push(apple);
shoppingCart.push(orange);
shoppingCart.push(apple);



// calculate amount of items pushed into the cart
let listOfItems = shoppingCart.length;

console.log(`you have ${listOfItems} items in your cart`);
console.log(`content of cart: ${shoppingCart.join(` - `)}`);

// have a loop create a new array filled in with numbers equal to cost per product then have sum of new array

// loop that lists prices of individual items and adds prices to new array
let applePrice = 0.60;
let orangePrice = 0.25;
for (let i = 0; i < listOfItems; i++) {

    if (shoppingCart[i] == "apple") {
        cost.push(0.60);
        appleCost.push(0.60);


    } else if (shoppingCart[i] == "orange") {
        cost.push(0.25);
        orangeCost.push(0.25);


    }

}
if (appleCost.length > 1) {
    console.log(`You have ${appleCost.length} apples`);
} else {
    console.log(`You have ${appleCost.length} apple`);
}


if (orangeCost.length > 1) {
    console.log(`You have ${orangeCost.length} oranges`);
} else {
    console.log(`You have ${orangeCost.length} orange`);
}


console.log(`Cost of an apple is: $${applePrice}`);
console.log(`Cost of an orange is: $S${orangePrice}`);

// loop that calculates sum of array that contains numbers assigned by previous loop

let appleSum = 0;

for (let i = 0; i < appleCost.length; i++) {
    appleSum += appleCost[i];
}
console.log(`Apples cost $${appleSum}`);

let orangeSum = 0;

for (let i = 0; i < orangeCost.length; i++) {
    orangeSum += orangeCost[i];
}
console.log(`Oranges cost $${orangeSum}`);

let sum = 0;

for (let i = 0; i < cost.length; i++) {
    sum += cost[i];
}
console.log(`Grand total for your shopping is whopping $${sum}`);

let vat = sum * 0.20
console.log(`Out of which $${vat} is VAT`);

