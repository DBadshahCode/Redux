import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Bank = () => {
    const dispatch = useDispatch();
    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
    return (
        <div className="container my-5">
            <h2>Deposit/Withdraw Money</h2>
            <button className="btn btn-danger mx-2" onClick={() => { withdrawMoney(500) }}>-</button>
            Update Balance
            <button className="btn btn-success mx-2" onClick={() => { depositMoney(1000) }}>+</button>
        </div>
    )
}

export default Bank
