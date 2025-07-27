import { useRef, useState } from "react";
import './bmi.css';

function BMItext({ bmi }) {
    if (bmi < 18.5) {
        return (
            <>
                <h1>Your BMI is {bmi} Underweight.</h1>
                <img className="bmi-image" src="under.jpg" alt="Underweight" />
            </>
        );
    } else if (bmi < 24.9) {
        return (
            <>
                <h1>Your BMI is {bmi} Normal weight.</h1>
                <img className="bmi-image" src="normal.jpg" alt="Normal weight" />
            </>
        );
    } else if (bmi < 30) {
        return (
            <>
                <h1>Your BMI is {bmi} Overweight.</h1>
                <img className="bmi-image" src="over.jpg" alt="Overweight" />
            </>
        );
    } else {
        return (
            <>
                <h1>Your BMI is {bmi} Obesity.</h1>
                <img className="bmi-image" src="ob.jpg" alt="Obesity" />
            </>
        );
    }
}

export default function BMI() {
    const weight = useRef(null);
    const height = useRef(null);
    const [bmi, setBmi] = useState(0.0);

    function calBmi() {
        let w = parseFloat(weight.current.value);
        let h = parseFloat(height.current.value) / 100;
        if (!isNaN(w) && !isNaN(h) && h > 0) {
            setBmi(w / (h * h));
        } else {
            setBmi(0);
        }
    }

    return (
        <div className="bmi-container">
            <h1>BMI CALCULATE</h1>

            <div className="bmi-input-group">
                <label className="bmi-input-label">Weight (Kg):</label>
                <input type="number" ref={weight} placeholder="Enter your weight" />
            </div>

            <div className="bmi-input-group">
                <label className="bmi-input-label">Height (Cm):</label>
                <input type="number" ref={height} placeholder="Enter your height" />
            </div>

            <button onClick={calBmi}>Calculate</button>

            <p>Bmi value: {bmi.toFixed(2)}</p>

            <BMItext bmi={bmi.toFixed(2)} />
        </div>
    );
}




