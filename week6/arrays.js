
let marks1 = [40, 45, 50, 70]
console.log(marks1) 

let marks2 = `function array`

marks1 = marks2
marks1 = [23,54,25]
console.log(marks2) 
console.log(marks1) 

const anyArr = [`door`, `table`, `machine`, `redCheez`, `camera`, `bag`]
console.log(anyArr)

const sliceResult = anyArr.slice(2,4)
console.log(sliceResult)

const spliceResult = anyArr.splice(2,2, "chairs", "cupboard", `charger`)
console.log(spliceResult) 
console.log(anyArr)