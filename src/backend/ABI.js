export const ABI =
	[
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_age",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "_party",
					"type": "string"
				}
			],
			"name": "addCandidate",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_voterAddress",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_fathername",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_phone_number",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_adharcard",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_age",
					"type": "string"
				}
			],
			"name": "addVoter",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_voterAddress",
					"type": "address"
				}
			],
			"name": "authorizeVoter1",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_electionName",
					"type": "string"
				}
			],
			"name": "startElection",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "candidateIndex",
					"type": "uint256"
				}
			],
			"name": "vote",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "index",
					"type": "uint256"
				}
			],
			"name": "candidateInfo",
			"outputs": [
				{
					"components": [
						{
							"internalType": "string",
							"name": "name",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "age",
							"type": "uint256"
						},
						{
							"internalType": "string",
							"name": "party",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "numVotes",
							"type": "uint256"
						}
					],
					"internalType": "struct Election.Candidate",
					"name": "",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "candidates",
			"outputs": [
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "age",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "party",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "numVotes",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "electionName",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getNumCandidates",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getTotalVotes",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "totalVotes",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "voters",
			"outputs": [
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "fathername",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "phone_number",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "adharcard",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "age",
					"type": "string"
				},
				{
					"internalType": "bool",
					"name": "authorised",
					"type": "bool"
				},
				{
					"internalType": "uint256",
					"name": "whom",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "voted",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]