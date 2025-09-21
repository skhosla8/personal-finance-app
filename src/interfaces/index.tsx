export interface Balance {
    current: number;
    income: number;
    expenses: number;
}

export interface Transaction {
    avatar: string;
    name: string;
    category: string;
    date: string;
    amount: number;
    recurring: boolean;
}

export interface Budget {
    category: string;
    maximum: number;
    theme: string;
}

export interface Pot {
    name: string;
    target: number;
    total: number;
    theme: string;
}
