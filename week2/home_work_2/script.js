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
shoppingCart.push(apple);
shoppingCart.push(apple);
shoppingCart.push(apple);
shoppingCart.push(apple);
shoppingCart.push(apple);
shoppingCart.push(orange);

// function that will calculate amount of items pushed into the cart
let listOfItems = shoppingCart.length;



console.log(`you have ${listOfItems} items in your cart`);
console.log(`content of cart: ${shoppingCart.join(` - `)}`);

// have a loop create a new array filled in with numbers equal to cost per product then have sum of new array

// loop that lists prices of individual items and adds prices to new array

for (let i = 0; i < listOfItems; i++) {
    let applePrice = 0.60;
    let orangePrice = 0.25;
    if (shoppingCart[i] == "apple") {
        cost.push(0.60);
        appleCost.push(0.60);
        console.log(`Cost of an apple is: ${applePrice}`);

    } else if (shoppingCart[i] == "orange") {
        cost.push(0.25);
        orangeCost.push(0.25);
        console.log(`Cost of an orange is: ${orangePrice}`);

    }


}

// loop that calculates sum of array that contains numbers assigned by previous loop


let appleSum = 0;

for (let i = 0; i < appleCost.length; i++) {
    appleSum += cost[i];
}
console.log(`Apples cost ${appleSum}`);

let orangeSum = 0;

for (let i = 0; i < orangeCost.length; i++) {
    orangeSum += cost[i];
}
console.log(`Oranges cost ${orangeSum}`);

let sum = 0;

for (let i = 0; i < cost.length; i++) {
    sum += cost[i];
}
console.log(`Grand total for your shopping is whopping ${sum} billion`);

let vat = sum * 0.20
console.log(`Out of which ${vat} is VAT`);