import {UPDATE_SEARCH} from "../actions/searchActions";

const initialState = {
    collection: '',
    query: '',
    id: ''
}
export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SEARCH:
            let obj = [{
                collection: action.payload.collection,
                query: action.payload.query,
                id: action.payload.id
            }];
            return obj;
        default:
            return state;
    }
}