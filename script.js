'use strict ';
const Car = function(name,model){
    this.name  = name;
    this.model = model;
    this.charge = 0;
    this.speed = 0;
}

const EV = new Car(`yatri`,`po`);
//console.log(EV);

EV.chargeTo = function(to){
    this.charge = to;
    console.log(`${this.name} is charged to ${this.charge}`)
}
EV.accelerate = function(){
        this.speed = this.speed+20;
        this.charge = this.charge-1;
        console.log(`${this.name} is running at ${this.speed} KM/HR  with charge of ${this.charge} `);
}
EV.brake = function(){
    this.speed = this.speed-10;
    this.charge = this.charge-1;
    console.log(`${this.name} is braked and  running at ${this.speed} with charge of ${this.charge} `);
}
// const aa = document.querySelector('.car');
// const bb = document.querySelector( '.accelarate');
// const cc = document.querySelector('.brake');
console.log(`------------ Using constructor--------------- `)

EV.chargeTo(100);

// aa.textContent = `${EV.name}  charge is ${EV.charge}`;
EV.accelerate();
EV.brake();
 
