export const portfolio = {
    balance: "12,724.33",
    changes: "+2.36%",
};

export const PrizePool = [
    {
        id: 1,
        winners:2,
        entryFees:5000,
        date:"oct 2021 to 3rd oct 2021"
    },
    {
        id: 2,
        winners:2,
        entryFees:100,
        date:"oct 2021 to 4rd oct 2021"
    },
    {
        id: 3,
        winners:10,
        entryFees:100000,
        date:"oct 2021 to 5rd oct 2021"
    },
    {
        id: 4,
        winners:1,
        entryFees:1000,
        date:"oct 2021 to 6rd oct 2021"
    },
    {
        id: 5,
        winners:5,
        entryFees:1000,
        date:"oct 2021 to 1rd oct 2021"
    },
    {
        id: 6,
        winners:5,
        entryFees:5000,
        date:"oct 2021 to 2rd oct 2021"
    },
    {
        id: 7,
        winners:1,
        entryFees:50,
        date:"oct 2021 to 3rd oct 2021"
    }
       
]

export const transactionHistory = [
    {
        id: 1,
        description: "Sold Ethereum",
        amount: -2.0034,
        currency: "ETH",
        type: "S",      // S - Sold, B - Bought
        date: "14:20 12 Apr"
    },
    {
        id: 2,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 3,
        description: "Sold Ethereum",
        amount: -2.0034,
        currency: "ETH",
        type: "S",
        date: "14:20 12 Apr"
    },
    {
        id: 4,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 5,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },

    {
        id: 6,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 7,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 8,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 9,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
];

const chartOptions = [
    {
        id: 1,
        label: "1 hr"
    },
    {
        id: 2,
        label: "3 Days"
    },
    {
        id: 3,
        label: "1 Week"
    },
    {
        id: 4,
        label: "1 Month"
    },
    {
        id: 5,
        label: "3 Months"
    }
]

const dummyData = { portfolio, PrizePool, transactionHistory, chartOptions };

export default dummyData;