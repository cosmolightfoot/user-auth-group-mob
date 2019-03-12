import loadHeader from './header-components.js';
import loadGallery from './gallery-components.js';
import { readFromQuery } from './query-functions.js';
import { makeSearchURL } from './make-search-url.js';
import { auth } from '../src/firebase.js';

import './search-component.js';

loadHeader();

window.addEventListener('hashchange', loadQuery);

auth.onAuthStateChange(() => {
    loadQuery();
});

function loadQuery() {
    const existingQuery = window.location.hash;
    const queryOptions = readFromQuery(existingQuery);

    const apiURL = makeSearchURL(queryOptions);
    fetch(apiURL).then(response => response.json()).then(body => {
        loadGallery(body.results);
        
    });
}

loadQuery();