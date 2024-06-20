
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { IoMdAdd } from 'react-icons/io';
import { FaMinus } from 'react-icons/fa';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'LESS_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <button className="round-button green-button" onClick={() => increaseAllocation(props.name)}>
                <IoMdAdd size='1.5em' color='white' />
            </button>
        </td>
        <td>
            <button className="round-button red-button" onClick={() => decreaseAllocation(props.name)}>
                <FaMinus size='1.5em' color='white' />
            </button>
        </td>
        <td>
            <button className="delete-button" onClick={handleDeleteExpense}>
                <TiDelete size='1.5em' />
            </button>
        </td>
    </tr>
    );
};

export default ExpenseItem;