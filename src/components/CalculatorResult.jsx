import React from 'react';
import PropTypes from 'prop-types';

import '../styles/resultStyles.scss';

const CalculatorResult = ({tipAmount, total, resetCalculator}) => {

    const resetFields = () =>{
        var billInput = document.getElementById('bill-total-input');
        var tipInput = document.getElementById('input-custom');
        var peopleInput = document.getElementById('people-number-input');

        if(billInput.value !==""){
            billInput.value = ""
        }

        if(tipInput.value !==""){
            tipInput.value = ""
        }

        if(peopleInput.value !==""){
            peopleInput.value = ""
        }

        resetCalculator();
    }

    return (
        <div id="calculator-result">
            <div>
                <div className='result-section'>
                    <p className="label">Tip Amount <span className='per-person'>/ person</span></p>
                    <p className="amount">${tipAmount}</p>
                </div>
                
                <div className='result-section'>
                    <p className="label">Total <span className='per-person'>/ person</span></p>
                    <p className="amount">${total}</p>
                </div>
            </div>
            
            <button id="reset-button" onClick={() => resetFields()}>RESET</button>
        </div>
    );
};


CalculatorResult.propTypes = {
    tipAmount: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    resetCalculator: PropTypes.func.isRequired
};


export default CalculatorResult;
