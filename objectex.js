
// const cars = ["volvo","IBM","Lamboureg"];

// const student = 
// {
//     Fisrtname : "faiz banu",
//     Lastname : "S",
//     Age : 22,
//     Rollno: "22mx206",
//     Voteeligible :  function()
//     {
//          if(this.Age>=18)
//          {
//             return "Eligible for vote";
//          }
//          else
//          {
//             return "Not eligible for vote";
//          }
//     }

// }

const studentage = 
{
   Faizbanu : 23,
   Syed : 23,
   Jesi : 32,
   Jeni : 21,
   Basera : 17
}

// let display_Studage = "";
// for(let [name,age] of Object.entries(studentage))
// {
//    display_Studage += name +":"+ age + "<br>";
// }
// document.getElementById("studentAge").innerHTML = display_Studage;

let ul = document.getElementById("studentAgeList");

for(let [name,age] of Object.entries(studentage))
{
   let li = document.createElement("li");
   li.innerHTML = name +":" + age;
   ul.appendChild(li);  

}


// const studlist = Object.values(student); 
// document.getElementById("student").innerHTML = "The student " +student.Fisrtname + " is "+student.Voteeligible()+".";
// document.getElementById("studentList").innerHTML = "The student details are:  " + studlist;  // This will not print value of voteeleiigible function





// console.log(student.Voteeligible());



// let text = " ";
//  for(let x of cars)
// {
//    text += x + " ";
// }

// console.log(text);
// document.getElementById("car").innerHTML = text;
