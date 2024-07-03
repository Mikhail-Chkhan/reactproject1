import {useRef, useState} from 'react';

const useToggle = (status:boolean): [boolean, () => void] => {
    const [value, setValue] = useState(status);
    const setToggle = () => setValue(prevState => !prevState);
    return [value, setToggle]
}

const usePrevious = <T,>(initValue:T): [T | undefined, T] => {
    const currentVal = useRef<T>(initValue);
    const previousVal = useRef<T>();
    if (currentVal.current !== initValue) {
        previousVal.current = currentVal.current
        currentVal.current = initValue
    }
  return [previousVal.current, currentVal.current]
}



export {useToggle,usePrevious}