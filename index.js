// const returnFirstTwoDrivers = (param) => {
//     return param.slice(0, 2)
// }

// const returnLastTwoDrivers = (param) => {
//     return param.slice(2)
// }

// const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]


// function createFareMultiplier()
//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// returnFirstTwoDrivers() — Declare the variable returnFirstTwoDrivers with const 
//and assign an anonymous function to it. The assigned function should accept an array
// of drivers as an argument and return the first two drivers in the array.
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(intiger) {
    return function (fare) {
        return fare * intiger
    }
}

const fareDoubler = function (fare){
    return fare * 2 
}

const fareTripler = function(fare){
    return fare * 3
}

function selectDifferentDrivers(drivers, driverOptions){
    return driverOptions(drivers)
}




