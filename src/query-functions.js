export function writeSearchToQuery(existingQuery, queryOptions) {
    const URL = new URLSearchParams(existingQuery);
    URL.set('name', queryOptions.name);
    URL.set('page', 1);
    return URL.toString();
}

export function writePageToQuery(existingQuery, queryOptions) {
    const URL = new URLSearchParams(existingQuery);

    URL.set('page', queryOptions.page);

    return URL.toString();
}

export function readFromQuery(searchInfoFromQuery) {
    const URL = new URLSearchParams(searchInfoFromQuery.slice(1));
    const searchOptions = {
        name: URL.get('name'),
        page: parseInt(URL.get('page'))
    };
    return searchOptions;
}