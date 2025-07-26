
import{ useState } from 'react';
export default function counter() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('0');
    function onTextChange(e){
        let v = e.target.value;
        setValue(v)
        console.log(` ${v} $ is qual to ${v*35.5}Bath`); // Debugging output
    }


    return (
        <> 
             <input onChange={(e)=>onTextChange(e)}></input>
             <p>You type {value.length} char </p> 
            <p>{value}$ to {value*35.5}THB</p>
            <p>{value}^C to {(value*9/5)+32}^F</p>

             <button onClick={()=>setCount(count-1) }style={{"margin-right":'5px'}}>-</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>+</button>
            <p> You Click {count} time</p>
        </>
    );
}