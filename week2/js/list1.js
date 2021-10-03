let dwarf1 ="Sleepy"
let dwarf2 ="Dopey"
let dwarf3 ="Sneezy"
let dwarf4 ="Grumpy"
let dwarf5 ="Happy"
let dwarf6 ="Bashful"
let dwarf7 ="Doc"

let dwarves = ["Sleepy","Dopey","Sneezy"]

dwarves[3]="Grumpy";


dwarves.push("Happy");
dwarves.push("Bashful");
console.log(dwarves.join())
dwarves.pop();

// console.log({dwarves});

console.log(dwarves.join())
dwarves.shift();
console.log(dwarves.join())
dwarves.unshift("Doc");
console.log(dwarves.join())

dwarves.splice(1,0,'Bashful')
console.log(dwarves.join())

console.log(dwarves[0]);
console.log(dwarves[1]);
console.log(dwarves[2]);
console.log(dwarves[3]);


let countDwarves = dwarves.length
for (let i = 0; i < countDwarves ; i++){
    console.log(`the dwarf at position ${i} is called ${dwarves[i]}`);
}
console.log(`lenght of dwarves is ${dwarves.length}`);
while (dwarves.length > 0){


    let poppedDwarf = dwarves.pop();
    console.log(`${poppedDwarf} just popped off`);
}

console.log(`lenght of dwarves is ${dwarves.length}`);

