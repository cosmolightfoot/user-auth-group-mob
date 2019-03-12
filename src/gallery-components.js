export function makeHtmlTemplate(character){
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

const characterList = document.getElementById('character-list');
export default function loadGallery(characterArray) {
    clearRows();
    characterArray.forEach(character => {
        const dom = makeHtmlTemplate(character);
        characterList.appendChild(dom);
    });
}

function clearRows(){
    while(characterList.children.length){
        characterList.lastElementChild.remove();
    }
}