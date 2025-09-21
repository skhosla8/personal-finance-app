// Base Imports 
import React, { useState, useEffect } from 'react';
// Icons/Images
import navRecurringBills from '../../../assets/icon-nav-recurring-bills.svg';
import searchIcon from '../../../assets/icon-search.svg';
import caretDown from '../../../assets/icon-caret-down.svg';
import pixelPlayground from '../../../assets/images/avatars/pixel-playground.jpg';
import serenity from '../../../assets/images/avatars/serenity-spa-and-wellness.jpg';
import spark from '../../../assets/images/avatars/spark-electric-solutions.jpg';
import aqua from '../../../assets/images/avatars/aqua-flow-utilities.jpg';
import ecoFuel from '../../../assets/images/avatars/ecofuel-energy.jpg';
import bytewise from '../../../assets/images/avatars/bytewise.jpg';
import nimbus from '../../../assets/images/avatars/nimbus-data-storage.jpg';
import elevate from '../../../assets/images/avatars/elevate-education.jpg';
import checkmark from '../../../assets/circle.png';
import exclamationmark from '../../../assets/attencion.png';

const RecurringBillsMain = () => {
    const [sortBy, setSortBy] = useState('Latest');

    const recurringBills = [
        {
            "avatar": pixelPlayground,
            "name": "Pixel Playground",
            "category": "Entertainment",
            "date": "2024-08-11T18:45:38Z",
            "amount": 10.00,
            "due": 11,
            "dueDate": '11th',
            "recurring": true
        },
        {
            "avatar": serenity,
            "name": "Serenity Spa & Wellness",
            "category": "Personal Care",
            "date": "2024-08-03T14:00:37Z",
            "amount": 30.00,
            "due": 3,
            "dueDate": '3rd',
            "recurring": true
        },
        {
            "avatar": spark,
            "name": "Spark Electric Solutions",
            "category": "Bills",
            "date": "2024-08-02T09:25:11Z",
            "amount": 100.00,
            "due": 2,
            "dueDate": '2nd',
            "recurring": true
        },
        {
            "avatar": aqua,
            "name": "Aqua Flow Utilities",
            "category": "Bills",
            "date": "2024-07-30T13:20:14Z",
            "amount": 100.00,
            "due": 30,
            "dueDate": '30th',
            "recurring": true
        },
        {
            "avatar": ecoFuel,
            "name": "EcoFuel Energy",
            "category": "Bills",
            "date": "2024-07-29T11:55:29Z",
            "amount": 35.00,
            "due": 29,
            "dueDate": '29th',
            "recurring": true
        },
        {
            "avatar": bytewise,
            "name": "ByteWise",
            "category": "Lifestyle",
            "date": "2024-07-23T09:35:14Z",
            "amount": 49.99,
            "due": 23,
            "dueDate": '23rd',
            "recurring": true
        },
        {
            "avatar": nimbus,
            "name": "Nimbus Data Storage",
            "category": "Bills",
            "date": "2024-07-21T10:05:42Z",
            "amount": 9.99,
            "due": 21,
            "dueDate": '21st',
            "recurring": true
        },
        {
            "avatar": elevate,
            "name": "Elevate Education",
            "category": "Education",
            "date": "2024-07-05T11:15:22Z",
            "amount": 50.00,
            "due": 4,
            "dueDate": '4th',
            "recurring": true
        }
    ];

    const handleSortBy = (event: any) => {
        setSortBy(event.target.value);

    };

    const sortedBills = () => {
        if (sortBy === 'Latest') {
            return recurringBills.sort((a: any, b: any) => b.due - a.due);
        } else if (sortBy === 'Oldest') {
            return recurringBills.sort((a: any, b: any) => a.due - b.due);
        } else if (sortBy === 'A to Z') {
            return recurringBills.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'Z to A') {
            return recurringBills.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortBy === 'Highest') {
            return recurringBills.sort((a, b) => b.amount - a.amount);
        } else {
            return recurringBills.sort((a, b) => a.amount - b.amount);
        }
    };

    const dueDateCompletion = () => {
              return ( <img className='recurringBills__main__container3__element__due-date__completion-icon' src={checkmark} alt='checkmark-icon' />)
    };

    const dueDateWarning = () => {
        return (<img className='recurringBills__main__container3__element__due-date__warning-icon' src={exclamationmark} alt='exclamationmark-icon' />);
    };

useEffect(() => {
    setSortBy('Latest');
},[setSortBy]);

    return (
        <div className='recurringBills'>
            <h1>Recurring Bills</h1>
            <div className='recurringBills__main'>
                <div>
                    <div className='recurringBills__main__container1'>
                        <img className='recurringBills__main__container1__icon' src={navRecurringBills} alt='recurring-bills-nav' />
                        <div className='recurringBills__main__container1__total-bills'>Total Bills</div>
                        <div className='recurringBills__main__container1__amount'>$384.98</div>
                    </div>

                    <div className='recurringBills__main__container2'>
                        <div className='recurringBills__main__container2__summary'>Summary</div>
                        <div className='recurringBills__main__container2__classification'>
                            <div style={{ color: '#696868' }}>Paid Bills</div>
                            <div className='recurringBills__main__container2__classification__amount'>4 ($190.00)</div>
                        </div>

                        <div style={{ borderTop: '0.5px solid #B3B3B3', borderBottom: '0.5px solid #B3B3B3' }} className='recurringBills__main__container2__classification'>
                            <div style={{ color: '#696868' }}>Total Upcoming</div>
                            <div className='recurringBills__main__container2__classification__amount'>4 ($194.98)</div>
                        </div>

                        <div style={{ color: '#C94736' }} className='recurringBills__main__container2__classification'>
                            <div>Due Soon</div>
                            <div className='recurringBills__main__container2__classification__amount'>2 ($59.98)</div>
                        </div>
                    </div>
                </div>

                <div className='recurringBills__main__container3'>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className='recurringBills__main__container3__search'>
                            <input className='recurringBills__main__container3__search__input' type='text' placeholder='Search bills'></input>
                            <img src={searchIcon} alt='search-icon' />
                        </div>

                        <div>
                            <label className='recurringBills__main__container3__sortBy-label' htmlFor='sort-by'>Sort by</label>

                            <select name='sort-by' className='recurringBills__main__container3__select' value={sortBy} onChange={handleSortBy}>
                                <option value='Latest'>Latest</option>
                                <option value='Oldest'>Oldest</option>
                                <option value='A to Z'>A to Z</option>
                                <option value='Z to A'>Z to A</option>
                                <option value='Highest'>Highest</option>
                                <option value='Lowest'>Lowest</option>

                                <img src={caretDown} alt='caret-down' />
                            </select>
                        </div>
                    </div>

                    <div className='recurringBills__main__container3__titles'>
                        <div className='recurringBills__main__container3__titles__bill-title'>Bill Title</div>
                        <div className='recurringBills__main__container3__titles__due-date'>Due Date</div>
                        <div className='recurringBills__main__container3__titles__amount'>Amount</div>
                    </div>

                    {sortedBills().map((element, i) => (
                        <div key={i} className='recurringBills__main__container3__element'>
                            <div className='recurringBills__main__container3__element__avatar-container'>
                                <img className='recurringBills__main__container3__element__avatar-container__avatar' src={element.avatar} alt='avatar-icon' />
                                <span className='recurringBills__main__container3__element__avatar-container__name'>{element.name}</span>
                            </div>

                            <div className='recurringBills__main__container3__element__due-date'>
                                <span style={{ color: element.name.includes('Spark') || element.name.includes('Serenity') || element.name.includes('Elevate') || element.name.includes('Pixel')? '#008000' : '#696868' }}>Monthly-{element.dueDate}</span>
                                {(element.name.includes('Spark') && dueDateCompletion()) ||
                                (element.name.includes('Serenity') && dueDateCompletion()) || 
                                (element.name.includes('Elevate') && dueDateCompletion()) || 
                                (element.name.includes('Pixel') && dueDateCompletion())}
                                {(element.name.includes('Nimbus') && dueDateWarning()) || (element.name.includes('ByteWise') && dueDateWarning())}
                            </div>

                            <div className='recurringBills__main__container3__element__amount' style={{ color: element.name.includes('Nimbus') || element.name.includes('ByteWise') ? '#ff0000' : '#696868'}}>${element.amount.toFixed(2)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default RecurringBillsMain;