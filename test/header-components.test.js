const test = QUnit.test;

QUnit.module('make header components');

import { makeHeaderHtml, makeUserHtml } from '../src/header-components.js';

test('time to write a test', function(assert) {
    

    const result = makeHeaderHtml();
    const expected = /*html*/ `
    <header>
        <img src="assets/alchemy-logo.png">
        <h1 class="header-title">Book Finder</h1>
    </header>
    `;
    
    assert.htmlEqual(result, expected);
});





test('time to write a test', function(assert) {
    const user = {
        displayName: 'ughh sad',
        photoURL: 'https://i.imgur.com/22NQPiK.png'
    };

    const result = makeUserHtml(user);
    const expected = /*html*/ `
    <div class="user-profile">
        <img src="https://i.imgur.com/22NQPiK.png" alt="">
        <span>ughh sad</span>
        <button id="sign-out-button">Sign Out</button>
    </div>
    `;
    
    assert.htmlEqual(result, expected);
});
