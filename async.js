// intialize
const{resolve,reject} =require('promise');


function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
            resolve("Sulthan lag adi")
        },3000)  
    })
}


function getMobileNumber(){
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
            resolve(7907163822)
        },2000)  
    })
}
//Asynchronous = not sequence continuesly run everything
// synchronous = sequence that function executed then only another execute ,This is step by step ruuning






// Async Await
async function getDetails(){
    let name=await getMobileNumber()
    
    console.log(name)
}

getDetails()