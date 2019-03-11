export function writeSearchToQuery(existingQuery, queryOptions) {
    const URL = new URLSearchParams(existingQuery);
    URL.set('name', 'rick');
    URL.set('page', 1);
    return URL.toString();
}

export function writePageToQuery(existingQuery, queryOptions) {
    const URL = new URLSearchParams(existingQuery);

    URL.set('page', queryOptions.page);

    return URL.toString();
}