// Base Imports 
import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Balance } from '../../../interfaces/index';
import { ContextObj, Context } from '../../../context/Context';
// Components
import PotsCard from './PotsCard';
import TransactionsCard from './TransactionsCard';
import BudgetsCard from './BudgetsCard';
import RecurringBillsCard from './RecurringBillsCard';

const OverviewMain = () => {
    const balance: Balance = useSelector((state: RootState) => state.finances.allFinances.balance);

    const { setActiveNavItem } = useContext<ContextObj>(Context);

    useEffect(() => {
        setActiveNavItem('overview');
    }, [setActiveNavItem]);

    return (
        <div className='overview'>
            <h1>Overview</h1>
            <div className='overview__container1'>
                <div className='overview__container1__balance'>
                    <div>Current Balance</div>
                    <div>${balance.current.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                </div>

                <div className='overview__container1__income'>
                    <div>Income</div>
                    <div>${balance.income.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                </div>

                <div className='overview__container1__expenses'>
                    <div>Expenses</div>
                    <div>${balance.expenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                </div>
            </div>

            <div className='overview__container2'>
                <div>
                    <PotsCard />

                    <TransactionsCard />
                </div>

                <div>
                    <BudgetsCard />

                    <RecurringBillsCard />
                </div>
            </div>
        </div>
    )
};

export default OverviewMain; 