// static methods are kind of utility class that, we can use without creating any instance of it, 

// very usefull example of built in static method in js is Math.PI or Math.random
// here we don't have to create any instance of it 

// examples of it 
class Time{
    public  static _seconds_in_minute : number = 60
    public _minutes_in_hour : number = 60 
    public _hours_in_day : number = 24
   

     static get seconds_in_minute() {
        return Time._seconds_in_minute;
    }
}

const t1 =new Time()

console.log(t1._hours_in_day);

console.log(Time.seconds_in_minute)

