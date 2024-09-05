const a = [1,2,3];

//document.getElementById("array").innerHTML = a.toString();
console.log(typeof(a)); //object

//for loop 
const proglan = ["Java","C#","Javascript"];
let text = "<ul>";
for(let i=0;i<a.length;i++)
{
   text = text + "<li>" + proglan[i] + "</li>" + "<br>";
}
text = text + "</ul>";
//document.getElementById("array").innerHTML = text;


//Array Methods.
let poppedElement = proglan.pop();
document.getElementById("display").innerHTML = poppedElement;

//After Popped 
document.getElementById("display").innerHTML = proglan;

//Push an element into Array
let pushElement = "React.js";
document.getElementById("display").innerHTML = proglan.push(pushElement);  //java , c#,React.js
console.log(proglan);

//Delete an element in an Array  -- leave undefined holes in an Array. 
delete  proglan[1];   //it removes c#
console.log(proglan);

console.log(proglan.length);

proglan.pop();
console.log(proglan);
console.log(proglan.length); 

//pop will affect the array length reduces its length whereas delete arrayname[index] --> this will leave undefined holes in a array.


//join like toString() but with seperator
console.log(proglan.join("-"));


proglan.pop();
 proglan.pop();

proglan.push("C#");
console.log(proglan);

proglan.push("Java");

//concat --> create new array by merging existing array
const n1 = ["Hello","I am"];
const n2 = ["Faiz",23];

console.log((n1.concat(n2)).join(" "));













