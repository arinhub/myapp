export const addItems = items => ({
    type: 'ADD_ITEMS',
    items
});

export const searchedItems = searchedItems => ({
    type: 'SEARCHED_ITEMS',
    searchedItems
});

export const removeSearchedItems = () => ({
    type: 'REMOVE_SEARCHED_ITEMS'
});

export const selectItems = (state) => state.items;

export const searchedResult = (state) => state.searchedData;