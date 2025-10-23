import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef<HTMLInputElement | null>(null); 

 const handleClick = () => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
};

  return (
    <div>
      <input ref={inputRef} type="text" />  
      <button onClick={handleClick}>Focus</button> 
    </div>
  );
}

export default MyComponent;