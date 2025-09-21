// Base Imports 
import React, { useState, useContext, useEffect } from 'react';
import { ContextObj, Context } from '../../../context/Context';
import { Transaction } from '../../../interfaces/index';
// Icons/Images
import searchIcon from '../../../assets/icon-search.svg';
import caretDown from '../../../assets/icon-caret-down.svg';
import EmmaRichardson from '../../../assets/images/avatars/emma-richardson.jpg';
import SavoryBitesBistro from '../../../assets/images/avatars/savory-bites-bistro.jpg';
import DanielCarter from '../../../assets/images/avatars/daniel-carter.jpg';
import SunPark from '../../../assets/images/avatars/sun-park.jpg';
import UrbanServicesHub from '../../../assets/images/avatars/urban-services-hub.jpg';
import LiamHughes from '../../../assets/images/avatars/liam-hughes.jpg';
import LilyRamirez from '../../../assets/images/avatars/lily-ramirez.jpg';
import EthanClark from '../../../assets/images/avatars/ethan-clark.jpg';
import JamesThompson from '../../../assets/images/avatars/james-thompson.jpg';
import PixelPlayground from '../../../assets/images/avatars/pixel-playground.jpg';
import EllaPhillips from '../../../assets/images/avatars/ella-phillips.jpg';
import SofiaPeterson from '../../../assets/images/avatars/sofia-peterson.jpg';
import MasonMartinez from '../../../assets/images/avatars/mason-martinez.jpg';
import GreenPlateEatery from '../../../assets/images/avatars/green-plate-eatery.jpg';
import SebastianCook from '../../../assets/images/avatars/sebastian-cook.jpg';
import WilliamHarris from '../../../assets/images/avatars/william-harris.jpg';
import ElevateEducation from '../../../assets/images/avatars/elevate-education.jpg';
import SerenitySpaAndWellnesss from '../../../assets/images/avatars/serenity-spa-and-wellness.jpg';
import SparkElectricSolutions from '../../../assets/images/avatars/spark-electric-solutions.jpg';
import RinaSato from '../../../assets/images/avatars/rina-sato.jpg';
import SwiftRideShare from '../../../assets/images/avatars/swift-ride-share.jpg';
import AquaFlowUtilities from '../../../assets/images/avatars/aqua-flow-utilities.jpg';
import EcoFuelEnergy from '../../../assets/images/avatars/ecofuel-energy.jpg';
import YunaKim from '../../../assets/images/avatars/yuna-kim.jpg';
import FlavorFiesta from '../../../assets/images/avatars/flavor-fiesta.jpg';
import HarperEdwards from '../../../assets/images/avatars/harper-edwards.jpg';
import BuzzMarketingGroup from '../../../assets/images/avatars/buzz-marketing-group.jpg';
import TechnovaInnovations from '../../../assets/images/avatars/technova-innovations.jpg';
import Bytewise from '../../../assets/images/avatars/bytewise.jpg';
import NimbusDataStorage from '../../../assets/images/avatars/nimbus-data-storage.jpg';
import caretLeft from '../../../assets/icon-caret-left.svg';
import caretRight from '../../../assets/icon-caret-right.svg';

