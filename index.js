//Task-1:



const fruits = ["apple", "banana", "orange", "grape"]
console.log(fruits);
//adding "Kiwi" to end of fruits array  by using push() method
fruits.push("kiwi")
console.log(fruits);
//removing last fruit from fruits array using pop() method
fruits.pop();
console.log(fruits);
//adding "lemon" to beginning of the fruits array using unshift() method
fruits.unshift("lemon");
console.log(fruits);
// removing first element in fruits array using shift() method
fruits.shift();
console.log(fruits);
//Finding index of "orange"in the fruits array using the indexOf() method 
//assigning it to a variable called index
var index=fruits.indexOf("orange");
console.log(index);
//creating a new array called citrus that contains the fruits "orange"and "lemon"
var citrus =fruits.slice(2,3)
//form the fruits we  have removed lemon using shift ()
//so we added "lemon" to the citrus array using push()
citrus.push("lemon")
console.log(citrus);


//Task-2:


//Creating an object person and adding propertiesto the object:
const person={
    "name": "Akkupalli Tejaram",
    "age": 23,
    "address":"Sri Kalahasti,Andhra Pradesh",
};
console.log(person);
//updating "age" value as 30
// adding new property email(string) to person object
person.age=30;
person.email="ram@gmail.com"
console.log(person);