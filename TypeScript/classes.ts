class Music {
  constructor(
    public title: string,
    public artist: string,
    public thumbnail: string = "someThumbnail.jpg"
  ) {}
}

let m1 = new Music("Tere hawale", "Amir Khan");
console.log("m1: ", m1);

// access modifiers

// public
// private
// private

class Dashbord {
  constructor(
    private key: string,
    public companyName: string,
    public noOfEmployees: number
  ) {}
}

class User extends Dashbord {
  constructor(
    public userName: string,
    public role: string,
    key: string,
    cn: string,
    noE: number
  ) {
    super(key, cn, noE);
  }

  getUserDetails() {
    console.log(`Name: $${this.userName}, Role: ${this.role}, CompanyName: ${this.companyName}`);  // we are able to access the companyName feild here because this is public feild
  }

  getPriveteKey() {
    // console.log(this.key); // here becaues the key is a private feild that can't be access here
  }
}




// readonly properties
// optional properties 
class MathCalss {
    public readonly pi: number
    constructor (pi:number,  public g?:number){
        this.pi = pi
    }

    changePiValue(){
        // this.pi = 3.15 // so this can't be here because the pi is a readonly property
    }
}


const ganit = new MathCalss(3.14, 8.1)
console.log('ganit: ', ganit);




