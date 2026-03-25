import React from 'react';
import { useState, useEffect } from 'react';

const AdminDashboard = () => {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        // Fetch loans from API endpoint
        fetch('/api/loans')
            .then(response => response.json())
            .then(data => setLoans(data));
    }, []);

    const handleApproval = (loanId) => {
        // Logic for approving a loan
        console.log(`Loan ${loanId} approved`);
    };

    const handleRejection = (loanId) => {
        // Logic for rejecting a loan
        console.log(`Loan ${loanId} rejected`);
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Loan ID</th>
                        <th>Applicant Name</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {loans.map(loan => (
                        <tr key={loan.id}>
                            <td>{loan.id}</td>
                            <td>{loan.applicantName}</td>
                            <td>{loan.amount}</td>
                            <td>{loan.status}</td>
                            <td>
                                <button onClick={() => handleApproval(loan.id)}>Approve</button>
                                <button onClick={() => handleRejection(loan.id)}>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;