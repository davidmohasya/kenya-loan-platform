import create from 'zustand';

const useLoanStore = create((set) => ({
  loans: [],
  addLoan: (loan) => set((state) => ({ loans: [...state.loans, loan] })),
  removeLoan: (id) => set((state) => ({ loans: state.loans.filter(loan => loan.id !== id) })),
  clearLoans: () => set({ loans: [] })
}));

export default useLoanStore;
