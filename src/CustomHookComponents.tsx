import { useState } from 'react'

function useLocalStorage<T>(key: string, initialValue: T){
    const [storedValue, setstoredValue] = useState<T>(()=>{
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn('Error message', error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) =>{
        try {
            const valueToStore =
            value instanceof Function ? value(storedValue) : value;
            setstoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch(error){
            console.warn('Error message', error);
        }
    };
    return [storedValue, setValue] as const;

}


export default useLocalStorage;