const abi = [{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "updateInterval",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "name": "BattlesMapping",
    "outputs": [
        {
            "internalType": "address",
            "name": "_address1",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "_address2",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "votes1",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "votes2",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        },
        {
            "internalType": "bool",
            "name": "finalized",
            "type": "bool"
        },
        {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "battleId",
            "type": "uint256"
        }
    ],
    "name": "IncrementVote1",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "battleId",
            "type": "uint256"
        }
    ],
    "name": "IncrementVote2",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "battleID",
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
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
        }
    ],
    "name": "checkUpkeep",
    "outputs": [
        {
            "internalType": "bool",
            "name": "upkeepNeeded",
            "type": "bool"
        },
        {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "counter",
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
            "name": "_candidate1",
            "type": "address"
        }
    ],
    "name": "createInitialBattle",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "battleId",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "_candidate2",
            "type": "address"
        }
    ],
    "name": "finalizeBattle",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [],
    "name": "getBalance",
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
            "internalType": "uint256",
            "name": "battleId",
            "type": "uint256"
        }
    ],
    "name": "getVoters1",
    "outputs": [
        {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "battleId",
            "type": "uint256"
        }
    ],
    "name": "getVotes",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        },
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
    "name": "interval",
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
    "name": "lastTimeStamp",
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
    "name": "maxBattles",
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
    "name": "monthNo",
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
    "inputs": [
        {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
        }
    ],
    "name": "performUpkeep",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}]

module.exports = {abi};