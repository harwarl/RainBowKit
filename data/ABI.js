export const contractABI =[
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_deal",
				type: "uint256"
			}
		],
		name: "changeDealNumber",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_name",
				type: "string"
			},
			{
				internalType: "string",
				name: "_email",
				type: "string"
			},
			{
				internalType: "string",
				name: "_invoiceID",
				type: "string"
			},
			{
				internalType: "string",
				name: "_paymentFor",
				type: "string"
			},
			{
				internalType: "string",
				name: "_note",
				type: "string"
			}
		],
		name: "depositETH",
		outputs: [],
		stateMutability: "payable",
		type: "function"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: false,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				indexed: false,
				internalType: "string",
				name: "email",
				type: "string"
			},
			{
				indexed: false,
				internalType: "string",
				name: "invoiceID",
				type: "string"
			},
			{
				indexed: false,
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "string",
				name: "paymentFor",
				type: "string"
			},
			{
				indexed: false,
				internalType: "string",
				name: "note",
				type: "string"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "time",
				type: "uint256"
			}
		],
		name: "DepositEvent",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			},
			{
				internalType: "string",
				name: "_name",
				type: "string"
			},
			{
				internalType: "string",
				name: "_email",
				type: "string"
			},
			{
				internalType: "string",
				name: "_invoiceID",
				type: "string"
			},
			{
				internalType: "string",
				name: "_paymentFor",
				type: "string"
			},
			{
				internalType: "string",
				name: "_note",
				type: "string"
			}
		],
		name: "depositToken",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [],
		name: "withdrawETH",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256"
			}
		],
		name: "withdrawTokens",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		stateMutability: "payable",
		type: "receive"
	},
	{
		inputs: [],
		name: "DealNumber",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "Ledger",
		outputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "string",
				name: "email",
				type: "string"
			},
			{
				internalType: "string",
				name: "invoiceID",
				type: "string"
			},
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "string",
				name: "paymentFor",
				type: "string"
			},
			{
				internalType: "string",
				name: "note",
				type: "string"
			},
			{
				internalType: "uint256",
				name: "time",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "tokensWithdrawn",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		name: "viewETHBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token",
				type: "address"
			}
		],
		name: "viewTokenBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token",
				type: "address"
			}
		],
		name: "viewTokenWithdrawnBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	}
]