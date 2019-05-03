export const UPDATE_SEARCH = 'UPDATE_SEARCH';

export function updateSearch(newQuery,newCollection) {
    return {
        type: 'UPDATE_SEARCH',
        payload: {
            query: newQuery,
            collection: newCollection
        }
    }
}