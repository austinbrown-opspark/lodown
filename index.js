'use strict';

// YOU KNOW WHAT TO DO //

/**
 *  identity: Takes a parameter and returns the value unchanged.
 * 
 * @param {Value} value: Can be any input value.
 * 
 * @return {Value}: Will be the same value as my input values.
 */
 function indentity(value){
     // Return input value unchanged
     return value;
 }
 
 module.exports.indentity = indentity;
 
/**
 *  typeOf: Takes a parameter and returns its value type as a string
 * 
 * @param {Value} value: Can be any input value
 * 
 * @return {String}: Will be a string that describes the data type that was passed as an argument
 */
 
 function typeOf(value) {
    // If the input value type is an array
    if (Array.isArray(value)) {
        // Return 'array'
        return 'array'
    // If value is undefined
    } else if (value === 'undefined') {
        // Return the value unchanged
        return value
    // If value is null
    } else if (value === null) {
        // Return 'null'
        return 'null'
    // If the value type is an object but not a date
    } else if (typeof value === 'object' && value !== Date(value)) {
        // Return 'object'
        return 'object'
    // Otherwise, return the value typeof as a string
    } else {
        return typeof value
    }
}

module.exports.typeOf = typeOf;

/**
 *  first: Designed to take an array and a number as arguments and return the first n value(s) of the array, where
 * n is the number taken as an argument.
 * 
 * @param {Array} array: The array to copy the values from 
 * @param {Number} number: The total number of sequential values to be collected
 * 
 * @return {Array} arr: Will be a new array comprised of values copied from the input array
 * 
 * Edge Cases: If the input array is not an array or the input number is negative, empty array will be returned
 *             If the input number is falsey value, first value of the input array will be returned 
 *             If the input number is larger than the total number of values in the input array, return the full array
 */
 
function first(array, number) {
    // Create empty array
    var arr = [];
    // If the input array is not an array or the input number is negative
    if(!Array.isArray(array) || number < 0){
        // Return the empty array
        return arr;
    // If the input number is a falsey value (undefined, null, NaN, 0)
    } else if(!number){
        // Return the first value of the input array
        return array[0];
    // If the input number is greater than the number of values in the input array
    } else if(number > array.length) {
        // Return the array unchanged
        return array; 
    } else {
        // Iterate through input array, from the first value up to the nth value indicated by the input number
        for(let i = 0; i < number; i++){
            // Add each of these values to the empty array
            arr.push(array[i]);
        }
        // Return the new array
        return arr; 
    } 
};

module.exports.first = first;

/**
 *  last: Designed to take an array and a number as arguments and return the last n value(s) of the array, where
 * n is the number taken as an argument.
 * 
 * @param {Array} array: The array to copy the values from 
 * @param {Number} number: The total number of sequential values to be collected
 * 
 * @return {Array} arr: Will be a new array comprised of values copied from the input array - if no other conditions are met
 * 
 * Edge Cases: If the input array is not an array or the input number is negative, empty array will be returned
 *             If the input number is falsey value, last value of the input array will be returned 
 *             If the input number is larger than the total number of values in the input array, return the full array
 */

function last(array, number){
    // Create empty array
    var arr = [];
    // If the input array is not an array or the input number is negative
    if(!Array.isArray(array) || number < 0){
        // Return the empty array
        return arr;
    // If the input number is a falsey value (undefined, null, NaN, 0)
    } else if(!number){
        // Return the last value of the input array
        return array[array.length-1];
    // If the input number is greater than the number of values in the input array
    } else if(number > array.length) {
        // Return the array unchanged
        return array; 
    } else {
        // Iterate through input array, from the nth to last (where n is input number) up to the last array value
        for(let i = array.length-number; i <= array.length-1; i++){
            // Add each of these values to the empty array
            arr.push(array[i]);
        }
        // Return the new array
        return arr; 
    }
};

module.exports.last = last;

