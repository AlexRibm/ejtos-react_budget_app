import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    useEffect(() => {
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        if (newBudget < totalExpenses) {
            window.alert(`The budget cannot be less than the total expenses (${currency}${totalExpenses})`);
            setNewBudget(budget);  // Revert to the last valid budget
        } else if (newBudget > 20000) {
            window.alert(`The budget must be between the total expenses (${currency}${totalExpenses}) and ${currency}20000`);
            setNewBudget(budget);  // Revert to the last valid budget
        } else if (newBudget !== budget) {
            dispatch({ type: 'SET_BUDGET', payload: newBudget });
        }
    }, [newBudget, expenses, budget, dispatch, currency]);

    const handleBudgetChange = (event) => {
        const value = Number(event.target.value);
        setNewBudget(value);
    };


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange}
                className="form-control mt-2"
            />
        </div>
    );
};

export default Budget;