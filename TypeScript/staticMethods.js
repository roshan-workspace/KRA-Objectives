"use strict";
// static methods are kind of utility class that, we can use without creating any instance of it, 
// very usefull example of built in static method in js is Math.PI or Math.random
// here we don't have to create any instance of it 
// examples of it 
class Time {
    constructor() {
        this._minutes_in_hour = 60;
        this._hours_in_day = 24;
    }
    static get seconds_in_minute() {
        return Time._seconds_in_minute;
    }
}
Time._seconds_in_minute = 60;
const t1 = new Time();
console.log(t1._hours_in_day);
console.log(Time.seconds_in_minute);
