import { newChart } from "./global.js";

// High Risk Data
const highriskPortfolioData = {
    labels: [
      'ETFs - 20%',
      'Bond/Cash - 25%',
      'Stocks - 55%'
    ],
    datasets: [{
      label: 'High Risk Portfolio Allocation',
      data: [20, 25, 55],
      backgroundColor: [
        'rgb(246, 109, 68)',
        'rgb(254, 174, 101)',
        'rgb(230, 246, 157)'
      ],
      hoverOffset: 4
    }]
};

const highriskEtfData = {
    labels: [
      'VTI - 70%',
      'VXUS - 30%',
    ],
    datasets: [{
      label: 'High Risk ETFs Allocation',
      data: [70, 30],
      backgroundColor: [
        'rgb(246, 109, 68)',
        'rgb(254, 174, 101)',
      ],
      hoverOffset: 4
    }]
};

const highriskBondsCashData = {
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

const highriskStocksData = {
    labels: [
      'Large Cap - 40%',
      'International - 25%',
      'Small Cap - 20%',
      'Mid Cap - 15%',
      'Real Estate - 5%',
    ],
    datasets: [{
      label: 'High Risk Stock Allocation',
      data: [40, 25, 20, 15, 5],
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

newChart('highriskPortfolioChart', highriskPortfolioData);
newChart('highriskEtfChart', highriskEtfData);
newChart('highriskBondsCashChart', highriskBondsCashData);
newChart('highriskStocksChart', highriskStocksData);
