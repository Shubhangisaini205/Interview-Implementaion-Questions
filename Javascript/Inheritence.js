// const obj = new Object({
//     name:"Shubh"
// })

// const obj = new obj();

// const obj = {
//     name:"Shubh"
// } 

const obj = {
    name: "Shubh",
    roll:3,
    getName: function () {
        return this.name;
    },
    getRoll: function () {
        return this.roll;
    }
}


console.log(obj)


const obj1 = {
    roll: 1,
    //phle yaha search krega
    name: "Parul",
    __proto__: obj
}

console.log(obj1.getName())



const object = new Object();
console.log(object)

const array1 = new Array();
console.log(array1)


// Adding our function or property to Array

Array.prototype.show = function () {
    return this
}

const citites = ["delhi", "gangoh"];

console.log(citites.show())


Array.prototype.convertToObj = function () {
        let newObj = {};
        this.forEach((element) => {
            newObj[element] = element
        })
        return newObj
    }

console.log(citites.convertToObj())



// by constructor

function MyPrototype(name,roll){
    this.name=name
    this.roll=roll
}

MyPrototype.prototype = obj

const myproto = new MyPrototype("Priya",7)

console.log(myproto.getName())
console.log(myproto.getRoll())