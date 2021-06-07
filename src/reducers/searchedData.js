
const searchedResult = (state = [], action) => {
    switch (action.type) {
        case 'SEARCHED_ITEMS':
            return [
                ...action.searchedItems
            ]
        case 'REMOVE_SEARCHED_ITEMS':
            return[
                ...state.searchedItems = []
            ]
        default:
            return state
    }
};

export default searchedResult;