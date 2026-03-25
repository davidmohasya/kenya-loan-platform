import React from 'react';
import PropTypes from 'prop-types';

const LoanCard = ({ loan }) => {
    return (
        <div className="loan-card">
            <h2>{loan.title}</h2>
            <p>Amount: ${loan.amount}</p>
            <p>Interest Rate: {loan.interestRate}%</p>
            <p>Term: {loan.term} months</p>
            <p>Status: {loan.status}</p>
            <button className="apply-button">Apply Now</button>
        </div>
    );
};

LoanCard.propTypes = {
    loan: PropTypes.shape({
        title: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        interestRate: PropTypes.number.isRequired,
        term: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
};

export default LoanCard;
