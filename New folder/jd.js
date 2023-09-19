let data = [
  { name: "John", age: 30, city: "New York" },
  { name: "Alice", age: 25, city: "Los Angeles" },
  { name: "Bob", age: 35, city: "Chicago" },
  { name: "Eve", age: 28, city: "San Francisco" },
];

let data2 = [
  { name: "Alice", age: 25, city: "Los Angeles" },
  { name: "Bob", age: 35, city: "Chicago" },
];

let data3 = { name: "Alice", age: 25, city: "Los Angeles" };
let data4 = { name: "Alice", age: 35, city: "Chicago" };

if(data3.name===data4.name){
    console.log("they are true")
}
else if(data3.name!==data4.name){
    console.log("the are false")
}

let tamu=data4.name
let mamu=data3.name
let ramu=tamu===mamu

