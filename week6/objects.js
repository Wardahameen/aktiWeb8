const obj1 = {
    num: 123,
    anyStr: "abc",
    Boolean: false,
}
const obj2 = obj1
obj2.str = "xyz"

const obj3 = { ...obj1 }
obj.anyStr = `bmw'`
console.log(obj3)
console.log(obj1)