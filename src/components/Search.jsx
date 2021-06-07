/* eslint-disable array-callback-return */
import React, {memo, useEffect, useState} from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {searchedItems, selectItems, removeSearchedItems} from '../actions';
import { ToastContainer, toast } from 'react-toastify';
const Search = (handleBack) => {
    const dispatch = useDispatch();
    const items= useSelector(selectItems, shallowEqual);
    const [value, setValue] = useState('');
    const getSearchQuery = (data) => {
        setValue(data)
        if (data.length === 0) dispatch(removeSearchedItems());
    };
    const searchData = () => {
        if (value.length === 0) return;
        let newArray = items.filter(el => el.name.match(new RegExp(value, 'gi')));
        if (newArray.length === 0) toast.dark("Can't find any movies with this name. Please try some other movies!", {autoClose: 3000,});
        dispatch(searchedItems(newArray));
    };
    const onEnter = (event) => {
        if (event.charCode === 13 || event.which === 13 || event.code === 'Enter') {
            searchData();
        }
    }
    useEffect(() => {
        if (handleBack) {
            setValue('');
            dispatch(removeSearchedItems())
        }
    }, [handleBack, dispatch])
return (
    <div className={'search_field'}>
        <input name="query" value={value} 
            placeholder="Search movies!" 
            onChange={(e) => getSearchQuery(e.target.value)}
            onKeyPress={(e) => onEnter(e)}
        />
        <button type="button" onClick={searchData}>
            <img className="search-icon" 
            src={process.env.PUBLIC_URL + '/assets/search.png'} 
            alt="Search" />
        </button>
        <ToastContainer />
    </div>
);
};

export default memo(Search);