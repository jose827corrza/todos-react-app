import {useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
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
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      },1500);
    }, [])
    
  
  
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
  
    return {
      item,
      saveItem,
      loading,
      error,
    }
  }

export { useLocalStorage };