import React, { useState, useEffect } from 'react';
import CalculatorForm from './CalculatorForm';
import CalculatorResult from './CalculatorResult';

import '../styles/containerStyles.scss';

const CalculatorContainer = () => {

    const [bill, setBill] = useState("0.0");
    const [tip, setTip] = useState("0");
    const [people, setPeople] = useState("0");
    const [tipAmount, setTipAmount] = useState("0");
    const [total, setTotal] = useState("0.0");
    const [selected, setSelected] = useState("");

    useEffect(() => {
        var totalTip = (parseFloat(bill) * parseFloat(tip))/100;
        var totalBill = parseFloat(bill) + parseFloat(totalTip);
        setTotal(String((totalBill/people).toFixed(2)));
        setTipAmount(String((totalTip/people).toFixed(2)));
    }, [bill, tip, people]);

    const resetCalculator = () =>{
        setBill("0.0");
        setTip("0.0");
        setPeople("0");
        setTipAmount("0");
        setTotal("0.0");
        setSelected("");
    }

    return (
        <div id="container">
            <CalculatorForm setBill={setBill} setTip={setTip} setPeople={setPeople} setSelected={setSelected} selected={selected}></CalculatorForm>
            <CalculatorResult tipAmount={(bill === "0.0" || tip === "0" || people === "0") ? "0.0" : tipAmount} total={(bill === "0.0" || tip === "0" || people === "0") ? "0.0" : total} resetCalculator={resetCalculator}></CalculatorResult>
        </div>
    );
}

export default CalculatorContainer;
