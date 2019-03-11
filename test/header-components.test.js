const test = QUnit.test;

QUnit.module('make header components');

function makeHeaderHtml() {
    const html = `
    <header>
        <img src="assets/alchemy-logo.png">
        <h1 class="header-title">Book Finder</h1>
    </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

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



function makeUserHtml(user){
    const html =  /*html*/ `
    <div class="user-profile">
        <img src="${user.photoURL}" alt="">
        <span>${user.displayName}</span>
        <button id="sign-out-button">Sign Out</button>
    </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

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
