const Web3 = require('web3')
// Ganache local blockchain
const url_ganache = 'HTTP://127.0.0.1:7545'

// Infura
const url_infura = 'https://mainnet.infura.io/v3/795b76291b6c4b62af3aecc02b8c1e50'

const web3 = new Web3(url_ganache)

console.log(web3)