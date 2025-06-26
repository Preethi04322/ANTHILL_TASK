import React, { useState } from 'react';
import './LoanCalculator.css';

export default function LoanCalculator() {
    const [amount, setAmount] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [period, setPeriod] = useState('');
    const [interest, setInterest] = useState('');
    const [monthly, setMonthly] = useState(null);

    const calculateLoan = () => {
        const principal = parseFloat(amount) - parseFloat(downPayment);
        const rate = parseFloat(interest) / 100 / 12;
        const months = parseInt(period) * 12;

        const emi =
            (principal * rate * Math.pow(1 + rate, months)) /
            (Math.pow(1 + rate, months) - 1);

        setMonthly(emi.toFixed(2));
    };

    const resetForm = () => {
        setAmount('');
        setDownPayment('');
        setPeriod('');
        setInterest('');
        setMonthly(null);
    };

    return (
        <div className="loan-calculator">
            <h3><span className="highlight">▍</span> Loan Calculator</h3>
            <div className="loan-grid">
                <input
                    type="number"
                    placeholder="Total Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Down Payment"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Ammonization period (Years)"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Interest (%)"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                />
            </div>
            <div className="loan-buttons">
                <button className="btn primary" onClick={calculateLoan}>Calculate</button>
                <button className="btn outline" onClick={resetForm}>Reset</button>
            </div>
            {monthly && <p className="result">Monthly EMI: ₹ {monthly}</p>}
        </div>
    );
}