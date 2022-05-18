function welcome(){
    let keys = Object.keys(localStorage);
    for(let key of keys) {
        console.log(`"Welcome ${key}" and your Password is ${localStorage.getItem(key)}`)
    }

}
setTimeout(welcome, 5000);