const TransactionsMain = () => {
    const [category, setCategory] = useState('All');
    const [sortBy, setSortBy] = useState('Newest');

    const formatTransactionDate = (item: Transaction) => {
        const date = new Date(item.date).toDateString().split(' ');

        return date[2] + ' ' + date[1] + ' ' + date[3];
    };

    const { activePage, setActivePage } = useContext<ContextObj>(Context);

    const transactions = [
        {
            "avatar": EmmaRichardson,
            "name": "Emma Richardson",
            "category": "General",
            "date": "2024-08-19T14:23:11Z",
            "amount": 75.50,
            "recurring": false
        },
        {
            "avatar": SavoryBitesBistro,
            "name": "Savory Bites Bistro",
            "category": "Dining Out",
            "date": "2024-08-19T20:23:11Z",
            "amount": -55.50,
            "recurring": false
        },
        {
            "avatar": DanielCarter,
            "name": "Daniel Carter",
            "category": "General",
            "date": "2024-08-18T09:45:32Z",
            "amount": -42.30,
            "recurring": false
        },
        {
            "avatar": SunPark,
            "name": "Sun Park",
            "category": "General",
            "date": "2024-08-17T16:12:05Z",
            "amount": 120.00,
            "recurring": false
        },
        {
            "avatar": UrbanServicesHub,
            "name": "Urban Services Hub",
            "category": "General",
            "date": "2024-08-17T21:08:09Z",
            "amount": -65.00,
            "recurring": false
        },
        {
            "avatar": LiamHughes,
            "name": "Liam Hughes",
            "category": "Groceries",
            "date": "2024-08-15T18:20:33Z",
            "amount": 65.75,
            "recurring": false
        },
        {
            "avatar": LilyRamirez,
            "name": "Lily Ramirez",
            "category": "General",
            "date": "2024-08-14T13:05:27Z",
            "amount": 50.00,
            "recurring": false
        },
        {
            "avatar": EthanClark,
            "name": "Ethan Clark",
            "category": "Dining Out",
            "date": "2024-08-13T20:15:59Z",
            "amount": -32.50,
            "recurring": false
        },
        {
            "avatar": JamesThompson,
            "name": "James Thompson",
            "category": "Entertainment",
            "date": "2024-08-11T15:45:38Z",
            "amount": -5.00,
            "recurring": false
        },
        {
            "avatar": PixelPlayground,
            "name": "Pixel Playground",
            "category": "Entertainment",
            "date": "2024-08-11T18:45:38Z",
            "amount": -10.00,
            "recurring": true
        },
        {
            "avatar": EllaPhillips,
            "name": "Ella Phillips",
            "category": "Dining Out",
            "date": "2024-08-10T19:22:51Z",
            "amount": -45.00,
            "recurring": false
        },
        {
            "avatar": SofiaPeterson,
            "name": "Sofia Peterson",
            "category": "Transportation",
            "date": "2024-08-08T08:55:17Z",
            "amount": -15.00,
            "recurring": false
        },
        {
            "avatar": MasonMartinez,
            "name": "Mason Martinez",
            "category": "Lifestyle",
            "date": "2024-08-07T17:40:29Z",
            "amount": -35.25,
            "recurring": false
        },
        {
            "avatar": GreenPlateEatery,
            "name": "Green Plate Eatery",
            "category": "Groceries",
            "date": "2024-08-06T08:25:44Z",
            "amount": -78.50,
            "recurring": false
        },
        {
            "avatar": SebastianCook,
            "name": "Sebastian Cook",
            "category": "Transportation",
            "date": "2024-08-06T10:05:44Z",
            "amount": -22.50,
            "recurring": false
        },
        {
            "avatar": WilliamHarris,
            "name": "William Harris",
            "category": "Personal Care",
            "date": "2024-08-05T14:30:56Z",
            "amount": -10.00,
            "recurring": false
        },
        {
            "avatar": ElevateEducation,
            "name": "Elevate Education",
            "category": "Education",
            "date": "2024-08-04T11:15:22Z",
            "amount": -50.00,
            "recurring": true
        },
        {
            "avatar": SerenitySpaAndWellnesss,
            "name": "Serenity Spa & Wellness",
            "category": "Personal Care",
            "date": "2024-08-03T14:00:37Z",
            "amount": -30.00,
            "recurring": true
        },
        {
            "avatar": SparkElectricSolutions,
            "name": "Spark Electric Solutions",
            "category": "Bills",
            "date": "2024-08-02T09:25:11Z",
            "amount": -100.00,
            "recurring": true
        },
        {
            "avatar": RinaSato,
            "name": "Rina Sato",
            "category": "Bills",
            "date": "2024-08-02T13:31:11Z",
            "amount": -50.00,
            "recurring": false
        },
        {
            "avatar": SwiftRideShare,
            "name": "Swift Ride Share",
            "category": "Transportation",
            "date": "2024-08-01T18:40:33Z",
            "amount": -18.75,
            "recurring": false
        },
        {
            "avatar": AquaFlowUtilities,
            "name": "Aqua Flow Utilities",
            "category": "Bills",
            "date": "2024-07-30T13:20:14Z",
            "amount": -100.00,
            "recurring": true
        },
        {
            "avatar": EcoFuelEnergy,
            "name": "EcoFuel Energy",
            "category": "Bills",
            "date": "2024-07-29T11:55:29Z",
            "amount": -35.00,
            "recurring": true
        },
        {
            "avatar": YunaKim,
            "name": "Yuna Kim",
            "category": "Dining Out",
            "date": "2024-07-29T13:51:29Z",
            "amount": -28.50,
            "recurring": false
        },
        {
            "avatar": FlavorFiesta,
            "name": "Flavor Fiesta",
            "category": "Dining Out",
            "date": "2024-07-27T20:15:06Z",
            "amount": -42.75,
            "recurring": false
        },
        {
            "avatar": HarperEdwards,
            "name": "Harper Edwards",
            "category": "Shopping",
            "date": "2024-07-26T09:43:23Z",
            "amount": -89.99,
            "recurring": false
        },
        {
            "avatar": BuzzMarketingGroup,
            "name": "Buzz Marketing Group",
            "category": "General",
            "date": "2024-07-26T14:40:23Z",
            "amount": 3358.00,
            "recurring": false
        },
        {
            "avatar": TechnovaInnovations,
            "name": "TechNova Innovations",
            "category": "Shopping",
            "date": "2024-07-25T16:25:37Z",
            "amount": -29.99,
            "recurring": false
        },
        {
            "avatar": Bytewise,
            "name": "ByteWise",
            "category": "Lifestyle",
            "date": "2024-07-23T09:35:14Z",
            "amount": -49.99,
            "recurring": true
        },
        {
            "avatar": NimbusDataStorage,
            "name": "Nimbus Data Storage",
            "category": "Bills",
            "date": "2024-07-21T10:05:42Z",
            "amount": -9.99,
            "recurring": true
        },
    ]

    const displayedElementsCount = () => {
        if (activePage === 1) {
            return transactions.slice(0, 6);
        } else if (activePage === 2) {
            return transactions.slice(6, 12);
        } else if (activePage === 3) {
            return transactions.slice(12, 18);
        } else if (activePage === 4) {
            return transactions.slice(18, 24);
        } else {
            return transactions.slice(24, 30);
        }
    }

    const setPrevActivePage = () => {
        if (activePage >= 2) {
            setActivePage(activePage - 1);
        }
    }

    const setNextActivePage = () => {
        if (activePage < 5) {
            setActivePage(activePage + 1);
        }
    }

    const handleCategory = (event: any) => {
        setCategory(event.target.value);
    }

    const handleSortBy = (event: any) => {
        setSortBy(event.target.value);
    }

    const filterByCategory = () => {
        if (category === 'General') {
            return displayedElementsCount().filter(element => element.category === 'General');
        } else if (category === 'Dining Out') {
            return displayedElementsCount().filter(element => element.category === 'Dining Out');
        } else if (category === 'Groceries') {
            return displayedElementsCount().filter(element => element.category === 'Groceries');
        } else if (category === 'Entertainment') {
            return displayedElementsCount().filter(element => element.category === 'Entertainment');
        } else {
            return displayedElementsCount();
        }
    };

    const sortByDate = () => {
        const dates: string[] = [];
        const originalDates = filterByCategory().map(element => new Date(element.date));

        for (let i = 0; i < originalDates.length; i++) {
            const date = originalDates[i].toISOString().split('-');
            dates.push(date[0] + '-' + date[1] + '-' + date[2].slice(0, 2));
        }

        filterByCategory().map((element, i) => element.date = dates[i]);

        if (sortBy === 'Oldest') {
            return filterByCategory().sort((a: Transaction, b: Transaction) => Number(new Date(a.date)) - Number(new Date(b.date)));
        } else {
            return filterByCategory();
        }

    }

    useEffect(() => {
        setActivePage(1);
    }, [setActivePage]);

    return (
        <div className='transactions'>
            <h1>Transactions</h1>

            <div className='transactions__main'>
                <div className='transactions__main__container1'>
                    <div className='transactions__main__container1__search'>
                        <input className='transactions__main__container1__search__input' type='text' placeholder='Search transaction'></input>
                        <img src={searchIcon} alt='search-icon' />
                    </div>

                    <div>
                        <label className='transactions__main__container1__sortBy-label' htmlFor='sort-by'>Sort by</label>
                        <select name='sort-by' className='transactions__main__container1__select' value={sortBy} onChange={handleSortBy}>
                            <option value='Newest'>Newest</option>
                            <option value='Oldest'>Oldest</option>

                            <img src={caretDown} alt='caret-down' />
                        </select>

                        <label className='transactions__main__container1__category-label' htmlFor='category'>Category</label>
                        <select id='transactions-select2' name='category' className='transactions__main__container1__select2' value={category} onChange={handleCategory}>
                            <option value='All Transactions'>All Transactions</option>
                            <option value='General'>General</option>
                            <option value='Dining Out'>Dining Out</option>
                            <option value='Groceries'>Groceries</option>
                            <option value='Entertainment'>Entertainment</option>

                            <img src={caretDown} alt='caret-down' />
                        </select>
                    </div>
                </div>

                <div className='transactions__main__container2'>
                    <div className='transactions__main__container2__titles'>
                        <div>Recipient/Sender</div>
                        <div className='transactions__main__container2__titles__category'>Category</div>
                        <div className='transactions__main__container2__titles__date'>Transaction Date</div>
                        <div className='transactions__main__container2__titles__amount'>Amount</div>
                    </div>

                    {filterByCategory().length >= 1 ? sortByDate().map((element, i) =>
                        <div key={i} className='transactions__main__container2__element'>
                            <div className='transactions__main__container2__element__avatar-container'>
                                <img src={element.avatar} className='transactions__main__container2__element__avatar-container__avatar' alt='recipient-avatar' />
                                <span className='transactions__main__container2__element__avatar-container__name'>{element.name}</span>
                            </div>

                            <div className='transactions__main__container2__element__category'>{element.category}</div>
                            <div className='transactions__main__container2__element__date'>{formatTransactionDate(element)}</div>
                            <div className='transactions__main__container2__element__amount' style={element.amount > 0 ? { color: '#277C78' } : { color: '#201F24' }}>{element.amount > 0 ? '+$' + element.amount.toFixed(2) : '-$' + (element.amount).toFixed(2).replace('-', '')}</div>
                        </div>
                    ) :
                        <div style={{ padding: '2rem 0' }}>No results.</div>
                    }
                </div>

                <div className='transactions__main__container3'>
                    <button className='transactions__main__container3__button' onClick={setPrevActivePage}>
                        <img src={caretLeft} alt='caret-left' />
                        <span className='transactions__main__container3__button__prev'>Prev</span>
                    </button>

                    <div className='transactions__main__container3__active'>
                        <button style={activePage === 1 ? { backgroundColor: '#000000', color: '#FFFFFF' } : { backgroundColor: '#FFFFFF', color: '#000000' }} onClick={() => setActivePage(1)}>1</button>
                        <button style={activePage === 2 ? { backgroundColor: '#000000', color: '#FFFFFF' } : { backgroundColor: '#FFFFFF', color: '#000000' }} onClick={() => setActivePage(2)}>2</button>
                        <button style={activePage === 3 ? { backgroundColor: '#000000', color: '#FFFFFF' } : { backgroundColor: '#FFFFFF', color: '#000000' }} onClick={() => setActivePage(3)}>3</button>
                        <button style={activePage === 4 ? { backgroundColor: '#000000', color: '#FFFFFF' } : { backgroundColor: '#FFFFFF', color: '#000000' }} onClick={() => setActivePage(4)}>4</button>
                        <button style={activePage === 5 ? { backgroundColor: '#000000', color: '#FFFFFF' } : { backgroundColor: '#FFFFFF', color: '#000000' }} onClick={() => setActivePage(5)}>5</button>
                    </div>

                    <button className='transactions__main__container3__button' onClick={setNextActivePage}>
                        <span className='transactions__main__container3__button__next'>Next</span>
                        <img src={caretRight} alt='caret-right' />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default TransactionsMain;