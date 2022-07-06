// //create array
// nameArray = [];
// //add 4 names
// nameArray.push('Matthew', 'Mark', 'Luke', 'John');
// //print one name at a time (use for loop)
// for (let i =0; i < nameArray.length; i++){
//     console.log(nameArray[i]);
// }


// //create array
// numbersArray = [];
// //add 5 numbers
// numbersArray.push(1, 2, 3, 4, 5);
// //print array one number at a time
// for (let i = 0; i < numbersArray.length; i++){
//     console.log(numbersArray[i]);
// }


// //make an array
// secondNameArray = [];
// //add 4 names
// secondNameArray.push('Dan', 'Daryl', 'Wayne', 'Katy');
// //print 3rd item
// console.log(secondNameArray[2]);
// //delete 2nd item
// secondNameArray.splice(1, 1);
// //print 3rd item back into the array (not quite sure how to put the 3rd item back if I never took it out)
// console.log(secondNameArray);


// //create array
// numbersArray2 = [5, 3, 7, 4];
// //pass the array to a new function
// theNumberList.apply(numbersArray2); 
// function theNumberList(){
//     for (let i = 0; i < numbersArray2.length; i++) {
//         //print the array
//         console.log(numbersArray2[i]);
//     }
// }
// //print the 3rd element of the theNumberList
// console.log(numbersArray2[2]);

// //delete the 2nd element
// numbersArray2.splice(1, 1);
// //print the 3rd index element
// console.log(numbersArray2[2]);

////////

// //EXERCISE 5
// //create an array of integers
// mapIntegers = [477, 8914, 40461, 599148];
// //use .map() to double the integers
//  let newMapInt = mapIntegers.map(n => n * 2);
//  //console.log it
//  console.log(newMapInt);

// //EXCERCISE 6
// // create array of nouns
// mapNouns = ['can', 'laptop', 'crayon'];
// //use the map function to store the plural noun (add 's')
// let newMapNouns = mapNouns.map(n => n + 's');
// console.log(newMapNouns);

// //EXCERCISE 7
// //make an array of different prices
// pricesFilter = [390, 175, 314.95, 52, 18243, 5072, 670];
// //use .filter() to print everything less than or equal to $350
// let newPrices = pricesFilter.filter(c => c <= 350);
// console.log(newPrices);

// //EXCERCISE 8
// // make an array of objects with city name and population
// let cityAndPop = [ { "name": "Shanghai", "population": 24300000 }, 
// { "name": "Los Angeles", "population": 3792621 }, 
// { "name": "New Delhi", "population": 21800000 }, 
// { "name": "Mumbai", "population": 18400000 }, 
// { "name": "Chicago", "population": 2695598 }, 
// { "name": "Houston", "population": 2100263 }, ];
// //use filter function to get cities with population >= 5 million in a seperate array
// let newCityAndPop = cityAndPop.filter( ({population}) => population >= 5000000 );
// console.log(newCityAndPop);

//EXCERCISE 9
//create an array of numbers
// sumArray = [1, 2, 3, 4, 5]
// //find the sum of all numbers using .reduce()
// let sum = sumArray.reduce((acc, curr) => acc + curr);
// //log into console
// console.log(sum);

//EXCERCISE 10

//create an array of numbers
arrayForSumAndAvg = [1, 2, 3, 456, 108115, 45909.15154, 1988.1545, 145e8];
//find sum using .reduce() and divide by length of array
let sumAndAvg = arrayForSumAndAvg.reduce((acc, curr) => acc + curr / arrayForSumAndAvg.length);
//log into console
console.log(sumAndAvg); //why is this only almost right