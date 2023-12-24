//  OOP
//    abstract
//    incapsulare
//    polimorfism
//    mostenire

let n = "dalqen";

class Laptop {
    constructor(name, price){
        this.n = name;
        this.price = price;
        this.count = 1;
    }

    start() {
        console.log(this.n, this.count, this.price);
    }
}

let msi = new Laptop("MSI", 20);
let asus = new Laptop("ASUS", 32);
console.log(msi);
msi.start();



let phone = {
    model: "Xiaomi",
    color: "blue",
    baterie: 5000,
    camere: 108,

    playVideo(){
        console.log("Hello");
    },
    call(){

    },
    discharge(){

    }
}

phone.model = "Model 2023";



/* let user = {
    name: "Ion",
    surname: "Perpeleac",
}

user.name = "Jenea";
delete user.surname; */


let user = {

}

user.name = "name";
delete user.name;
console.log(user);