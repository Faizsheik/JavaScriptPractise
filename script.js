 function changeText()
{
    document.getElementById("first").innerHTML = "hello."


}




let a = 100;                      //Reclare a let variable inside the block 
//let a = 50; -- cannot do this.

function variablescope()
{
    // let a = 5;                //cannot declare a let variable inside the block more than once.
    let a = 10;
    document.getElementById("first").innerHTML = a;

}

var b = 80;      //cannot declare a block scoped variable as var 

function variablescope02()
{
    // let a = 5;                //cannot declare a let variable inside the block more than once.
    var b = 5; 
    var b =20;
    //let b = 67;               // cannot reclare a variable of block scoped again with global scope var.
    document.getElementById("first").innerHTML = b;

}
document.getElementById("second").innerHTML = b;   //100

// h = "faiz"
// let h ;   
// document.getElementById("third").innerHTML = h;     

// let h = "faiz"
// document.getElementById("third").innerHTML = h;     

var h = "faiz";
var h = "preethi";
document.getElementById("third").innerHTML = h;  

g="mithra";
var g ;

document.getElementById("third").innerHTML = g;  

var h1;
var h1;         // variable declared with 'var' can be redaclared.

// let x = "kl";
// let x = 60;   //eventhough datatypes are different cannot declare same variable



