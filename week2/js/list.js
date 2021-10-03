let dwarf1 = "Sleepy"
let dwarf2 = "Dopey"
let dwarf3 = "Sneezy"
let dwarf4 = "Grumpy"
let dwarf5 = "Happy"
let dwarf6 = "Bashful"
let dwarf7 = "Doc"

let dwarves = ["Sleepy", "Dopey", "Sneezy"]

// dwarves[3] = "Grumpy";




// console.log({dwarves});



function setupDwarves(incomingDwarves) {

    dwarves = incomingDwarves;
    dwarves.push("Happy");
    dwarves.push("Grumpy");
    dwarves.push("Bashful");
    dwarves.push("Doc");


}

function listDwarves() {

    let countDwarves = dwarves.length
    for (let i = 0; i < countDwarves; i++) {
        console.log(`the dwarf at position ${i} is called ${dwarves[i]}`);
    }
    console.log(`lenght of dwarves is ${dwarves.length}`)
}

function popDwarves() {
    while (dwarves.length > 0) {


        let poppedDwarf = dwarves.pop();
        console.log(`${poppedDwarf} just popped off`);
    }

    console.log(`lenght of dwarves is ${dwarves.length}`)

}


setupDwarves( ["Sleepy", "Dopey", "Sneezy"]);
listDwarves();
popDwarves();


