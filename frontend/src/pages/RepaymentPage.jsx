import React, { useState, useEffect } from 'react';

const RepaymentPage = () => {
    const [repaymentAmount, setRepaymentAmount] = useState(0);
    const [paymentLink, setPaymentLink] = useState('');

    useEffect(() => {
        // Fetch repayment information from an API (dummy API for example)
        const fetchRepaymentData = async () => {
            // Here would be the API call
            // const data = await fetch('/api/repayments');
            // setRepaymentAmount(data.amount);
        };
        fetchRepaymentData();
    }, []);

    const handlePayment = () => {
        // Logic to handle M-Pesa payment
        // For example, redirect to M-Pesa payment gateway
        setPaymentLink('https://www.mpesa.com/payment-link');
    };

    return (
        <div>
            <h1>Repayment Tracking</h1>
            <p>Your repayment amount is: Ksh {repaymentAmount}</p>
            <button onClick={handlePayment}>Pay with M-Pesa</button>
            {paymentLink && <a href={paymentLink} target="_blank" rel="noopener noreferrer">Complete Payment</a>}
        </div>
    );
};

export default RepaymentPage;