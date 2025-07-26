
import { useRef,useState } from "react"
import './bmi.css';


function BMItext({bmi}){
    if (bmi <18.5){
        return <><h1>Your BMI is {bmi} Underweight.</h1>
        <img src="under.jpg" height={300} alt="Underweight"/></>
    } else if (bmi < 24.9) {
        return<> <h1>Your BMI is {bmi} Normal weight.</h1>
        <img src="normal.jpg" height={200} alt="Normalweight"/></>
    }else if (bmi < 30){
        return <><h1>Your BMI is {bmi} Overweight.</h1>
        <img src="over.jpg"height={200} alt="Overweight"/></>
    }else {
        return <><h1>Your BMI is {bmi} Obesity.</h1>
        <img src="ob.jpg" height={200}alt="Obesity"/></>
    }
}

export default function BMI() {
    const weight =useRef(null);
    const height =useRef(null);
    const [bmi, setBmi] = useState(0.0);
    function calBmi(){
        let w = parseFloat(weight.current.value);
        let h = parseFloat(height.current.value) / 100;
        setBmi(w / (h * h));}
    return(
    <>
        <h1>BMI Calculator</h1>
        Weight :<input ref={weight}/>Kg.<br/>
        Height :<input ref={height}/>Cm.<br/>
        <br/>
        <button onClick={calBmi}>Calculate</button>
        <p>Bmi value:{bmi.toFixed(2) }</p>
        <BMItext bmi={bmi.toFixed(2)} />
    
    </>)
}



