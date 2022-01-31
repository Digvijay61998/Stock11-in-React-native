export const portfolio = {
    balance: "12,724.33",
    changes: "+2.36%",
};

export const PricePool = [
    {
        id: 1,
        winners:2,
        entryFees:5000,
        pricePool:2000,
        date:"oct 2021 to 3rd oct 2021"
    },
    {
        id: 2,
        winners:2,
        pricePool:2470,
        entryFees:100,
        date:"oct 2021 to 4rd oct 2021"
    },
    {
        id: 3,
        winners:10,
        pricePool:5000,
        entryFees:100000,
        date:"oct 2021 to 5rd oct 2021"
    },
    {
        id: 4,
        winners:1,
        pricePool:1000,
        entryFees:1000,
        date:"oct 2021 to 6rd oct 2021"
    },
    {
        id: 5,
        winners:5,
        pricePool:200,
        entryFees:1000,
        date:"oct 2021 to 1rd oct 2021"
    },
    {
        id: 6,
        winners:5,
        pricePool:20000,
        entryFees:5000,
        date:"oct 2021 to 2rd oct 2021"
    },
    {
        id: 7,
        winners:1,
        pricePool:4000,
        entryFees:50,
        date:"oct 2021 to 3rd oct 2021"
    }
       
]

export const WinningList = [
    {
        id: 1,
        rank:1,
        priceWin:5000
    },
    {
        id: 2,
        rank:2,
        priceWin:10000
    },
    {
        id: 3,
        rank:3,
        priceWin:4000
    },
    {
        id: 4,
        rank:4,
        priceWin:3000
    },
    {
        id: 5,
        rank:5,
        priceWin:2500
    },

    {
        id: 6,
        rank:6,
        priceWin:2000
    },
    {
        id: 7,
        rank:7,
        priceWin:1500
    },
    {
        id: 8,
        rank:8,
        priceWin:1000
    },
 
];

const LeadBoard = [
    {
        id: 1,
        team:"ABC",
        points:150,
        rank:1
    },
    {
        id: 2,
        team:"AVD",
        points:140,
        rank:2
    },
    {
        id: 3,
        team:"EBC",
        points:130,
        rank:3
    },
    {
        id: 4,
        team:"GBC",
        points:130,
        rank:4
    },
    {
        id: 5,
        team:"HJC",
        points:120,
        rank:5
    
    },
    {
        id: 6,
        team:"JKC",
        points:110,
        rank:6
    },
    {
        id: 7,
        team:"LKD",
        points:100,
        rank:7
    },
    {
        id: 8,
        team:"LKC",
        points:90,
        rank:8
    },
    {
        id: 9,
        team:"LOP",
        points:80,
        rank:4
    },
    {
        id: 10,
        team:"HUC",
        points:50,
        rank:5
    
    }
];

export const basketDetails = [
    {
        id: 1,
        category1:"LS",
        category2:"FS",
        company:"cipla",
        stockName:"hero MotoCorp"
    },
    {
        id: 2,
        category1:"LS",
        category2:"FS",
        company:"cipla",
        stockName:"hero MotoCorp"
    },
    {
        id: 3,
        category1:"LS",
        category2:"FS",
        company:"cipla",
        stockName:"hero MotoCorp"
    },
 
];

const dummyData = { portfolio, PricePool, WinningList, LeadBoard ,basketDetails};

export default dummyData;