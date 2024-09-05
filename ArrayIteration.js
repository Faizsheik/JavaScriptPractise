

// forEach() -- calls a function (a callback function) once for each array element.
//accepts 3 arguments in the order Value,index , array

const arr = ["apple","orange","mango","icecream"]
let text = "<ul>";
arr.forEach(arrelements)   //takes callback function as an argument  


function arrelements(value,index,array)
{
    text = text + "<li>" + value + "</li>" + "<br>";
}

text = text + "</ul>";
document.getElementById("display").innerHTML = text;


//map()
//Creates a new array by performing a function on each array element.
//Does not execute the function for array elements without values.
//Does not change the original array.

const newarr = arr.map(addelementsfromaarr)

function addelementsfromaarr(value)
{
    return value;
}
document.getElementById("display").innerHTML = newarr ;

//flatMap()

//filter()  -- does not affects original array
const names = ["hello","world","business","l"," "];

const filterednames = names.filter(filternames)

function filternames(values)
{
    let x = values.length;
    if(x>1){return values}
}
document.getElementById("display").innerHTML = filterednames ;


//reduce()-->
// left to right and reduce to single value
//creates new array
//takes 4 argument total,value,index,array.
//It represents the return value of the previous 
//invocation of the callback function or the initial value if provided.

const a = [1,2,3,4,5];
const b = a.reduce(reduceelements,10);

function reduceelements(total,value,index,array)
{
    return total - value;
}
document.getElementById("display").innerHTML = b ;


//reduceRight()
//similar to reduce() but from right to left.
//every() --> check whether all values in the array pass the test
//some() --> check whether some values in the array pass the test

//Arrays.keys()
//Arrays.entries()
//with() --> upadtes elements in an array without changing the elements of the oridinal array.
//... sperad operator --> The "spread" operator spreads elements of iterable objects creates new array.
let iterableobjectarray = a.keys();
let t = "";
for(let x of iterableobjectarray)
{
   t = t + x + "<br>";
}
document.getElementById("display").innerHTML = t;


const a1 = ["I","hate"];
const a2 = ["You "+"so "+"much"];
const res = [...a1,...a2];
document.getElementById("display").innerHTML = res;


const array = [1, 2, 3];
const iterator = array[Symbol.iterator]();
console.log(iterator); 

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }



const faceproducts = ["moisturizer","Lipbalm","lipstick","facewash"]
let resarr = " ";
for(let x of faceproducts)
{
  resarr = resarr+x+"</br>";
}
document.getElementById("display").innerHTML = resarr;

for(let x of faceproducts.keys())
{
       console.log(x);
}


for(let x of faceproducts.values())
{
           console.log(x);
}

for(let [index,value] of faceproducts.entries())
{
    console.log(index,value);
}






//ArrayIterator

/* An iterable object is an object that must follow iterable protocol.
An iterable object has next() method which returns object with 'value' and 'done' properties.

iterable_object =
{
   next(
      return {value , done}
   )
}


* Iterable objects : Arrays,Strings,Maps etc..
* Loop used    : for..of,forEach, normal for loop.
* Methods used over Array Iteration : keys(), entries(), values().


This loop internally uses the iterator object to fetch each element and continues until all elements are processed.

Iterator: An object with a next() method that returns { value, done } objects for each element.
Iterable object: An object that implements the iterable protocol with a Symbol.iterator method returning an iterator.  --> Array

Iterator -- next,{ value, done }
Iterable -- next,{ value, done }, Symbol.iterator()

so for..of loop is construct in such a way to access that iterator object.


objects are not iterable whereas arrays are iterable by default . Hence iteration methods like entries(),keys(),values()
cannot be used with objects.It has its way to access its properties.

* Loop : for..in
* Methods : Objects.entries(),Objects.keys(),Objects.values().

SUMMARY:

for...in: Iterates over the keys of an object, including inherited properties.
Object.keys(): Returns an array of an object’s own keys.
Object.values(): Returns an array of an object’s own values.
Object.entries(): Returns an array of an object’s own key-value pairs.

Plain objects are not iterable in the way arrays are, but you can iterate over
their properties using for...in and Object methods to convert their properties into arrays for iteration.



Redeclaring Arrays
Redeclaring an array declared with var is allowed anywhere in a program.
Redeclaring or reassigning an array to const, in the same scope, or in the same block, is not allowed.
Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed.*/









