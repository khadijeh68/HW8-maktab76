let animal = {
    speaks: true,
    walk() {
    console.log("Animal walks");
    }
};

let dog = {
    __proto__: animal
};

console.log(dog);
dog.walk();