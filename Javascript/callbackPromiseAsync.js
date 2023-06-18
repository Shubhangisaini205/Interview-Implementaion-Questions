// Async Js Programming

let datas = [
    { name: "Shubh", profession: "Software Engineer" },
    { name: "Parul", profession: "Software Engineer" }
]

function getDatas() {
    setTimeout(() => {
        let output = ""
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`

        })
        document.body.innerHTML = output
    }, 1000)

    // if I am giving 1sec to this this will run first and create will run later an dwe will get onlu shub and parul, for this we can use multiple things  by using call back also promise, async
}

// function CreateData(newdata){
//     setTimeout(()=>{
//         datas.push(newdata)
//         getDatas();
//         // getDatas call when all the element pushed in the datas
//     },2000)
// }

//Callback

// function CreateData(newdata){
//     setTimeout(()=>{
//         datas.push(newdata)
//         getDatas();
//         // getDatas call when all the element pushed in the datas
//     },2000)
// }

// CreateData({name:"Bholu",profession:"software engineer"},getDatas)




// Promise
function CreateData(newdata) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newdata)
            let error = false;
            if (!error) {
                resolve()
            } else {
                reject("kuch sahi nhi h ")
            }
        }, 2000)
    })

}
// CreateData({ name: "Bholu", profession: "software engineer" }).then(getDatas).catch((err)=>console.log(err))


//Async await;

async function start(){
    await CreateData({ name: "Bholu", profession: "software engineer" });
    getDatas()
}
start()


