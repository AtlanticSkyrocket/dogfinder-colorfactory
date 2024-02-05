import { useState } from "react";

const useAddToArray = (initialVal = [], front = false) => {
  const [value, setValue] = useState(initialVal);

  const addElement = (newValue) => {
    if(front)
      setValue(value => [newValue,...value]);
    else
      setValue(value => [...value, newValue]);
  };
  
  // return piece of state AND a function to toggle it
  return [value, addElement];
}
export default useAddToArray;