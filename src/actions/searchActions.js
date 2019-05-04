export const UPDATE_SEARCH = 'UPDATE_SEARCH';

export function updateSearch(newQuery,newCollection,newId) {
    return {
        type: 'UPDATE_SEARCH',
        payload: {
            query: newQuery,
            collection: newCollection,
            id:newId
        }
    }
}