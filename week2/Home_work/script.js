


// function that pushes first product into array


let shoppingCart = [];
const apple = { title: 'apple', price: 60 };
const orange = { title: 'orange', price: 20 };
shoppingCart.push(apple);
shoppingCart.push(orange);





let countProduct = shoppingCart.length


if (countProduct >= 2) {

    console.log(`There are ${countProduct} items in cart`);
} else if (countProduct == 1) {

    console.log(`There is ${countProduct} item in cart`);
} else {

    console.log(`Shopping cart is Empty`);
}

console.log(`Products in your Shopping Cart: ${shoppingCart.join()}`)

// function CalcGrandTotal() {

//     for (i = 0; i < countProduct; i++) {
//         let appleTotal = apple.price + i;
//         let orangeTotal = i * orange.price;
//         let totalTotal = appleTotal + orangeTotal;




//         console.log(`apples costs: ${appleTotal}, Oranges costs: ${orangeTotal} and grand total is: ${totalTotal}`);
//     }
// }

// CalcGrandTotal();

function CalculatePrice() {
    for (let i=0; i<countProduct; i++)

        console.log(`test: ${i}`);

        if (shoppingCart == apple.title) {
            console.log("test");
        }
}

CalculatePrice();

console.log(`${apple.title}`);

const filtered = shoppingCart.map(function (value){
    return value + "!";
});


console.log(filtered);