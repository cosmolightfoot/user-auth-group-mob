const test= QUnit.test;

QUnit.module('hash query tests');

import { writeSearchToQuery } from '../src/query-functions.js';

test('write search to query', function(assert) {
    //arrange
    const queryOptions = {
        name: 'rick'
    };

    const existingQuery = '';

    const result = writeSearchToQuery(existingQuery, queryOptions);

    const expected = 'name=rick&page=1';
    
    //act
    //assert
    assert.equal(result, expected);
});

import { writePageToQuery } from '../src/query-functions.js';

test('write page to query', assert => {
//arrange
    const queryOptions = {
        name: 'rick',
        page: 2
    };

    const existingQuery = 'name=rick&page=1';

    const expected = 'name=rick&page=2';
//act
    const result = writePageToQuery(existingQuery, queryOptions);

//assert
    assert.equal(result, expected);
});


import { readFromQuery } from '../src/query-functions.js';

test('read page from query', assert => {
//arrange
    const searchInfoFromQuery = '#?name=rick&page=2';
    //act
    const result = readFromQuery(searchInfoFromQuery);
    const expected = {
        name: 'rick',
        page: 2
    };
//assert
    assert.deepEqual(result, expected);
});