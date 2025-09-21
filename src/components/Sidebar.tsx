// Base Imports
import React, { useEffect, useRef, useContext, useCallback} from 'react';
import { NavLink } from 'react-router-dom';
import { ContextObj, Context } from '../context/Context'; 
// Icons/Images
import logoLarge from '../assets/logo-large.svg';
import logoSmall from '../assets/logo-small.svg';
import overviewIcon from '../assets/icon-nav-overview.svg';
import overviewIconActive from '../assets/icon-nav-overview-active.svg';
import transactionsIcon from '../assets/icon-nav-transactions.svg';
import transactionsIconActive from '../assets/icon-nav-transactions-active.svg';
import budgetsIcon from '../assets/icon-nav-budgets.svg';
import budgetsIconActive from '../assets/icon-nav-budgets-active.svg';
import potsIcon from '../assets/icon-nav-pots.svg';
import potsIconActive from '../assets/icon-nav-pots-active.svg';
import recurringBillsIcon from '../assets/icon-nav-recurring-bills.svg';
import recurringBillsIconActive from '../assets/icon-nav-recurring-bills-active.svg';
import minimizeMenuIcon from '../assets/icon-minimize-menu.svg';

const Sidebar = () => {
   const { activeNavItem, setActiveNavItem, isMinimized, setIsMinimized } = useContext<ContextObj>(Context);

    // refs
    const sidebarContainerRef = useRef<HTMLDivElement | null>(null);
    const logoRef = useRef<HTMLImageElement | null>(null);

    const overviewLIRef = useRef<HTMLLIElement | null>(null);
    const overviewIMGRef = useRef<HTMLImageElement | null>(null);
    const overviewSPANRef = useRef<HTMLSpanElement | null>(null);

    const transactionsLIRef = useRef<HTMLLIElement | null>(null);
    const transactionsIMGRef = useRef<HTMLImageElement | null>(null);
    const transactionsSPANRef = useRef<HTMLSpanElement | null>(null);

    const budgetsLIRef = useRef<HTMLLIElement | null>(null);
    const budgetsIMGRef = useRef<HTMLImageElement | null>(null);
    const budgetsSPANRef = useRef<HTMLSpanElement | null>(null);

    const potsLIRef = useRef<HTMLLIElement | null>(null);
    const potsIMGRef = useRef<HTMLImageElement | null>(null);
    const potsSPANRef = useRef<HTMLSpanElement | null>(null);

    const recurringBillsLIRef = useRef<HTMLLIElement | null>(null);
    const recurringBillsIMGRef = useRef<HTMLImageElement | null>(null);
    const recurringBillsSPANRef = useRef<HTMLSpanElement | null>(null);

    const minimizeMenuSPANRef = useRef<HTMLSpanElement | null>(null);

    const handleActiveStateStyles = useCallback(() => {
        if (activeNavItem === 'overview') {
            overviewLIRef.current!.style.backgroundColor = '#F8F4F0';
            overviewIMGRef.current!.src = overviewIconActive;
            overviewSPANRef.current!.style.color = '#201F24';

            // all other nav items
            transactionsLIRef.current!.style.backgroundColor = '';
            budgetsLIRef.current!.style.backgroundColor = '';
            potsLIRef.current!.style.backgroundColor = '';
            recurringBillsLIRef.current!.style.backgroundColor = '';

            transactionsIMGRef.current!.src = transactionsIcon;
            budgetsIMGRef.current!.src = budgetsIcon;
            potsIMGRef.current!.src = potsIcon;
            recurringBillsIMGRef.current!.src = recurringBillsIcon;

            transactionsSPANRef.current!.style.color = '';
            budgetsSPANRef.current!.style.color = '';
            potsSPANRef.current!.style.color = '';
            recurringBillsSPANRef.current!.style.color = '';

        } else if (activeNavItem === 'transactions') {
            transactionsLIRef.current!.style.backgroundColor = '#F8F4F0';
            transactionsIMGRef.current!.src = transactionsIconActive;
            transactionsSPANRef.current!.style.color = '#201F24';

            // all other nav items
            overviewLIRef.current!.style.backgroundColor = '';
            budgetsLIRef.current!.style.backgroundColor = '';
            potsLIRef.current!.style.backgroundColor = '';
            recurringBillsLIRef.current!.style.backgroundColor = '';

            overviewIMGRef.current!.src = overviewIcon;
            budgetsIMGRef.current!.src = budgetsIcon;
            potsIMGRef.current!.src = potsIcon;
            recurringBillsIMGRef.current!.src = recurringBillsIcon;

            overviewSPANRef.current!.style.color = '';
            budgetsSPANRef.current!.style.color = '';
            potsSPANRef.current!.style.color = '';
            recurringBillsSPANRef.current!.style.color = '';

        } else if (activeNavItem === 'budgets') {
            budgetsLIRef.current!.style.backgroundColor = '#F8F4F0';
            budgetsIMGRef.current!.src = budgetsIconActive;
            budgetsSPANRef.current!.style.color = '#201F24';

            // all other nav items 
            overviewLIRef.current!.style.backgroundColor = '';
            transactionsLIRef.current!.style.backgroundColor = '';
            potsLIRef.current!.style.backgroundColor = '';
            recurringBillsLIRef.current!.style.backgroundColor = '';

            overviewIMGRef.current!.src = overviewIcon;
            transactionsIMGRef.current!.src = transactionsIcon;
            potsIMGRef.current!.src = potsIcon;
            recurringBillsIMGRef.current!.src = recurringBillsIcon;

            overviewSPANRef.current!.style.color = '';
            transactionsSPANRef.current!.style.color = '';
            potsSPANRef.current!.style.color = '';
            recurringBillsSPANRef.current!.style.color = '';

        } else if (activeNavItem === 'pots') {
            potsLIRef.current!.style.backgroundColor = '#F8F4F0';
            potsIMGRef.current!.src = potsIconActive;
            potsSPANRef.current!.style.color = '#201F24';

            // all other nav items 
            overviewLIRef.current!.style.backgroundColor = '';
            transactionsLIRef.current!.style.backgroundColor = '';
            budgetsLIRef.current!.style.backgroundColor = '';
            recurringBillsLIRef.current!.style.backgroundColor = '';

            overviewIMGRef.current!.src = overviewIcon;
            transactionsIMGRef.current!.src = transactionsIcon;
            budgetsIMGRef.current!.src = budgetsIcon;
            recurringBillsIMGRef.current!.src = recurringBillsIcon;

            overviewSPANRef.current!.style.color = '';
            transactionsSPANRef.current!.style.color = '';
            budgetsSPANRef.current!.style.color = '';
            recurringBillsSPANRef.current!.style.color = '';

        } else {
            recurringBillsLIRef.current!.style.backgroundColor = '#F8F4F0';
            recurringBillsIMGRef.current!.src = recurringBillsIconActive;
            recurringBillsSPANRef.current!.style.color = '#201F24';

            // all other nav items 
            overviewLIRef.current!.style.backgroundColor = '';
            transactionsLIRef.current!.style.backgroundColor = '';
            budgetsLIRef.current!.style.backgroundColor = '';
            potsLIRef.current!.style.backgroundColor = '';

            overviewIMGRef.current!.src = overviewIcon;
            transactionsIMGRef.current!.src = transactionsIcon;
            budgetsIMGRef.current!.src = budgetsIcon;
            potsIMGRef.current!.src = potsIcon;

            overviewSPANRef.current!.style.color = '';
            transactionsSPANRef.current!.style.color = '';
            budgetsSPANRef.current!.style.color = '';
            potsSPANRef.current!.style.color = '';
        }
    }, [activeNavItem]);

    // handle sidebar dimensions
    useEffect(() => {
        if (isMinimized) {
            sidebarContainerRef.current!.style.width = '70px';
            overviewSPANRef.current!.style.display = 'none';
            transactionsSPANRef.current!.style.display = 'none';
            budgetsSPANRef.current!.style.display = 'none';
            potsSPANRef.current!.style.display = 'none'
            recurringBillsSPANRef.current!.style.display = 'none';

            minimizeMenuSPANRef.current!.style.display = 'none';

            logoRef.current!.src = logoSmall;
            logoRef.current!.className = 'sidebar__logoSmall';

        } else {
            sidebarContainerRef.current!.style.width = '';
            overviewSPANRef.current!.style.display = '';
            transactionsSPANRef.current!.style.display = '';
            budgetsSPANRef.current!.style.display = '';
            potsSPANRef.current!.style.display = '';
            recurringBillsSPANRef.current!.style.display = '';

            minimizeMenuSPANRef.current!.style.display = '';
            logoRef.current!.src = logoLarge;
            logoRef.current!.className = 'sidebar__logoLarge';

        }
    }, [isMinimized]);

    useEffect(() => {
        handleActiveStateStyles();
    }, [activeNavItem, handleActiveStateStyles]);

    return (
        <nav ref={sidebarContainerRef} className='sidebar'>
            <img ref={logoRef} className='sidebar__logoLarge' src={logoLarge} alt='logo' />

            <div className='sidebar__container'>
                <ul>
                    <NavLink to='/'>
                        <li ref={overviewLIRef} onClick={() => setActiveNavItem('overview')}>
                            <img ref={overviewIMGRef} src={overviewIcon} alt='overview-icon' />
                            <span ref={overviewSPANRef}>Overview</span>
                        </li>
                    </NavLink>

                    <NavLink to='/transactions'>
                        <li ref={transactionsLIRef} onClick={() => setActiveNavItem('transactions')}>
                            <img ref={transactionsIMGRef} src={transactionsIcon} alt='transactions-icon' />
                            <span ref={transactionsSPANRef}>Transactions</span>
                        </li>
                    </NavLink>

                    <NavLink to='/budgets'>
                        <li ref={budgetsLIRef} onClick={() => setActiveNavItem('budgets')}>
                            <img ref={budgetsIMGRef} src={budgetsIcon} alt='budgets-icon' />
                            <span ref={budgetsSPANRef}>Budgets</span>
                        </li>
                    </NavLink>

                    <NavLink to='/pots'>
                        <li ref={potsLIRef} onClick={() => setActiveNavItem('pots')}>
                            <img ref={potsIMGRef} src={potsIcon} alt='pots-icon' />
                            <span ref={potsSPANRef}>Pots</span>
                        </li>
                    </NavLink>

                    <NavLink to='/recurringBills'>
                        <li ref={recurringBillsLIRef} onClick={() => setActiveNavItem('recurringBills')}>
                            <img ref={recurringBillsIMGRef} src={recurringBillsIcon} alt='recurring-bills-icon' />
                            <span ref={recurringBillsSPANRef}>Recurring Bills</span>
                        </li>
                    </NavLink>
                </ul>

                <div className='sidebar__container__minimize-menu' onClick={() => setIsMinimized(!isMinimized)}>
                    <img src={minimizeMenuIcon} alt='minimize-menu-icon' />
                    <span ref={minimizeMenuSPANRef}>Minimize Menu</span>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar; 