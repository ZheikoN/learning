// create array of items

let shoppingCart = [];
let cost = [];

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





    for (let i = 0; i < listOfItems; i++) {
  let applePrice = 0.60;
  let orangePrice = 0.25;
        if (shoppingCart[i] == "apple") {
            cost.push(0.60);
            console.log(`Cost of an apple is: ${applePrice}`);

        } else if (shoppingCart[i] == "orange") {
            cost.push(0.25);
            console.log(`Cost of an orange is: ${orangePrice}`);

        }
        
        
    }


    
    let sum = 0;
    
    for (let i = 0; i < cost.length; i++) {
        sum += cost[i];
    }
    console.log(`Grand total for your shopping is whopping ${sum}`);


    // have a loop create a new array filled in with numbers equal to cost per product then have sum of new array