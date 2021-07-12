'use strict';
class AnimalShelter {
    constructor() {
        this.cats = [];
        this.dogs = [];
    }
    enqueue(animal) {

        if (animal) {
            if (animal === 'dog') {
                this.dogs.push(animal);
                return this.dogs;
            } else if (animal === 'cat') {
                this.cats.push(animal);
                return this.cats;
            } else {
                // throw Error(`you can't enter :${animal} it's just dog or cat`);
                return null;
            }
        } else {
            return null;
        }
    }   //   throw new Error(`you must enter an animal to enqueue`);

    dequeue(pref) {
        try {
            if (pref) {
                if (pref === 'dog') {
                    return this.dogs.shift(pref);
                } else if (pref === 'cat') {
                    return this.cats.shift(pref)
                }
                else return null;
            } else {
                //   throw new Error('you have to enter the animal shelter cat or dog to try dequeue from it');
                return null;
            }
        }
        catch (e) {
            //   throw new Error(`it's an empty shelter!`,e);
            return null;
        }
    }
}
module.exports = AnimalShelter;


