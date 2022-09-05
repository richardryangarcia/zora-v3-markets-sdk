"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferAbi__factory = void 0;
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
                name: "_wethAddress",
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
                name: "userA",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "userB",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "tokenContract",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                indexed: false,
                internalType: "struct UniversalExchangeEventV1.ExchangeDetails",
                name: "a",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "tokenContract",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                indexed: false,
                internalType: "struct UniversalExchangeEventV1.ExchangeDetails",
                name: "b",
                type: "tuple",
            },
        ],
        name: "ExchangeExecuted",
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
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "maker",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "uint16",
                        name: "findersFeeBps",
                        type: "uint16",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                indexed: false,
                internalType: "struct OffersV1.Offer",
                name: "offer",
                type: "tuple",
            },
        ],
        name: "OfferCanceled",
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
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "maker",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "uint16",
                        name: "findersFeeBps",
                        type: "uint16",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                indexed: false,
                internalType: "struct OffersV1.Offer",
                name: "offer",
                type: "tuple",
            },
        ],
        name: "OfferCreated",
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
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "taker",
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
                        internalType: "address",
                        name: "maker",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "uint16",
                        name: "findersFeeBps",
                        type: "uint16",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                indexed: false,
                internalType: "struct OffersV1.Offer",
                name: "offer",
                type: "tuple",
            },
        ],
        name: "OfferFilled",
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
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "maker",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address",
                    },
                    {
                        internalType: "uint16",
                        name: "findersFeeBps",
                        type: "uint16",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                indexed: false,
                internalType: "struct OffersV1.Offer",
                name: "offer",
                type: "tuple",
            },
        ],
        name: "OfferUpdated",
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
                name: "_offerId",
                type: "uint256",
            },
        ],
        name: "cancelOffer",
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
                internalType: "address",
                name: "_currency",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint16",
                name: "_findersFeeBps",
                type: "uint16",
            },
        ],
        name: "createOffer",
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
                name: "_offerId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_currency",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_finder",
                type: "address",
            },
        ],
        name: "fillOffer",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "offerCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
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
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "offers",
        outputs: [
            {
                internalType: "address",
                name: "maker",
                type: "address",
            },
            {
                internalType: "address",
                name: "currency",
                type: "address",
            },
            {
                internalType: "uint16",
                name: "findersFeeBps",
                type: "uint16",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        stateMutability: "view",
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
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "offersForNFT",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
                name: "_offerId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_currency",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "setOfferAmount",
        outputs: [],
        stateMutability: "payable",
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
];
var OfferAbi__factory = /** @class */ (function () {
    function OfferAbi__factory() {
    }
    OfferAbi__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    OfferAbi__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    OfferAbi__factory.abi = _abi;
    return OfferAbi__factory;
}());
exports.OfferAbi__factory = OfferAbi__factory;
