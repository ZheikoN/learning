


function WalkingUp(topStep) {



    let midWay = parseInt(topStep / 2)

    for (let i = 0; i < topStep; i++) {

        if (i == midWay) {
            console.log(`_______________________reached the midway point ${midWay}`);
        }
        

         let stepType = i % 2 == 0 ? 'even' : 'odd';

          console.log(`I am on step ${i}. it is step : ${stepType}`);
    }
}

WalkingUp(100);
WalkingUp(25);