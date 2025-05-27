// Basic class

class Person{
    constructor(name , address){
        this.name = name
        this.address  =address
    }

    intro(){
        console.log(`Hi i am, ${this.name}, I belongs to ${this.address}`);
    }
}

const person1  = new Person("Roshan","Delhi, JJ Colony Bawana")
person1.intro()





// implementing class for a bank object

class BankAccount{
    constructor(name,bal = 0){
        this.accountHolderName  = name
        this.balance = bal
    }

    deposite(amount){
        this.balance += amount
        console.log(`${amount} deposited!`)
    }

    withdraw(amount){
        if(this.balance >= amount){
            this.balance -= amount
            console.log(`${amount} debited!`);
        }else{
            console.log("InSufficient balance!");
        }
    }


    getBalance(){
        console.log(this.balance);
    }
}
const account1 = new BankAccount("Roshan", 5000)
account1.getBalance()
account1.deposite(12000)
account1.getBalance()
account1.withdraw(10000)
account1.getBalance()




// class and its inheritence 
class Vehicle{
    constructor(brand, model){
        this.brand = brand
        this.model = model
    }

    start(){
        console.log(`${this.brand} ${this.model} is started!`);
    }

    stop(){
        console.log(`${this.brand} ${this.model} is stoped!`);
    }
}


class Car extends Vehicle{
    constructor(brand, model, doors){
        super(brand, model)
        this.doors =doors
    }

    blowHorn(){
        console.log(`${this.brand} ${this.model} is Honking`);
    }
}




class Bike extends Vehicle{
    constructor(brand, model, cc){
        super(brand, model)
        this.cc = cc
    }

    speeding(){
        console.log(`${this.brand} ${this.model} is Speeding!`);
    }
}


const myCar = new Car("Tesla", "S Model",4)
myCar.start()
myCar.blowHorn()
myCar.stop()



const myBike = new Bike("Royal Enfield", "A Model", 300)
myBike.start()
myBike.speeding()
myBike.stop()







