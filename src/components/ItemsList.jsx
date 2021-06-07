/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo, useRef, useState, useEffect, useCallback} from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { addItems, selectItems, searchedResult} from '../actions';

import Item from './Item';

const ItemsList = () => {
    const [count, setCount] = useState(1);
    const items= useSelector(selectItems, shallowEqual);
    const searchedData = useSelector(searchedResult);
    const layoutRef= useRef({});
    layoutRef.current = count;
    const dispatch = useDispatch();
    
    const [searchRenderer, setSearchRenderer] = useState(false);
    const setCounter = () => {
      setCount(layoutRef.current + 1);
    };

    const handleScroll = useCallback((event) => {
      event.preventDefault();
        const target = event.target;
        if(target.body.scrollHeight - window.pageYOffset === target.documentElement.clientHeight) {
          if (layoutRef.current < 3) {
            setCounter();
            getData();
          } else {
          }
        }
    }, []);

    const getData = () => {
        fetch(`API/CONTENTLISTINGPAGE-PAGE${layoutRef.current}.json`
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        dispatch(addItems(myJson.page['content-items'].content));
      })
    }

    useEffect(() => {
      getData();
    },[]);

    useEffect(() => {
      setSearchRenderer(true)
    }, [searchedData])

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [handleScroll]);

    return (
        <div className={'item-list'}>
            {searchRenderer && (
               searchedData.map((searchItem, index) => (
                  <Item key={index} {...searchItem}/>
              ))
            )}
            {items.map((item, index) => (
                <Item key={index} {...item}/>
            ))}

        </div>
    )
}

export default memo(ItemsList);