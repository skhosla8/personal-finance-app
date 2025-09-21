// Base Imports
import { createSlice } from '@reduxjs/toolkit';
// Icons/Images
import AvatarEmma  from '../../assets/images/avatars/emma-richardson.jpg';
import AvatarSavoryBites from '../../assets/images/avatars/savory-bites-bistro.jpg';
import AvatarDaniel from '../../assets/images/avatars/daniel-carter.jpg';
import AvatarSunPark from '../../assets/images/avatars/sun-park.jpg';
import AvatarUrbanServices from '../../assets/images/avatars/urban-services-hub.jpg';
import AvatarLiam from '../../assets/images/avatars/liam-hughes.jpg';
import AvatarLily from '../../assets/images/avatars/lily-ramirez.jpg';
import AvatarEthan from '../../assets/images/avatars/ethan-clark.jpg';
import AvatarJames from '../../assets/images/avatars/james-thompson.jpg';
import AvatarPixelPlayground from '../../assets/images/avatars/pixel-playground.jpg';
import AvatarElla from '../../assets/images/avatars/ella-phillips.jpg';
import AvatarSofia from '../../assets/images/avatars/sofia-peterson.jpg';
import AvatarMason from '../../assets/images/avatars/mason-martinez.jpg';
import AvatarGreenPlate from '../../assets/images/avatars/green-plate-eatery.jpg';
import AvatarSebastian from '../../assets/images/avatars/sebastian-cook.jpg';
import AvatarWilliam from '../../assets/images/avatars/william-harris.jpg';
import AvatarElevateEducation from '../../assets/images/avatars/elevate-education.jpg';
import AvatarSerenity from '../../assets/images/avatars/serenity-spa-and-wellness.jpg';
import AvatarSpark from '../../assets/images/avatars/spark-electric-solutions.jpg';
import AvatarRina from '../../assets/images/avatars/rina-sato.jpg';
import AvatarSwift from '../../assets/images/avatars/swift-ride-share.jpg';
import AvatarAquaFlow from '../../assets/images/avatars/aqua-flow-utilities.jpg';
import AvatarEcofuelEnergy from '../../assets/images/avatars/ecofuel-energy.jpg';
import AvatarYuna from '../../assets/images/avatars/yuna-kim.jpg';
import AvatarFlavorFiesta from '../../assets/images/avatars/flavor-fiesta.jpg';
import AvatarHarper from '../../assets/images/avatars/harper-edwards.jpg';
import AvatarBuzz from '../../assets/images/avatars/buzz-marketing-group.jpg';
import AvatarTechnova from '../../assets/images/avatars/technova-innovations.jpg';
import AvatarBytewise from '../../assets/images/avatars/bytewise.jpg';
import AvatarNimbus from '../../assets/images/avatars/nimbus-data-storage.jpg';

