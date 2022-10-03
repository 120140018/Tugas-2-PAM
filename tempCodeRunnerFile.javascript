async function decade(){
    var promise1 = new Promise((resolve, reject) => {
        setTimeout(() =>resolve("Final Form!"), 1000)
    });
    let result = await promise1;
    console.log(result);
}
decade();



  

 

