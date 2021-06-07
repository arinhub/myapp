import React, {memo, useState, useEffect} from 'react';
import { useSelector, shallowEqual} from 'react-redux';
import {searchedResult} from '../actions';
import Search from './Search';

const Header = () => {
    const searchedData = useSelector(searchedResult, shallowEqual);
    const [isSearchDataAvailable, setIsSearchDataAvailable] = useState(false);
    const [back, goBack] = useState(false);

    useEffect(() => {
        if (searchedData.length > 0) {
            setIsSearchDataAvailable(true)
        } else {
            setIsSearchDataAvailable(false)
        }
    }, [searchedData]);

    const handleClick = () => {
        if (!isSearchDataAvailable) return false;
        goBack(true);
    }

    return (
        <div className={'nav-bar'}>
            <div className={'back-button-container'}>
                <img src={process.env.PUBLIC_URL + '/assets/Back.png'} 
                alt='back' 
                className={`back-button ${!isSearchDataAvailable && 'blur'}`}
                onClick={handleClick}
                />
            </div>
            <Search handleBack={back}/>
        </div>
    );
};

export default memo(Header)