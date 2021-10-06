let carMF = 'Volkswagen';
let carModel = 'Golf';
let carEngine = '1.6';
let carColour = 'red';
let carType = 'Hatchback';

// let carMF1 = 'Toyota';
// let carModel1 = 'GT86';
// let carEngine1 = '2.0';
// let carColour1 = 'Gray';
// let carType1 = 'Sports Coupe';
// let carInterior = 'Luxurious';

let car = {
    'mf': 'Ford',
    'model': 'fiesta',
    'engine': '1.25',
    'color': 'pink',
    'type': 'sedan',
}

let fleet = [
    {
        'mf': 'Ford',
        'model': 'fiesta',
        'engine': '1.25',
        'color': 'pink',
        'type': 'sedan',
    },
    {
        'mf': 'Toyota',
        'model': 'fiesta',
        'engine': '2.0',
        'color': 'Gray',
        'type': 'Sports Coupe',

    },
    {
        'mf': 'Ford',
        'model': 'cougar',
        'engine': '2.0',
        'color': 'Gray',
        'type': 'Sports Coupe',

    }

]





//     'mf' : 'Toyota',
//     'model' : 'fiesta',
//     'engine' : '2.0',
//     'color' : 'Gray',
//     'type' : 'Sports Coupe',

// }



console.log(`Car manufacturer is ${fleet[0].mf}`);
console.log(`Car manufacturer is ${fleet[1].model}`);

for (let i = 0; i < fleet.length; i++) {
    const currentCar = fleet[i];
    const message = `${i} : ${currentCar.mf} : ${currentCar.color} : ${currentCar.model}`

    console.log(message);

}

for (const currentCar of fleet) {
    const message = `for each : ${currentCar.mf} : ${currentCar.color} : ${currentCar.model}`
    console.log(message);

}

GetAllManufacturers(fleet);
FindCarsByMf(fleet, 'ford')

function FindCarsByMf(fleet, manufacturer) {

    let carsByManufacturer = fleet.filter(car => car.mf.toLowerCase() === manufacturer.toLowerCase())
    console.log(carsByManufacturer)

}

function GetAllManufacturers(fleet) {
    let foundItems = [];

    // for (const currentCar of fleet) {
    //     foundItems.push(currentCar.mf);
    // }

    fleet.forEach(function (car) {
        foundItems.push(car.mf);

    })

    let foundMFs = fleet.map(
        function (car) {
            return car.mf
        }
    )


    const foundMFList = fleet.map(car => car.mf)

    console.log(foundMFList.join());
}