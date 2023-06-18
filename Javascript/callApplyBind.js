//App,ly, call and bind;

let userDetails={
    name:"Shubh",
    Age:25,
    Designation:"Software Engineer",
   
}

let printDetails=function(state,country){
    console.log(this.name+" "+state+" "+country)
}


let userDetails2={
    name:"Parul",
    Age:25,
    Designation:"Software Engineer",
}

//Call
printDetails.call(userDetails,"Delhi","India")
printDetails.call(userDetails2,"Delhi","India")

//Apply
printDetails.apply(userDetails,["Delhi","India"])
printDetails.apply(userDetails2,["Delhi","India"])

//Bind

let newfunc =printDetails.bind(userDetails,"Delhi","India")
newfunc()