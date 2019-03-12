export function makeSearchURL(queryOptions){
    if(!queryOptions) {
        return baseUrl;
    }
    
    const baseUrl = 'https://rickandmortyapi.com/api/character/';
    const url = new URL(baseUrl);
    url.searchParams.set('name', queryOptions.name);
    url.searchParams.set('page', queryOptions.page);

    return url.toString();
}