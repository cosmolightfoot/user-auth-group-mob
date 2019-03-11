const test = QUnit.test;

QUnit.module('make html template literal');

function makeHtmlTemplate(character){
    const html= /*html*/`
        <li class="card">
            <h1>${character.name}</h1>
            <img src="${character.image}">
            <h2>Status: ${character.status}</h2>
            <h2>Species: ${character.species}</h2>
        </li>
        `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('set up basic template html', function(assert) {
    //arrange
    const character = {
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    };
    const expected= /*html*/`
    <li class="card">
        <h1>Rick Sanchez</h1>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg">
        <h2>Status: Alive</h2>
        <h2>Species: Human</h2>
    </li>
    `;

    //act
    const result = makeHtmlTemplate(character)

    //assert
    assert.htmlEqual(result, expected);
});