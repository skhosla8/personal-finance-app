// Base Imports
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextObj, Context } from '../../../context/Context';
// Icons/Images
import caretRightIcon from '../../../assets/icon-caret-right.svg';

const RecurringBillsCard = () => {
     const { setActiveNavItem } = useContext<ContextObj>(Context);

    return (
        <div className='overview__container2__recurringBills'>
              <div className='overview__container2__recurringBills__heading'>
                <div className='overview__container2__recurringBills__heading__name'>Recurring Bills</div>

                <Link to='/recurringBills'>
                    <div className='overview__container2__recurringBills__heading__details' onClick={() => setActiveNavItem('recurringBills')}>
                        <span>See Details</span>
                        <img src={caretRightIcon} alt='caret-right-icon' />
                    </div>
                </Link>
            </div>

            <div className='overview__container2__recurringBills__main'>
                <div style={{ borderLeft: '4.5px solid #277C78'}} className='overview__container2__recurringBills__main__bill'>
                    <div>Paid Bills</div>
                    <span className='overview__container2__recurringBills__main__bill__total'>$190.00</span>
                </div>

                <div style={{ marginTop: '0.9rem', marginBottom: '0.9rem', borderLeft: '4.5px solid #F2CDAC'}} className='overview__container2__recurringBills__main__bill'>
                    <div>Total Upcoming</div>
                    <span className='overview__container2__recurringBills__main__bill__total'>$194.98</span>
                 
                </div>

                <div style={{ borderLeft: '4.5px solid #82C9D7'}} className='overview__container2__recurringBills__main__bill'>
                    <div>Due Soon</div>
                   <span className='overview__container2__recurringBills__main__bill__total'>$59.98</span>
                </div>
            </div>
        </div>
    )
}

export default RecurringBillsCard;
