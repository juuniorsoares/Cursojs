
class Vehicle { 
    constructor({id, latitude, longitude}){ 
        this.id = id; 
        this.position = {latitude, longitude}; 
        this.status = "unavailable"; 
    };
    set position({latitude, longitude}) { 
        this.time = Date.now(); 
        this.longitude = longitude; 
        this.latitude = latitude; 
    };
    get position() { 
        return { 
            latitude: this.latitude, 
            longitude: this.longitude 
        }; 
    };
};

class Bus extends Vehicle {
    constructor({assentos,id, latitude, longitude}){
        super({id, latitude, longitude})

        this.assentos = assentos;
    }
}

let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
vehicle.position = {longitude: 18.193121, latitude: 59.378654};
console.log(vehicle.position);
let bus = new Bus({assentos: 10, longitude: 19.0987, latitude: 12.88776, id:"A9PO09"})
console.log(bus.id)
console.log(bus.latitude)




// class AlmostEmptyClass { 
//     constructor(sth) { 
//         console.log(sth); 
//     }; 
//     sayHi() { 
//         console.log("Hi!") 
//     }; 
// }; 
//     class ExtendedClass extends AlmostEmptyClass {
//         constructor(name) {
//             super("I’m super ...");
//             this.name = name;
//         };
//     sayHi() { 
//         console.log(`Hi ${this.name}!`); 
//     };
//     newHi() {
//         this.sayHi();
//     }
//     oldHi() {
//         super.sayHi();
//     };
// };
// let obj = new ExtendedClass("Bob"); // -> I’m super ...
// obj.sayHi();    // -> Hi Bob!
// obj.newHi();    // -> Hi Bob!
// obj.oldHi();    // Hi!

