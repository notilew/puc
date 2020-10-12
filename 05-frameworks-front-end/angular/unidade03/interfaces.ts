interface IAnimal {
    name: string;
    sound(): string;
    run(): number;
}

class Dog implements IAnimal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    run() {
        return 30;
    }

    sound() {
        return 'auau'
    }
}