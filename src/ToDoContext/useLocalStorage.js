import {useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [syncronizedItem, setSyncronizedItem] = useState(true);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
  
    useEffect(() =>{
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem) {
            localStorage.setItem('TODOS_V1', JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setSyncronizedItem(true);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      },1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [syncronizedItem])
    
  
  
    const saveItem = (itemMod) => {
      try {
        console.log(itemName);
        const parsedItem = JSON.stringify(itemMod);
        // console.log(itemMod);
        localStorage.setItem(itemName, parsedItem);
        // console.log(parsedItem);
        setItem(itemMod);
      } catch (error) {
        setError(error);
      }
      
    }

    const syncronizeItem = () => {
      setLoading(true);
      setSyncronizedItem(false);
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
      syncronizeItem,
    }
  }

export { useLocalStorage };