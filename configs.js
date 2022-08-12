const ContractConfig = {
  chainId: 1,
  chainName: 'mainnet',
  provider: 'https://mainnet.infura.io/v3/f8ad215b76e548bfafe2a3fe4b180cb5',
  infuraProvider:
    'https://mainnet.infura.io/v3/f8ad215b76e548bfafe2a3fe4b180cb5',
  apiKey: 'SRDGFVX6QGB3DVNG5NBQ1DW7Z277UIX4KE',
  eth: {
    api: 'https://api.etherscan.io',
    broadcast: 'https://etherscan.io',
    providerName: 'homestead',
    provider: 'https://mainnet.infura.io/v3/f8ad215b76e548bfafe2a3fe4b180cb5',
  },
  btc: {
    api: 'http://3.35.148.37:8200',
    insight: 'http://3.35.148.37:8200',
    feePerKB: 'https://bitcoinfees.earn.com/api/v1/fees/recommended',
    feeRate: 'http://3.35.148.37:8332',
  },
  biv: {
    api: 'https://api.bitcoin-value.io',
    insight: 'https://explorer.bitcoin-value.io',
  },
  sendAddressEsitmateGas: '0x2CCD217e3Ff4cD500b5042AEB7be857F7482f576',
  receiveAddressEstimateGas: '0xABe11f00F542e3b620c606db49Bc72dF45eF0cfe',
};

module.exports = ContractConfig;
