type Person = {
    firstName: string;
    lastName: string;
    country: string;
};

function createPerson(): Person {
    return {
        firstName: 'Wellington',
        lastName: 'Felix',
        country: 'Brasil'
    };
}

const person: Person = createPerson();

console.log(person);