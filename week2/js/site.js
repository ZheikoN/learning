//alert('hello world')



// console.log(`I am on step 1`)
// console.log(`I am on step 2`)
// console.log(`I am on step 3`)
// console.log(`I am on step 4`)
// console.log(`I am on step 5`)

// let counter = 1;
// console.log(`I am on step ${counter}`); counter = counter + 1;
// console.log(`I am on step ${counter}`); counter = counter + 1;
// console.log(`I am on step ${counter}`); counter = counter + 1;
// console.log(`I am on step ${counter}`); counter = counter + 1;
// console.log(`I am on step ${counter}`); counter = counter + 1;

// let counter = 1;
// console.log(`I am on step ${counter}`); counter++;
// console.log(`I am on step ${counter}`); counter++;
// console.log(`I am on step ${counter}`); counter++;
// console.log(`I am on step ${counter}`); counter++;
// console.log(`I am on step ${counter}`); counter++;

// let counter = 10;
// console.log(`I am on step ${counter++}`);
// console.log(`I am on step ${counter++}`);
// console.log(`I am on step ${counter++}`);
// console.log(`I am on step ${counter++}`);
// console.log(`I am on step ${counter++}`);

// while (condition) {do stuff}

// let counter = 1;
// let topStep = 10;

// while (counter < topStep) {


//     console.log(`I am on step ${counter}`);
//     counter++;

// }

// do {

//     console.log(`do while on step ${counter}`);
//     counter++;


// } while (counter < topStep)

// let counter = 1;
topStep = 27;

let midWay = parseInt(topStep / 2)

console.log(`Midway point is ${midWay}`);

for (let i = 0; i < topStep; i++) {

    if (i == midWay) {
        console.log(`_______________________reached the midway point ${midWay}`);
    }
    let oddOrEven = 'unknown'
    let remainder = i % 2;

    if (remainder == 0) {
        oddOrEven = 'even';
}
    else {
        oddOrEven = 'odd';
    }

    let stepType = i % 2 == 0 ? 'even' : 'odd';

    console.log(`I am on step ${i}. it is a ${oddOrEven} step : ${stepType}`);
    }

