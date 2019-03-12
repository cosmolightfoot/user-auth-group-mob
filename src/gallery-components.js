import { auth, favoritesByUserRef } from '../src/firebase.js';

export function makeHtmlTemplate(character){
    const html= /*html*/`
        <li class="card">
        <span class="favorite">☆</span>
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
        const favoriteStar = dom.querySelector('.favorite');
        favoriteStar.addEventListener('click', () => {
            const userId = auth.currentUser.uid;
            const userFavoritesRef = favoritesByUserRef.child(userId);
            const userFavoriteCharacterRef = userFavoritesRef.child(character.id);
            userFavoriteCharacterRef.set({
                id: character.id,
                title: character.name,
                image: character.image,
                status: character.status,
                species: character.species
            });
        });
        characterList.appendChild(dom);


    });
}

function clearRows(){
    while(characterList.children.length){
        characterList.lastElementChild.remove();
    }
}