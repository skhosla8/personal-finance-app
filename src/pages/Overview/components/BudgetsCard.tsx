// Base Imports
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextObj, Context } from '../../../context/Context';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Budget } from '../../../interfaces/index';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// Icons/Images
import caretRightIcon from '../../../assets/icon-caret-right.svg';

const BudgetsCard = () => {
    const { setActiveNavItem } = useContext<ContextObj>(Context);

    const budgets: Budget[] = useSelector((state: RootState) => state.finances.allFinances.budgets);

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        datasets: [
            {
                data: [50, 750, 75, 100],
                backgroundColor: [
                    'rgba(39, 124, 120, 1)',
                    'rgba(130, 201, 215, 1)',
                    'rgba(242, 205, 172, 1)',
                    'rgba(98, 96, 112, 1)'
                ],
                borderColor: [
                    'rgba(39, 124, 120, 1)',
                    'rgba(130, 201, 215, 1)',
                    'rgba(242, 205, 172, 1)',
                    'rgba(98, 96, 112, 1)'
                ]
            }
        ]
    }

    return (
        <div className='overview__container2__budgets'>
            <div className='overview__container2__budgets__heading'>
                <div className='overview__container2__budgets__heading__name'>Budgets</div>

                <Link to='/budgets'>
                    <div className='overview__container2__budgets__heading__details' onClick={() => setActiveNavItem('budgets')}>
                        <span>See Details</span>
                        <img src={caretRightIcon} alt='caret-right-icon' />
                    </div>
                </Link>
            </div>

            <div className='overview__container2__budgets__main'>
                <div className='overview__container2__budgets__main__chart'>
                    <Doughnut data={data} />
                    <div className='overview__container2__budgets__main__chart__text'>
                        <div>$338</div>
                        <div>of $975 limit</div>
                    </div>
                </div>

                <div className='overview__container2__budgets__main__categories'>
                    {budgets.map((budget: Budget, i) => (
                        <div key={i} className='overview__container2__budgets__main__categories__category'>
                            <div style={{ backgroundColor: budget.theme }} className='overview__container2__budgets__main__categories__category__bar'></div>
                            <div className='overview__container2__budgets__main__categories__category__text'>
                                <div className='overview__container2__budgets__main__categories__category__text__title'>{budget.category}</div>
                                <div className='overview__container2__budgets__main__categories__category__text__cost'>${budget.maximum}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default BudgetsCard;