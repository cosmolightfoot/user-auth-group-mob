import { objectToArray } from '../src/object-to-array.js';
const test = QUnit.test;

QUnit.module('object => array test');

test('converts firebase object to an array with mapped keys', assert => {
    //arrange
    const object = {
        2: {
            id: 2, 
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg", 
            species: "Human",
            status: "Alive", 
            title: "Morty Smith"
        },
        7: {
            id: 7, 
            image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
            species: "Human", 
            status: "unknown", 
            title: "Abradolf Lincler"
        },
        20: {
            id: 20,
            image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
            species: "Human",
            status: "unknown",
            title: "Ants in my Eyes Johnson"
        }
    };
    //act
    const result = objectToArray(object);
    const expected = [object[2], object[7], object[20]];
    //assert
    assert.deepEqual(result, expected);
});