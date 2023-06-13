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

Promise.all([getName(),getMobileNumber()]).then((result)=>{
    console.log(result)
})