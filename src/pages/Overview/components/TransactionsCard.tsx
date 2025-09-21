// Base Imports
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ContextObj, Context } from '../../../context/Context';
import { Transaction } from '../../../interfaces/index';
// Icons/Images
import caretRightIcon from '../../../assets/icon-caret-right.svg';

const TransactionsCard = () => {
    const { setActiveNavItem } = useContext<ContextObj>(Context);

    const transactions = useSelector((state: RootState) => state.finances.allFinances.transactions);
    const firstFiveTransactions = transactions.slice(0, 5);

    const formatTransactionDate = (item: Transaction) => {
        const date = new Date(item.date).toDateString().split(' ');

        return date[2] + ' ' + date[1] + ' ' + date[3];
    };

    return (
        <div className='overview__container2__transactions'>
            <div className='overview__container2__transactions__heading'>
                <div className='overview__container2__transactions__heading__name'>Transactions</div>

                <Link to='/transactions'>
                    <div className='overview__container2__transactions__heading__details' onClick={() => setActiveNavItem('transactions')}>
                        <span>View All</span>
                        <img src={caretRightIcon} alt='caret-right-icon' />
                    </div>
                </Link>
            </div>

            {firstFiveTransactions?.map((item: Transaction, i) => (
                <div key={i} className='overview__container2__transactions__main'>
                    <div className='overview__container2__transactions__main__avatarContainer'>
                        <img src={item.avatar} alt='transaction-avatar' />
                        <span>{item.name}</span>
                    </div>

                    <div className='overview__container2__transactions__main__details'>
                        <div className='overview__container2__transactions__main__details__transaction' style={item.amount > 0 ? { color: '#277C78' } : { color: '#201F24' }}>{item.amount > 0 ? '+$' + item.amount.toFixed(2) : '-$' + (item.amount).toFixed(2).replace('-', '')}</div>
                        <div className='overview__container2__transactions__main__details__date'>{formatTransactionDate(item)}</div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default TransactionsCard;