import { makeSearchURL } from '../src/make-search-url.js';
const test = QUnit.test;

QUnit.module('search url function');


test('function returns api url', assert => {
    //arrange
    const queryOptions = {
        name: 'rick',
        page: '1'
    };
    //act
    const result = makeSearchURL(queryOptions);
    const expected = 'https://rickandmortyapi.com/api/character/?name=rick&page=1';
    //assert
    assert.equal(result, expected);
});