import React from 'react';

const DashboardPage = () => {
  // Sample data for active loans and repayment status
  const loans = [
    { id: 1, amount: 3000, status: 'Active', repaymentDate: '2026-04-25' },
    { id: 2, amount: 1500, status: 'Active', repaymentDate: '2026-05-01' }
  ];

  return (
    <div>
      <h1>User Dashboard</h1>
      <h2>Active Loans</h2>
      <ul>
        {loans.map((loan) => (
          <li key={loan.id}>
            Loan Amount: ${loan.amount} - Status: {loan.status} - Repayment Date: {loan.repaymentDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
