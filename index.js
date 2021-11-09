// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(x) { //x replaced by "drivers" array
    return x.slice(0,2);
}

const returnLastTwoDrivers = function(x) {
    return x.slice(2,4); 
}
//or (2,4), which is index 2 and 3

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
//let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(multiplierValue) {
    return function(x) {
        return multiplierValue * x;
    };
};

const fareDoubler = createFareMultiplier(2); //faredoubler() is a function which passes a value of 2 to createFareMultiplier

const fareTripler = createFareMultiplier(3);

console.log(fareDoubler(5));
/*
function fareDoubler() {
    return createFareMultiplier(2);
} 

function fareTripler() {
    return createFareMultiplier(3);
}
*/

const selectDifferentDrivers = function(driversArray, theDriversToReturn) {
    return theDriversToReturn(driversArray); //theDriversToReturn can be named anything, except function, it is the function argument (callback)
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
//theDriversToReturn inside selectDifferentDrivers changes to returnFirstTwoDrivers because it is a variable function
//then we pass in the array called drivers