/**
 *  indexOf: Designed to take an array and a value as arguments and return the index of the first occurence of the
 * value in the array if it is found.
 * 
 * @param {Array} array: The array to iterate through
 * @param {Value} value: Can be any value - it is the value to search for in the array
 * 
 * @return {Number} i: Will be the index number of the value in array that matches value - if a match is found
 * @return {Number} -1: Returns -1 if no match was found
 */

function indexOf(array, value) {
    // Iterate through each value of an array
    for (let i = 0; i < array.length; i++) {
        // If a value matches the input value
        if (array[i] === value) {
            // Return the index of where the match was found
            return i;
        }
    // If loop was exited with no match, return -1
    } return -1;
}

module.exports.indexOf = indexOf;

/**
 *  each: Designed to loop over a collection, Array or Object, and apply the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    // If input collection is an array
    if(Array.isArray(collection)) {
        // Iterate through each value of the array
        for(var i = 0; i < collection.length; i++) {
            // Pass each value to the input function as an argument, along with the index of that value, and the entire array respectively
            action(collection[i], i, collection);
        }
    } else {
        // Otherwise, assume input collection is an object and iterate through each key
        for (var key in collection) {
            // Pass each property value to the input function as an argument, along with its key, and the entire object respectively
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 *  unique: Desgined to take an array as an argument and return a new array with no duplicate values
 * 
 * @param {Array) array: The original array that will be checked for duplicates
 * 
 * @return {Array} uniqueArray: A new array with no duplicates
 */
 
function unique(array){
    // Create blank array
    let uniqueArray = [];
    // Iterate through all values of input array
    for (let i = 0; i < array.length; i++) {
        // If the index of the current value can't be found in the new array 
        if (indexOf(uniqueArray, array[i]) === -1) {
            // Add the value to the array
            uniqueArray.push(array[i])
        }
    }
    // Return the new array
    return uniqueArray;
}
module.exports.unique = unique;

/**
 *  filter: Takes an array and a function. Designed to take the array and return a new array with values from the
 * old array that have been 'filtered' as true based on whatever function you gave it to filter by.
 * 
 * @param {Array} array: The array over which to iterate
 * @param {Function} func: The function that the values are passed to
 * 
 * @return {Array} arr: A new array that holds values from the input that have been deemed true by the the input 
 * function
 */
 
 function filter(array, func) {
    // Create empty array
    let arr = [];
    // Iterate through each value of input array
    for(let i = 0; i < array.length; i++){
        // If truthy value is returned when the current value, its index, and the entire array respectively are passed as arguments to the input function
        if(func(array[i], i, array)){
            // Add the current value to the new array
            arr.push(array[i]);
        }
    }
    // Return the new array
    return arr; 
};
module.exports.filter = filter;

/**
 *  reject: Takes an array and a function as arguments. Designed to take the array and return a new array with values 
 * from the old array that have been 'rejected' as false based on whatever function you gave it to filter by.
 * 
 * @param {Array} array: The array over which to iterate
 * @param {Function} func: The function that the values are passed to
 * 
 * @return {Array} arr: A new array that holds values from the input that have been deemed false by the the input 
 * function
 */


function reject(array, func){
    // Create empty array
    let arr = [];
    // Iterate through all values of input array
    for(let i = 0; i < array.length; i++){
        // If input function returns falsey when current value of input array, its index, and the whole array respectively are passed
        if (!func(array[i], i, array)){
            // Add current value to the new array
            arr.push(array[i]);
        }
    }
    // Return the new array
    return arr;
};
module.exports.reject = reject;

/**
 *  partition: Takes an array and a function as arguments. Essentially combines the filter and reject functions by 
 * creating an array of 2 arrays with values from the input function. 1 of the arrays holds the values deemed truthy 
 * and one that holds the values deemed falsy - based on conditions set be the input function.
 * 
 * @param {Array} array: The array over which to iterate
 * @param {Function} func: The function that the values are passed to
 * 
 * @return {Array} arr: A new array that holds the 2 arrays
 */