const initialData = {
    "balance": {
        "current": 4836.00,
        "income": 3814.25,
        "expenses": 1700.50
    },
    "transactions": [
        {
            "avatar": AvatarEmma,
            "name": "Emma Richardson",
            "category": "General",
            "date": "2024-08-19T14:23:11Z",
            "amount": 75.50,
            "recurring": false
        },
        {
            "avatar": AvatarSavoryBites,
            "name": "Savory Bites Bistro",
            "category": "Dining Out",
            "date": "2024-08-19T20:23:11Z",
            "amount": -55.50,
            "recurring": false
        },
        {
            "avatar": AvatarDaniel,
            "name": "Daniel Carter",
            "category": "General",
            "date": "2024-08-18T09:45:32Z",
            "amount": -42.30,
            "recurring": false
        },
        {
            "avatar": AvatarSunPark,
            "name": "Sun Park",
            "category": "General",
            "date": "2024-08-17T16:12:05Z",
            "amount": 120.00,
            "recurring": false
        },
        {
            "avatar": AvatarUrbanServices,
            "name": "Urban Services Hub",
            "category": "General",
            "date": "2024-08-17T21:08:09Z",
            "amount": -65.00,
            "recurring": false
        },
        {
            "avatar": AvatarLiam,
            "name": "Liam Hughes",
            "category": "Groceries",
            "date": "2024-08-15T18:20:33Z",
            "amount": 65.75,
            "recurring": false
        },
        {
            "avatar": AvatarLily,
            "name": "Lily Ramirez",
            "category": "General",
            "date": "2024-08-14T13:05:27Z",
            "amount": 50.00,
            "recurring": false
        },
        {
            "avatar": AvatarEthan,
            "name": "Ethan Clark",
            "category": "Dining Out",
            "date": "2024-08-13T20:15:59Z",
            "amount": -32.50,
            "recurring": false
        },
        {
            "avatar": AvatarJames,
            "name": "James Thompson",
            "category": "Entertainment",
            "date": "2024-08-11T15:45:38Z",
            "amount": -5.00,
            "recurring": false
        },
        {
            "avatar": AvatarPixelPlayground ,
            "name": "Pixel Playground",
            "category": "Entertainment",
            "date": "2024-08-11T18:45:38Z",
            "amount": -10.00,
            "due": 11,
            "recurring": true
        },
        {
            "avatar": AvatarElla,
            "name": "Ella Phillips",
            "category": "Dining Out",
            "date": "2024-08-10T19:22:51Z",
            "amount": -45.00,
            "recurring": false
        },
        {
            "avatar": AvatarSofia,
            "name": "Sofia Peterson",
            "category": "Transportation",
            "date": "2024-08-08T08:55:17Z",
            "amount": -15.00,
            "recurring": false
        },
        {
            "avatar": AvatarMason,
            "name": "Mason Martinez",
            "category": "Lifestyle",
            "date": "2024-08-07T17:40:29Z",
            "amount": -35.25,
            "recurring": false
        },
        {
            "avatar": AvatarGreenPlate,
            "name": "Green Plate Eatery",
            "category": "Groceries",
            "date": "2024-08-06T08:25:44Z",
            "amount": -78.50,
            "recurring": false
        },
        {
            "avatar": AvatarSebastian,
            "name": "Sebastian Cook",
            "category": "Transportation",
            "date": "2024-08-06T10:05:44Z",
            "amount": -22.50,
            "recurring": false
        },
        {
            "avatar": AvatarWilliam,
            "name": "William Harris",
            "category": "Personal Care",
            "date": "2024-08-05T14:30:56Z",
            "amount": -10.00,
            "recurring": false
        },
        {
            "avatar": AvatarElevateEducation,
            "name": "Elevate Education",
            "category": "Education",
            "date": "2024-08-04T11:15:22Z",
            "amount": -50.00,
            "due": 4,
            "recurring": true
        },
        {
            "avatar": AvatarSerenity,
            "name": "Serenity Spa & Wellness",
            "category": "Personal Care",
            "date": "2024-08-03T14:00:37Z",
            "amount": -30.00,
            "due": 3,
            "recurring": true
        },
        {
            "avatar": AvatarSpark,
            "name": "Spark Electric Solutions",
            "category": "Bills",
            "date": "2024-08-02T09:25:11Z",
            "amount": -100.00,
            "due": 2,
            "recurring": true
        },
        {
            "avatar": AvatarRina,
            "name": "Rina Sato",
            "category": "Bills",
            "date": "2024-08-02T13:31:11Z",
            "amount": -50.00,
            "recurring": false
        },
        {
            "avatar": AvatarSwift,
            "name": "Swift Ride Share",
            "category": "Transportation",
            "date": "2024-08-01T18:40:33Z",
            "amount": -18.75,
            "recurring": false
        },
        {
            "avatar": AvatarAquaFlow,
            "name": "Aqua Flow Utilities",
            "category": "Bills",
            "date": "2024-07-30T13:20:14Z",
            "amount": -100.00,
            "due": 30,
            "recurring": true
        },
        {
            "avatar": AvatarEcofuelEnergy,
            "name": "EcoFuel Energy",
            "category": "Bills",
            "date": "2024-07-29T11:55:29Z",
            "amount": -35.00,
            "due": 29,
            "recurring": true
        },
        {
            "avatar": AvatarYuna,
            "name": "Yuna Kim",
            "category": "Dining Out",
            "date": "2024-07-29T13:51:29Z",
            "amount": -28.50,
            "recurring": false
        },
        {
            "avatar": AvatarFlavorFiesta,
            "name": "Flavor Fiesta",
            "category": "Dining Out",
            "date": "2024-07-27T20:15:06Z",
            "amount": -42.75,
            "recurring": false
        },
        {
            "avatar": AvatarHarper,
            "name": "Harper Edwards",
            "category": "Shopping",
            "date": "2024-07-26T09:43:23Z",
            "amount": -89.99,
            "recurring": false
        },
        {
            "avatar": AvatarBuzz,
            "name": "Buzz Marketing Group",
            "category": "General",
            "date": "2024-07-26T14:40:23Z",
            "amount": 3358.00,
            "recurring": false
        },
        {
            "avatar": AvatarTechnova,
            "name": "TechNova Innovations",
            "category": "Shopping",
            "date": "2024-07-25T16:25:37Z",
            "amount": -29.99,
            "recurring": false
        },
        {
            "avatar": AvatarBytewise,
            "name": "ByteWise",
            "category": "Lifestyle",
            "date": "2024-07-23T09:35:14Z",
            "amount": -49.99,
            "due": 23,
            "recurring": true
        },
        {
            "avatar": AvatarNimbus,
            "name": "Nimbus Data Storage",
            "category": "Bills",
            "date": "2024-07-21T10:05:42Z",
            "amount": -9.99,
            "due": 21,
            "recurring": true
        },
        {
            "avatar": AvatarEmma,
            "name": "Emma Richardson",
            "category": "General",
            "date": "2024-07-20T17:30:55Z",
            "amount": -25.00,
            "recurring": false
        },
        {
            "avatar": AvatarDaniel,
            "name": "Daniel Carter",
            "category": "General",
            "date": "2024-07-19T12:45:09Z",
            "amount": 50.00,
            "recurring": false
        },
        {
            "avatar": AvatarSunPark,
            "name": "Sun Park",
            "category": "General",
            "date": "2024-07-18T19:20:23Z",
            "amount": -38.50,
            "recurring": false
        },
        {
            "avatar": AvatarHarper,
            "name": "Harper Edwards",
            "category": "Shopping",
            "date": "2024-07-17T14:55:37Z",
            "amount": -29.99,
            "recurring": false
        },
        {
            "avatar": AvatarLiam,
            "name": "Liam Hughes",
            "category": "Groceries",
            "date": "2024-07-16T10:10:51Z",
            "amount": -52.75,
            "recurring": false
        },
        {
            "avatar": AvatarLily,
            "name": "Lily Ramirez",
            "category": "General",
            "date": "2024-07-15T16:35:04Z",
            "amount": 75.00,
            "recurring": false
        },
        {
            "avatar": AvatarEthan,
            "name": "Ethan Clark",
            "category": "Dining Out",
            "date": "2024-07-14T20:50:18Z",
            "amount": -41.25,
            "recurring": false
        },
        {
            "avatar": AvatarRina,
            "name": "Rina Sato",
            "category": "Entertainment",
            "date": "2024-07-13T09:15:32Z",
            "amount": -10.00,
            "recurring": false
        },
        {
            "avatar": AvatarJames,
            "name": "James Thompson",
            "category": "Bills",
            "date": "2024-07-12T13:40:46Z",
            "amount": -95.50,
            "recurring": false
        },
        {
            "avatar": AvatarElla,
            "name": "Ella Phillips",
            "category": "Dining Out",
            "date": "2024-07-11T18:05:59Z",
            "amount": -33.75,
            "recurring": false
        },
        {
            "avatar": AvatarYuna,
            "name": "Yuna Kim",
            "category": "Dining Out",
            "date": "2024-07-10T12:30:13Z",
            "amount": -27.50,
            "recurring": false
        },
        {
            "avatar": AvatarSofia,
            "name": "Sofia Peterson",
            "category": "Transportation",
            "date": "2024-07-09T08:55:27Z",
            "amount": -12.50,
            "recurring": false
        },
        {
            "avatar": AvatarMason,
            "name": "Mason Martinez",
            "category": "Lifestyle",
            "date": "2024-07-08T15:20:41Z",
            "amount": -65.00,
            "recurring": false
        },
        {
            "avatar": AvatarSebastian,
            "name": "Sebastian Cook",
            "category": "Transportation",
            "date": "2024-07-07T11:45:55Z",
            "amount": -20.00,
            "recurring": false
        },
        {
            "avatar": AvatarWilliam,
            "name": "William Harris",
            "category": "General",
            "date": "2024-07-06T17:10:09Z",
            "amount": 20.00,
            "recurring": false
        },
        {
            "avatar": AvatarElevateEducation,
            "name": "Elevate Education",
            "category": "Education",
            "date": "2024-07-05T11:15:22Z",
            "amount": -50.00,
            "due": 4,
            "recurring": true
        },
        {
            "avatar": AvatarSerenity,
            "name": "Serenity Spa & Wellness",
            "category": "Personal Care",
            "date": "2024-07-03T14:00:37Z",
            "amount": -30.00,
            "due": 3,
            "recurring": true
        },
        {
            "avatar": AvatarSpark,
            "name": "Spark Electric Solutions",
            "category": "Bills",
            "date": "2024-07-02T09:25:51Z",
            "amount": -100.00,
            "due": 2,
            "recurring": true
        },
        {
            "avatar": AvatarSwift,
            "name": "Swift Ride Share",
            "category": "Transportation",
            "date": "2024-07-02T19:50:05Z",
            "amount": -16.50,
            "recurring": false
        }
    ],
    "budgets": [
        {
            "category": "Entertainment",
            "maximum": 50.00,
            "theme": "#277C78"
        },
        {
            "category": "Bills",
            "maximum": 750.00,
            "theme": "#82C9D7"
        },
        {
            "category": "Dining Out",
            "maximum": 75.00,
            "theme": "#F2CDAC"
        },
        {
            "category": "Personal Care",
            "maximum": 100.00,
            "theme": "#626070"
        }
    ],
    "pots": [
        {
            "name": "Savings",
            "target": 2000.00,
            "total": 159.00,
            "theme": "#277C78"
        },
        {
            "name": "Concert Ticket",
            "target": 150.00,
            "total": 110.00,
            "theme": "#626070"
        },
        {
            "name": "Gift",
            "target": 150.00,
            "total": 110.00,
            "theme": "#82C9D7"
        },
        {
            "name": "New Laptop",
            "target": 1000.00,
            "total": 10.00,
            "theme": "#F2CDAC"
        },
        {
            "name": "Holiday",
            "target": 1440.00,
            "total": 531.00,
            "theme": "#826CB0"
        }
    ],
}

export const financesSlice = createSlice({
    name: 'finances',
    initialState: {
        allFinances: initialData
    },
    reducers: {

    }
});

export default financesSlice.reducer;