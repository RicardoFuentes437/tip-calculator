import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/formStyles.scss';

const CalculatorForm = ({setBill, setTip, setPeople, setSelected, selected}) => {

    const [error, setError] = useState(false);

    const handleNumberChange = (event) => {
        var b = parseFloat(event.target.value);
        setBill(b);
    }

    const handlePeopleChange = (event) => {
        if(event.target.value === "0"){
            setError(true);
        }else{
            var p = parseFloat(event.target.value);
            setPeople(p);
            setError(false)
        }
    }

    const handleTipChange = (event) => {
        var t = parseFloat(event.target.value);
        setTip(t);
        setSelected(event.target.id);
    }

    const selectedStyle = {
        backgroundColor: "hsl(172, 67%, 45%)"
    }

    return (
        <div id="calculator-form">
            <div className='form-section'>
                <label className='input-label'>Bill</label>
                <input type="text" onChange={handleNumberChange} id="bill-total-input" placeholder='0'></input>
            </div>

            <div className='form-section'>
                <label className='input-label'>Select Tip %</label>
                <div id="tip-options">
                    <button onClick={handleTipChange} id="button-5" value={5} style={ selected === "button-5" ? selectedStyle : styles.button}>5%</button>
                    <button onClick={handleTipChange} id="button-10" value={10} style={ selected === "button-10" ? selectedStyle : styles.button }>10%</button>
                    <button onClick={handleTipChange} id="button-15" value={15} style={ selected === "button-15" ? selectedStyle : styles.button }>15%</button>
                    <button onClick={handleTipChange} id="button-25" value={25} style={ selected === "button-25" ? selectedStyle : styles.button }>25%</button>
                    <button onClick={handleTipChange} id="button-50" value={50} style={ selected === "button-50" ? selectedStyle : styles.button }>50%</button>
                    <input type="text" onChange={handleTipChange} id="input-custom" placeholder='Custom'></input>
                </div>
            </div>
            
            <div className='form-section'>
                <div id="people-info">
                    <label className='input-label'>Number of People</label>
                    <span id="error-message" style={error === false ? {visibility: "hidden"} : {visibility: "visible"}}>Can't be zero</span>
                </div>
                <input type="text" onChange={handlePeopleChange} id="people-number-input" placeholder='0' style={error === false ? {border: "2px solid white"} : {border: "2px solid red"}}></input>
            </div>
        </div>
    );
};


CalculatorForm.propTypes = {
    setBill: PropTypes.func.isRequired,
    setTip: PropTypes.func.isRequired,
    setPeople: PropTypes.func.isRequired,
    setSelected: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired
};


export default CalculatorForm;
