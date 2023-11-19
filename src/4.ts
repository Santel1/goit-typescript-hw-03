class Key {
  private signature = { key: Math.random() };

  getSignature() {
    return this.signature.key;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  public key: Key = new Key();
  protected tenants: Person[] = [];

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const house = new MyHouse();

const person = new Person(house.key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
