
import { useEffect, useState } from 'react'

const UseEffectComponents = () => {

    const [val, valSet] = useState(0);
    useEffect(()=>{
        const timer = window.setInterval(()=> {
            valSet((v) => v + 1);
        }, 1000);
        return () => window.clearInterval(timer);
    }, []);


  return (
    <div>{val}</div>
  )
}

export default UseEffectComponents