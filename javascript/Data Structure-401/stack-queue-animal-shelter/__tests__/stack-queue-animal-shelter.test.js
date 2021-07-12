'use strict';

const AnimalShelter = require('../stack-queue-animal-shelter');

let animalShelter_1 = new AnimalShelter();


describe('Test animalShelter_1', () => {

    it('should return null when the animal not a dog or cat', () => {

        let animal_1 = '';
        // animalShelter_1.enqueue(animal_1);
        expect(animalShelter_1.enqueue(animal_1)).toBe(null);
        // console.log('Result', animalShelter_1);

    });

    it('should push dog animal inside this.dogs', () => {

        let animal_1 = 'dog';
        let animal_2 = 1;

        expect(animalShelter_1.enqueue(animal_1)).toEqual(['dog']);
        console.log('Result', animalShelter_1);

        expect(animalShelter_1.enqueue(animal_2)).toBe(null);
        console.log('Result', animalShelter_1);

    });

    it('should push cat animal inside this.cats', () => {

        let animal_1 = 'cat';
        let animal_2 = 'dog';
        let animal_3 = 'caw';


        expect(animalShelter_1.enqueue(animal_3)).toBe(null);
        expect(animalShelter_1.enqueue(animal_1)).toEqual(['cat']);
        expect(animalShelter_1.enqueue(animal_2)).toEqual(['dog', 'dog']);
    });


    it('should return null  when the pref not a dog or cat', () => {

        let pref = '';

        expect(animalShelter_1.dequeue(pref)).toBe(null);
    });

    it('should shift dog to the 1st index when the pref dog', () => {

        let pref = 'dog';

        expect(animalShelter_1.dequeue(pref)).toEqual('dog');
    });

    it('should shift cat to the 1st index when the pref cat', () => {
        //arrange
        let pref = 'cat';
        //act
        //animalShelter_1.enqueue(pref);
        //assert
        expect(animalShelter_1.dequeue(pref)).toEqual('cat');
    });
});