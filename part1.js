function add(a,b){
    console.log(a+b);
}

const add1 = (a,b) => {
    console.log(a+b);
}
add1(5,6)
add(5,6)

//export is easy in arrow functions we just use export whereas in normal function we use export deafault

//Ternary Operator
let income = 10;
let company = income > 10 ? "Pedro" : "Sonic"; //Shorter if-else
console.log(company);

const person = {
    name :"Sonic",
    age : 22,
    isMarried : false,
}

const { name,age,married } = person
console.log(age);
const person2 = {...person,name:"Babu"}
console.log(person2.name);

let users = ["Sonic","Nipu","Himesh"]
users.map((name)=> {
    console.log(name+"1");
})


users.filter((name)=> {
    console.log(name==="Sonic1" ? true: false)
})


