'use strict';

class CarCl {
    constructor(name,model,charge){
        this.name = name;
        this.model = model;
        this._charge = charge;
        this.speed = 0;
    }

    chargeTo = function(to){
        this.charge = to;
        console.log(`${this.name} is charged to ${this.charge}`)
    }

}

const EVCl = new CarCl('yatri','po','0');
EVCl.accelerate = function(){
    this.speed = this.speed+20;
    this.charge = this.charge-1;
    console.log(`${this.name} is running at ${this.speed} KM/HR  with charge of ${this.charge} `);
}
EVCl.brake = function(){
    this.speed = this.speed-10;
    this.charge = this.charge-1;
    console.log(`${this.name} is braked and  running at ${this.speed} with charge of ${this.charge} `);
}
console.log(`------------ Using ES6  class and charge as a private property--------------- `)
EVCl.chargeTo(100);
EVCl.accelerate();
EVCl.brake();