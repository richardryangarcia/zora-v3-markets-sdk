"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AskOmnibusAbi__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_erc20TransferHelper",
                type: "address",
            },
            {
                internalType: "address",
                name: "_erc721TransferHelper",
                type: "address",
            },
            {
                internalType: "address",
                name: "_royaltyEngine",
                type: "address",
            },
            {
                internalType: "address",
                name: "_protocolFeeSettings",
                type: "address",
            },
            {
                internalType: "address",
                name: "_weth",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "tokenContract",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "seller",
                        type: "address",
                    },
                    {
                        internalType: "uint96",
                        name: "expiry",
                        type: "uint96",
                    },
                    {
                        internalType: "address",
                        name: "sellerFundsRecipient",
                        type: "address",
                    },
                    {
                        internalType: "uint16",
                        name: "findersFeeBps",
                        type: "uint16",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "buyer",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "minAmount",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct AsksDataStorage.TokenGate",
                        name: "tokenGate",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint16",
                                name: "listingFeeBps",
                                type: "uint16",
                            },
                            {
                                internalType: "address",
                                name: "listingFeeRecipient",
                                type: "address",
                            },
                        ],
                        internalType: "struct AsksDataStorage.ListingFee",
                        name: "listingFee",
                        type: "tuple",
                    },
                ],
                indexed: false,
                internalType: "struct AsksDataStorage.FullAsk",
                name: "ask",
                type: "tuple",
            },
        ],
        name: "AskCanceled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "tokenContract",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "seller",
                        type: "address",
                    },
                    {
                        internalType: "uint96",
                        name: "expiry",
                        type: "uint96",
                    },
                    {
                        internalType: "address",
                        name: "sellerFundsRecipient",
                        type: "address",
                    },
                    {
                        internalType: "uint16",
                        name: "findersFeeBps",
                        type: "uint16",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "buyer",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "minAmount",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct AsksDataStorage.TokenGate",
                        name: "tokenGate",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint16",
                                name: "listingFeeBps",
                                type: "uint16",
                            },
                            {
                                internalType: "address",
                                name: "listingFeeRecipient",
                                type: "address",
                            },
                        ],
                        internalType: "struct AsksDataStorage.ListingFee",
                        name: "listingFee",
                        type: "tuple",
                    },
                ],
                indexed: false,
                internalType: "struct AsksDataStorage.FullAsk",
                name: "ask",
                type: "tuple",
            },
        ],
        name: "AskCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "tokenContract",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "buyer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "finder",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "seller",
                        type: "address",
                    },
                    {
                        internalType: "uint96",
                        name: "expiry",
                        type: "uint96",
                    },
                    {
                        internalType: "address",
                        name: "sellerFundsRecipient",
                        type: "address",
                    },
                    {
                        internalType: "uint16",
                        name: "findersFeeBps",
                        type: "uint16",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "buyer",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "minAmount",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct AsksDataStorage.TokenGate",
                        name: "tokenGate",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint16",
                                name: "listingFeeBps",
                                type: "uint16",
                            },
                            {
                                internalType: "address",
                                name: "listingFeeRecipient",
                                type: "address",
                            },
                        ],
                        internalType: "struct AsksDataStorage.ListingFee",
                        name: "listingFee",
                        type: "tuple",
                    },
                ],
                indexed: false,
                internalType: "struct AsksDataStorage.FullAsk",
                name: "ask",
                type: "tuple",
            },
        ],
        name: "AskFilled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "tokenContract",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "seller",
                        type: "address",
                    },
                    {
                        internalType: "uint96",
                        name: "expiry",
                        type: "uint96",
                    },
                    {
                        internalType: "address",
                        name: "sellerFundsRecipient",
                        type: "address",
                    },
                    {
                        internalType: "uint16",
                        name: "findersFeeBps",
                        type: "uint16",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "buyer",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "minAmount",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct AsksDataStorage.TokenGate",
                        name: "tokenGate",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint16",
                                name: "listingFeeBps",
                                type: "uint16",
                            },
                            {
                                internalType: "address",
                                name: "listingFeeRecipient",
                                type: "address",
                            },
                        ],
                        internalType: "struct AsksDataStorage.ListingFee",
                        name: "listingFee",
                        type: "tuple",
                    },
                ],
                indexed: false,
                internalType: "struct AsksDataStorage.FullAsk",
                name: "ask",
                type: "tuple",
            },
        ],
        name: "AskPriceUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "tokenContract",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "RoyaltyPayout",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_tokenContract",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_payoutCurrency",
                type: "address",
            },
        ],
        name: "_handleRoyaltyEnginePayout",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "askForNFT",
        outputs: [
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "seller",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "features",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_tokenContract",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
        ],
        name: "cancelAsk",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_tokenContract",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
            {
                internalType: "uint96",
                name: "_expiry",
                type: "uint96",
            },
            {
                internalType: "uint256",
                name: "_askPrice",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_sellerFundsRecipient",
                type: "address",
            },
            {
                internalType: "address",
                name: "_askCurrency",
                type: "address",
            },
            {
                internalType: "address",
                name: "_buyer",
                type: "address",
            },
            {
                internalType: "uint16",
                name: "_findersFeeBps",
                type: "uint16",
            },
            {
                components: [
                    {
                        internalType: "uint16",
                        name: "listingFeeBps",
                        type: "uint16",
                    },
                    {
                        internalType: "address",
                        name: "listingFeeRecipient",
                        type: "address",
                    },
                ],
                internalType: "struct AsksDataStorage.ListingFee",
                name: "_listingFee",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "minAmount",
                        type: "uint256",
                    },
                ],
                internalType: "struct AsksDataStorage.TokenGate",
                name: "_tokenGate",
                type: "tuple",
            },
        ],
        name: "createAsk",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_tokenContract",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_askPrice",
                type: "uint256",
            },
        ],
        name: "createAskMinimal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "erc20TransferHelper",
        outputs: [
            {
                internalType: "contract ERC20TransferHelper",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "erc721TransferHelper",
        outputs: [
            {
                internalType: "contract ERC721TransferHelper",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_tokenContract",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_price",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_currency",
                type: "address",
            },
            {
                internalType: "address",
                name: "_finder",
                type: "address",
            },
        ],
        name: "fillAsk",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_tokenContract",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
        ],
        name: "getFullAsk",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "seller",
                        type: "address",
                    },
                    {
                        internalType: "uint96",
                        name: "expiry",
                        type: "uint96",
                    },
                    {
                        internalType: "address",
                        name: "sellerFundsRecipient",
                        type: "address",
                    },
                    {
                        internalType: "uint16",
                        name: "findersFeeBps",
                        type: "uint16",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "buyer",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "minAmount",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct AsksDataStorage.TokenGate",
                        name: "tokenGate",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint16",
                                name: "listingFeeBps",
                                type: "uint16",
                            },
                            {
                                internalType: "address",
                                name: "listingFeeRecipient",
                                type: "address",
                            },
                        ],
                        internalType: "struct AsksDataStorage.ListingFee",
                        name: "listingFee",
                        type: "tuple",
                    },
                ],
                internalType: "struct AsksDataStorage.FullAsk",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "registrar",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_tokenContract",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_askPrice",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_askCurrency",
                type: "address",
            },
        ],
        name: "setAskPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_royaltyEngine",
                type: "address",
            },
        ],
        name: "setRoyaltyEngineAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
var AskOmnibusAbi__factory = /** @class */ (function () {
    function AskOmnibusAbi__factory() {
    }
    AskOmnibusAbi__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    AskOmnibusAbi__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    AskOmnibusAbi__factory.abi = _abi;
    return AskOmnibusAbi__factory;
}());
exports.AskOmnibusAbi__factory = AskOmnibusAbi__factory;