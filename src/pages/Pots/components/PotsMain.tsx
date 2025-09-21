// Base Imports 
import React, { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Pot } from '../../../interfaces/index';
// Icons/Images
import EllipsisIcon from '../../../assets/ellipsis.png';
import CancelIcon from '../../../assets/no.png';

const PotsMain = () => {
    const potsInitial = useSelector((state: RootState) => state.finances.allFinances.pots);

    const [pots, setPots] = useState(potsInitial);
    const [pot, setPot] = useState(pots[0]);
    const [potName, setPotName] = useState('Savings');
    const [amountAdded, setAmountAdded] = useState(0);


    const addMoney = () => {
        const overlay = document.getElementById('overlay');
        const addToModal = document.getElementById('add-to-modal');

        overlay!.style.display = 'block';
        addToModal!.style.display = 'block';
    };

    const closeSavingsModal = () => {
        const modal = document.getElementById('add-to-modal');
        const overlay = document.getElementById('overlay');

        overlay!.style.display = 'none'
        modal!.style.display = 'none';

        const input = document.getElementById('amount-added') as HTMLInputElement;
        input.value = '';
        setAmountAdded(0);
    };


    const calculateNewAmount = () => {
        const amount = Number(pot.total) + Number(amountAdded);
        return amount.toFixed(2);
    }


    const updatePots = () => {
        let updatedPots = pots.map(pot => {
            if (pot.name === potName) {
                return { ...pot, total: pot.total + amountAdded }
            }
            return pot;
        });

        setPots(updatedPots);
    }

    return (
        <div className='pots'>
            <div id='overlay' className='pots__overlay'></div>
            <div className='pots__container1'>
                <h1>Pots</h1>

                <button>
                    + <span>Add New Pot</span>
                </button>
            </div>

            <div className='pots__main'>
                {pots.map((element: Pot, i: number) => (
                    <div key={i} className='pots__main__pot'>
                        <div className='pots__main__pot__container1'>
                            <div className='pots__main__pot__container1__title'>
                                <div style={{ backgroundColor: element.theme }}></div>
                                <span>{element.name}</span>
                            </div>

                            <img className='pots__main__pot__container1__ellipsis' src={EllipsisIcon} alt='' />
                        </div>

                        <div className='pots__main__pot__container2'>
                            <div className='pots__main__pot__container2__total-saved'>Total Saved</div>
                            <span className='pots__main__pot__container2__amount'>${element.total}</span>
                        </div>

                        <div className='pots__main__pot__container3'>
                            <ProgressBar
                                completed={element.total}
                                maxCompleted={element.target}
                                isLabelVisible={false}
                                height={'10px'}
                                bgColor={element.theme}
                            />
                        </div>

                        <div className='pots__main__pot__container4'>
                            <div>{((element.total / element.target) * 100).toFixed(2)}%</div>
                            <div className='pots__main__pot__container4__target'>Target of ${element.target}</div>
                        </div>

                        <div className='pots__main__pot__container5'>
                            <button onClick={() => { addMoney(); setPot(element); setPotName(element.name) }}>+ Add Money</button>
                            <button>Withdraw</button>
                        </div>
                    </div>
                ))}
            </div>

            <div id='add-to-modal' className='pots__add'>
                <div className='pots__add__container1'>
                    <div className='pots__add__container1__title'>Add to 'Savings'</div>

                    <img src={CancelIcon} alt='exit-icon' onClick={closeSavingsModal} />
                </div>

                <div className='pots__add__container2'>
                    Lorem ipsum dolor sit amet, consectetuer adpiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
                </div>

                <div className='pots__add__container3'>
                    <div className='pots__add__container3__label'>New Amount</div>
                    <div className='pots__add__container3__amount'>${calculateNewAmount()}</div>
                </div>

                <div className='pots__add__container4'>
                    <ProgressBar
                        completed={pot.total}
                        maxCompleted={pot.target}
                        isLabelVisible={false}
                        height={'10px'}
                        bgColor={pot.theme}
                    />
                </div>

                <div className='pots__add__container5'>
                    <div style={{ color: pot.theme, fontWeight: 'bold' }}>{((Number(pot.total) + amountAdded) / pot.target * 100).toFixed(2)}%</div>
                    <div className='pots__add__container5__target'>Target of ${pot.target}</div>
                </div>

                <div className='pots__add__container6'>Amount to Add</div>

                <div className='pots__add__container7'>
                    <input id='amount-added' type='text' placeholder='$ 400' onChange={(e) => setAmountAdded(Number(e.target.value))} />
                </div>

                <button className='pots__add__confirm' onClick={() => { updatePots(); closeSavingsModal() }}>Confirm Addition</button>
            </div>

            <div className='pots__withdraw'>

            </div>
        </div>

    )
}

export default PotsMain;