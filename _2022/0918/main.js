function after2seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("after 2 seconds");
            resolve();
        }, 2000)
    })
}

function after1second() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('1 second');
            resolve();
        }, 1000)
    })
}

function myPromise(num){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(num * 3)
        }, 3000)
    })
}

async function myAsync() {
    const result = await myPromise(10);
    console.log(result);
}

myAsync();
