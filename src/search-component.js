import { writeSearchToQuery } from '../src/query-functions.js';

const formNode = document.getElementById('form');

//when we click, we want to get the name
formNode.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formNode);
    const existingQuery = window.location.hash.slice(1);
    const searchOption = {
        name: formData.get('name')
    };
    const newQuery = writeSearchToQuery(existingQuery, searchOption);

    window.location.hash = newQuery;
});