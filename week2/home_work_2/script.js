// create array of items

let shoppingCart = [];

let apple = "apple";
let orange = "orange";

shoppingCart.push(apple);
shoppingCart.push(orange);
shoppingCart.push(apple);
shoppingCart.push(orange);

// function that will calculate amount of items pushed into the cart

let listOfItems = shoppingCart.length;

console.log(`you have ${listOfItems} items in your cart`);
console.log(`content of cart: ${shoppingCart.join(` - `)}`);



for (let i = 0; i < listOfItems; i++) {
    let applePrice = 60;
    let orangePrice = 25;
    if (shoppingCart[i] == "apple") {
        
        console.log(`Cost of an apple is: ${applePrice}`);

    } else if (shoppingCart[i] == "orange") {
    
        console.log(`Cost of an orange is: ${orangePrice}`);

    }
    
    
}




