const HDWalletProvider = require ('truffle-hdwallet-provider');
const Web3 = require ('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'cat reunion vanish frozen rural survey bacon food august model camp height',
  'https://rinkeby.infura.io/v3/9879eb4f74344288a34a97834fcbc6b4'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode })
    .send({ from: accounts[0] }); //removed gas because 0.0.5 trufhdwalletprovider

  console.log(interface);  
  console.log('Contract deployed to', result.options.address);
};
deploy();
