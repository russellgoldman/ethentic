import web3 from './web3';

const address = '0xb84b12e953f5bcf01b05f926728e855f2d4a67a9';


const abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "getHash",
		"outputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"name": "sendHash",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]


export default new web3.eth.Contract(abi, address);