function partition(array, func){
    // Create empty array to hold truthies
    let aTruthies = [];
    // Create empty array to hold falies
    let aFalsies = [];
    // For all values of the input array
    for(let i = 0; i < array.length; i++) {
        // If input function returns truthy when current value of input array, its index, and the whole array respectively are passed
        if(func(array[i], i, array)){
            // Add current value to truthies array
            aTruthies.push(array[i])
        } else {
            // Otherwise, add current value to falsies array
            aFalsies.push(array[i])
        };
    };
    // Return array with aTruthies followed by aFalsies arrays combined in 1 array
    return [aTruthies, aFalsies]
}
module.exports.partition = partition;

/**
 *  map: Takes a collection and a function as arguments. Designed to take the collection (can be array or function), 
 * process each value (along with its index and the entire collection) with the input function, and return a new 
 * collection as an array with the values that have been returned from the input function. (Keep in mind that the new
 * array will contain the same number of values as the old, so if nothing is returned for any particular value, the 
 * new array will show 'undefined' for that index)
 * 
 * @param {Object/Array} collection: Can be an object or array - The collection over which to iterate
 * @param {Function} func: The function that the values are passed to
 * 
 * @return {Array} outcome: A new array that holds - each 
 * return value of - the collection passed to the function, along with the value's index (property if its an object) and the entire 
 * collection respectively - that have been deemed true by the input function
 */

function map(collection, func) {
    // Create empty array 'outcome'
    let outcome = [];
    // If the input collection is an array
    if (Array.isArray(collection)) {
        // Iterate through all values of the array
        for (let i = 0; i < collection.length; i++) {
            // Push the return value from input function of - each value, its index, and the entire array respectively passed as arguments - to the 'outcome' array 
            outcome.push(func(collection[i], i, collection))
        }
    } else {
        // Otherwise, assume it is an object and iterate through all keys with a for in loop
        for (let key in collection) {
            // Push the return value from input function of - each value, its key, and the entire array respectively passed as arguments - to the 'outcome' array
            outcome.push(func(collection[key], key, collection))
        }
    }
    // Return the 'outcome' array
    return outcome
}
module.exports.partition = partition

/**
 *  pluck: Takes an array of objects and a property name as arguments. Designed to go through every object in that
 * array and return a new array with every value that had a property name that matched the property name taken as 
 * an argument. (Think of it like a specific type of the map function)
 * 
 * @param {Array} array: The array that's passed to the map function
 * @param {String} key: The property that is checked for in the array input
 * 
 * @return {Array} outcome (from map): A new array that holds all of the keys from the objects of the input array
 */

function pluck(array, key) {
    /* Return the output of the map function when it's given -> (the array from this function, and a function 
    * that returns a property of its only parameter - where the property matches 'key' taken as argument from this outer function) 
    */
    return map(array, function(e){return e[key]})
}
module.exports.pluck = pluck

/**
 *  every: Takes a collection and a function as arguments. Returns true if every value in the collection
 * is deemed true based on the conditions defined by the input function. Otherwise it returns false. If no input
 * function is provided, the same rules apply except the values themselves will be evaluated as truthy or falsy.
 * 
 * @param {Array/Object} collection: Can be array or object - The collection over which to iterate
 * @param {Function} func: Optional - The function that each value of collection is passed to
 * 
 * @return {Boolean} true/false: Returns true only if all tests have passed, otherwise returns false
 */

function every(collection, func) {
    // If the collection argument is an array
    if (Array.isArray(collection)) {
        // Iterate through each value of array
        for (let i = 0; i < collection.length; i++) {
            /* If the func argument is falsy and the current value of array is falsy OR if the func
            * argument is truthy (exists) and if the return value is falsy when passed the arguments
            * of - the current value of array, its index, and the entire array respectively
            */
            if (!func && !collection[i] || func && !func(collection[i], i, collection)) {
                // Return false
                return false
            }
        }
    // If the collection is an object
    } else if (typeof collection === 'object') {
        // For all keys in the object
        for (let key in collection) {
            /* If the func argument is falsy and the current key value of the object is falsy OR if the func
            * argument is truthy (exists) and the return value is falsy when passed the arguments
            * of - the current key value of the object, its key name, and the entire object respectively
            */
            if (!func && !collection[key] || func && !func(collection[key], key, collection)) {
                // Return false
                return false
            }
        }
    }
    // Return true (meaning nothing has triggered a false)
    return true
}
module.exports.every = every;

