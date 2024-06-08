// //console.log("it's JS file")
// //alert("JS file ")
document.getElementById ("MathsAns").innerHTML = 2*4
// // mathematical fn's--interaction with CPU

console.log(4+4)
console.log(4-4)
console.log(4*4)
console.log(4/4)
console.log(4%4)
// variable initialization--interaction with RAM
let x = 10
console.log(x)
console.log("x")
let a_b_c="string type variable"

var y
var z = 11
console.log(z)

const PI =3.14
console.log (PI)
  // checking data types
  typeof(x)
  let ansType = typeof(a_b_c)
  console.log(ansType)
  typeof(y)
  typeof(z)
  typeof(PI)
  //converting data types
  let age="18"
  console.log(typeof(age))
  let convertingintonum =parseInt(age) //string into number
  console.log(typeof(convertingintonum))
  
  let marks=18
  console.log(typeof(marks))
  let convertedIntoString =marks.toString()//number to string
  console.log(typeof(marks))
  
  //string concotention
  let firstName = "Wardah"
  let lastName = "Ameen"
  let fullName = firstName+" "+lastName
  //string indexing
  console.log(firstName[5])

  console.log(2>=6)
  console.log((3>4)&&(5<=6))
  console.log((3>4)||(5<=6))
  console.log(!(true))
//conditional statements
if(10>100){
  console.log(true)
}
else
{
  console.log (false)
}
 if((3>4)&&(5<=6))
  {
    console.log(true)
  }
 else{
  console.log(false)
 } 

//loop statements
for(let i=10;i<=50; i++)
{
  console.log('forLoopRunningTimes= ${i}')
}
console.log('forLoopEnded')

let j=20
while(j>=10)
  {
    console.log('whileLoopIsExecuting')
    console.log(j)
    console.log('times')
    j++

  }