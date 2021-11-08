// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2,4); 
}
//or (2,4), which is index 2 and 3

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
//let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];