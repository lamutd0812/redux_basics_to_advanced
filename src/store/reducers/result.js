import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElementId);
    // filter method not change the old array
    return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {
                results: state.results.concat(
                    { id: Math.floor(Math.random() * 10000), value: action.result }
                )
            });

        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
};

export default reducer;