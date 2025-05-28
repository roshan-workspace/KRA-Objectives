"use strict";
class Music {
    constructor(title, artist, thumbnail = "someThumbnail.jpg") {
        this.title = title;
        this.artist = artist;
        this.thumbnail = thumbnail;
    }
}
let m1 = new Music("Tere hawale", "Amir Khan");
console.log("m1: ", m1);
// access modifiers
// public
// private
// private
class Dashbord {
    constructor(key, companyName, noOfEmployees) {
        this.key = key;
        this.companyName = companyName;
        this.noOfEmployees = noOfEmployees;
    }
}
class User extends Dashbord {
    constructor(userName, role, key, cn, noE) {
        super(key, cn, noE);
        this.userName = userName;
        this.role = role;
    }
    getUserDetails() {
        console.log(`Name: $${this.userName}, Role: ${this.role}, CompanyName: ${this.companyName}`); // we are able to access the companyName feild here because this is public feild
    }
    getPriveteKey() {
        // console.log(this.key); // here becaues the key is a private feild that can't be access here
    }
}
// readonly properties
// optional properties 
class MathCalss {
    constructor(pi, g) {
        this.g = g;
        this.pi = pi;
    }
    changePiValue() {
        // this.pi = 3.15 // so this can't be here because the pi is a readonly property
    }
}
const ganit = new MathCalss(3.14, 8.1);
console.log('ganit: ', ganit);
