// src/context/FinanceContext.jsx
import { createContext, useContext, useReducer, useEffect } from 'react';

const FinanceContext = createContext();

const initialState = {
  transactions: [],
  budgets: [],
  categories: ['Food', 'Transport', 'Housing', 'Entertainment'],
  currency: 'USD'
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [action.payload, ...state.transactions] };
    case 'SET_BUDGETS':
      return { ...state, budgets: action.payload };
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
    case 'INITIALIZE': // Add this case
      return { ...state, ...action.payload };
    default:
      return state;
  }
}


export function FinanceProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load from localStorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('financeData'));
    if (savedData) dispatch({ type: 'INITIALIZE', payload: savedData });
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('financeData', JSON.stringify(state));
  }, [state]);

  return (
    <FinanceContext.Provider value={{ state, dispatch }}>
      {children}
    </FinanceContext.Provider>
  );
}

export function useFinance() {
  return useContext(FinanceContext);
}