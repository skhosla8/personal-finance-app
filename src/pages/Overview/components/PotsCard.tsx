// Base Imports
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ContextObj, Context } from '../../../context/Context';
import { Pot } from '../../../interfaces/index';
// Icons/Images
import caretRightIcon from '../../../assets/icon-caret-right.svg';
import PotIcon from '../../../assets/icon-pot.svg';

const Pots = () => {
    const { setActiveNavItem } = useContext<ContextObj>(Context);

    const pots: Pot[] = useSelector((state: RootState) => state.finances.allFinances.pots);
    const arrOfTotal = pots.map((pot: Pot) => pot.total);
    const totalSaved = arrOfTotal.reduce((acc: number, val: number) => acc + val, 0);

    const displayedPots = pots.length > 4 ? pots.slice(0, 4) : pots;

    return (
        <div className='overview__container2__pots'>
            <div className='overview__container2__pots__heading'>
                <div className='overview__container2__pots__heading__name'>Pots</div>

                <Link to='/pots'>
                    <div className='overview__container2__pots__heading__details' onClick={() => setActiveNavItem('pots')}>
                        <span>See Details</span>
                        <img src={caretRightIcon} alt='caret-right-icon' />
                    </div>
                </Link>
            </div>

            <div className='overview__container2__pots__main'>
                <div className='overview__container2__pots__main__totalSaved'>
                    <div className='overview__container2__pots__main__totalSaved__imgContainer'>
                        <img src={PotIcon} alt='pot-icon' />
                    </div>

                    <div className='overview__container2__pots__main__totalSaved__description'>
                        <div>Total Saved</div>
                        <div>${totalSaved}</div>
                    </div>
                </div>

                <div className='overview__container2__pots__main__categories'>
                    {displayedPots.map((pot: Pot, i) => (
                        <div key={i} style={{ borderLeft: `4px solid ${pot.theme}` }} className='overview__container2__pots__main__categories__category'>
                            <div className='overview__container2__pots__main__categories__category__name'>{pot.name}</div>
                            <div className='overview__container2__pots__main__categories__category__total'>${pot.total}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Pots;

