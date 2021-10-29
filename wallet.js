const Web3 = require('web3')
const url_infura = 'https://mainnet.infura.io/v3/795b76291b6c4b62af3aecc02b8c1e50'

const web3 = new Web3(url_infura)

const wallet = web3.eth.accounts.wallet.create(2, 'some random string')

console.log(wallet)