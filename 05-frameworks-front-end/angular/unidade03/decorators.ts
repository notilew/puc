export function SelfDriving(classFn: Function): void {
    classFn.prototype.selfDrivable = true;
}

@SelfDriving
class SomeCar {
    private make: string;

    constructor(make: string) {
        this.make = make;
    }
}

const someCar: SomeCar = new SomeCar('Fiat');

console.log(someCar.selfDrivable);

export function Wheels(numberOfWheels: number) {
    return function(classFn: Function) {
        classFn.prototype.wheels = numberOfWheels;
    }
}

@Wheels(3)
class ExoticCar {
    private make: string;

    constructor(make: string) {
        this.make = make;
    }
}