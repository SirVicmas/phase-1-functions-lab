// Code your solution in this file!
function distanceFromHqInBlocks(location){
    let distance = (location - 42);

    if (distance < 0){
        return (distance * -1)
    }
    else {
        return distance
    }
}
function distanceFromHqInFeet(location){
    let distance = (location - 42) * 264;
    if (distance < 0){
        return (distance * -1)
    }
    else {
        return distance
    }

}

function distanceTravelledInFeet(start, destination){
    let travel = (destination - start) * 264

    if (travel < 0){
        return (travel * -1)
    }
    else {
        return travel;
    }
}

function calculatesFarePrice(start, destination) {
    let distanceTravelled = Math.abs((destination - start) * 264);
    if (distanceTravelled <= 400) {
        return 0
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        const fare = (distanceTravelled - 400) * 0.02;
        return fare;
    } else if (distanceTravelled >2000 && distanceTravelled <= 2500){
        return 25;
    } else {
        return "cannot travel that far"
    }

}
calculatesFarePrice(34, 32);