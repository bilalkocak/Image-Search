import {UPDATE_SEARCH} from "../actions/searchActions";

export default function searchReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_SEARCH:
            return action.payload.collection;
        default:
            return state;
    }
}