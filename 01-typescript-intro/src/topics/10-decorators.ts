function classDecorator<T extends { new (...args:any[]): {}}>(
    contructor: T
) {
    return class extends contructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}




@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123'

    print() {
        console.log('Hola Mundo');
        
    }
}

console.log(SuperClass);

const myClass = new SuperClass;
console.log(myClass);

