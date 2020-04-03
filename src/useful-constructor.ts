declare class Animal {
  constructor(age: number);
  makeNoise: () => string;
}

export default class Calculator {
  add(x: number, y: number): number {
    return x + y;
  }

  sub(x: number, y: number): number {
    return x - y;
  }

  surprise(pet: Animal) {
    return pet.makeNoise();
  }
}
