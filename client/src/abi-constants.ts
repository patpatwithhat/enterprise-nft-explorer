export const fiduciaryABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "LogAddress",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"name": "LogBool",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "LogBytes",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "LogBytes32",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"name": "LogInt",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "LogString",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "LogUint",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "id",
				"type": "uint8"
			}
		],
		"name": "acceptOffer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			}
		],
		"name": "consumeRights",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOffers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			}
		],
		"name": "getPurchaseStatus",
		"outputs": [
			{
				"internalType": "enum Fiduciary.PurchaseStatus",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "s",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "x",
				"type": "bytes"
			}
		],
		"name": "log",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "s",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "x",
				"type": "address"
			}
		],
		"name": "log",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "s",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "x",
				"type": "bytes32"
			}
		],
		"name": "log",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "s",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "x",
				"type": "int256"
			}
		],
		"name": "log",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "s",
				"type": "string"
			}
		],
		"name": "log",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "s",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			}
		],
		"name": "log",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "s",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "x",
				"type": "bool"
			}
		],
		"name": "log",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "note",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "offerPrice",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "relatedAsset",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "validUnitl",
						"type": "uint256"
					}
				],
				"internalType": "struct Fiduciary.offer",
				"name": "myOffer",
				"type": "tuple"
			}
		],
		"name": "makeOfferWith",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nftAddress",
				"type": "address"
			}
		],
		"name": "registerNewNFT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]