/**
 *  some: Takes a collection and a function as arguments. Returns true if any value in the collection
 * is deemed true based on the conditions defined by the input function. Otherwise it returns false. If no input
 * function is provided, the same rules apply except the values themselves will be evaluated as truthy or falsy.
 * 
 * @param {Array/Object} collection: Can be array or object - The collection over which to iterate
 * @param {Function} func: Optional - The function that each value of collection is passed to
 * 
 * @return {Boolean} true/false: Returns false only if all tests have passed, otherwise returns true
 */
 
function some(collection, func) {
    // If the collection argument is an array
    if (Array.isArray(collection)) {
        // Iterate through each value of array
        for (let i = 0; i < collection.length; i++) {
            /* If the func argument is falsy and the current value of array is truthy OR if the func
            * argument is truthy (exists) and if the return value is truthy when passed the arguments
            * of - the current value of array, its index, and the entire array respectively
            */
            if (!func && collection[i] || func && func(collection[i], i, collection)) {
                // Return true
                return true
            }
        }
    // If the collection is an object
    } else if (typeof collection === 'object') {
        // For all keys in the object
        for (let key in collection) {
            /* If the func argument is falsy and the current key value of the object is truthy OR if the func
            * argument is truthy (exists) and the return value is truthy when passed the arguments
            * of - the current key value of the object, its key name, and the entire object respectively
            */
            if (!func && collection[key] || func && func(collection[key], key, collection)) {
                // Return true
                return true
            }
        }
    }
    // Return false (meaning nothing has triggered a true)
    return false
}
module.exports.some = some;

/**
 *  reduce: Takes an array, a function, and a 'seed' value as arguments. Then it will iterate through the array and
 * pass - the 'seed' value along with each individual value of the array and its index respectively - to the function
 * (taken as argument). Each time a new value is passed, the seed value will be the return value of the previous
 * function call. If no seed is taken as argument for first iteration, the default seed value will be the first value
 * of the array argument. 
 * 
 * @param {Array} array: The array over which to iterate
 * @param {Function} func: The function that processes the individual values of the array
 * @param {Value} seed: Can be any value - will default to first value of array if not set. Wroks like the accumulator
 * would in the traditional 'reduce' method
 * 
 * @return {Value} seed: Can be any value - it will be the final 'reduced' value of the array
 */
 
function reduce(array, func, seed) {
    // Use the 'each' function to iterate through the input array and apply a function declared as the second argument
    each(array, function(val, i, array){
        // If 'seed' argument is undefined
        if(seed === undefined) {
            // Set seed to current value of array (which will be the first)
            seed = val;
        } else {
            /* Otherwise, call the input function using arguments of - 'seed's current value, the array's current 
            * index using the counter value, and the current index respectively - and assign that value to seed
            */
            seed = func(seed, val, i);
        }
    });
    // Return current value of seed
    return seed;
};
module.exports.reduce = reduce;

/**
 *  extend: Takes a single object and a spread operator for more obects as arguments. Desgined to assign properties
 * from the objects in the spread to the single object and then return a new object with all these properties combined
 * in 1 object. Uses the assign method, so properties that already exist will be updated upon each iteration through
 * the objects from the spread that are being assigned to the old object.
 * 
 * @param {Object} object: The initial object
 * @param {Array} objects: The group (or single) of objects that will have their properies assigned and updated to the 
 * initial object
 * 
 * @return {Object} obj: The new object formed via assign method 
 */
// Declare function with 'object' paramater and spread operator 'objects' for more objects
function extend(object, ...objects) {
    // Assign properties from objects in spread to first object argument, then assign the object to variable 'obj'
    var obj = Object.assign(object, ...objects);
    // Return new object 'obj'
    return obj;
}
module.exports.extend = extend