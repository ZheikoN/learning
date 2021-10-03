

function WashingLaundry(laundryItems) {

    for (const item of laundryItems) {

        console.log(`I am washing a ${item}`)
    }
}


function FindAndWashItem(dirtyLaundry, itemToWash) {

    for (let i = 0; i < laundry.length; i++) {
        const currentItem = dirtyLaundry[i];
        
        if (currentItem.toLowerCase() == itemToWash.toLowerCase())
            console.log(`Found the ${currentItem} and now washing it`)
    }

}

let laundry = ["Shirt", "Trousers", "Socks", "Sweater"];

FindAndWashItem(laundry, "Shirt");
FindAndWashItem(laundry, "sweater");

WashingLaundry(laundry);