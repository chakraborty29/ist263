import { newChart } from "./global.js";

// Low Risk Data
const lowriskPortfolioData = {
    labels: [
      'ETFs - 25%',
      'Bond/Cash - 35%',
      'Stocks - 40%'
    ],
    datasets: [{
      label: 'Low Risk Portfolio Allocation',
      data: [25, 35, 40],
      backgroundColor: [
        'rgb(246, 109, 68)',
        'rgb(254, 174, 101)',
        'rgb(230, 246, 157)'
      ],
      hoverOffset: 4
    }]
};

const lowriskEtfData = {
    labels: [
      'VTI - 75%',
      'VXUS - 25%',
    ],
    datasets: [{
      label: 'Low Risk ETFs Allocation',
      data: [75, 25],
      backgroundColor: [
        'rgb(246, 109, 68)',
        'rgb(254, 174, 101)',
      ],
      hoverOffset: 4
    }]
};


const lowriskBondsCashData = {
    labels: [
      'BSV - 50%',
      'BND - 50%',
    ],
    datasets: [{
      label: 'High Risk Bonds/Cash Allocation',
      data: [50, 50],
      backgroundColor: [
        'rgb(246, 109, 68)',
        'rgb(254, 174, 101)',
      ],
      hoverOffset: 4
    }]
};

const lowriskStocksData = {
    labels: [
      'Large Cap - 45%',
      'International - 20%',
      'Small Cap - 15%',
      'Mid Cap - 15%',
      'Real Estate - 5%',
    ],
    datasets: [{
      label: 'High Risk Stock Allocation',
      data: [45, 20, 15, 15, 5],
      backgroundColor: [
        'rgb(246, 109, 68)',
        'rgb(254, 174, 101)',
        'rgb(230, 246, 157)',
        'rgb(170, 222, 167)',
        'rgb(100, 194, 166)',
      ],
      hoverOffset: 4
    }]
};

newChart('lowriskPortfolioChart', lowriskPortfolioData);
newChart('lowriskEtfChart', lowriskEtfData);
newChart('lowriskBondsCashChart', lowriskBondsCashData);
newChart('lowriskStocksChart', lowriskStocksData);