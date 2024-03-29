import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace ReserveAuctionCoreEth {
    type AuctionStruct = {
        seller: PromiseOrValue<string>;
        reservePrice: PromiseOrValue<BigNumberish>;
        sellerFundsRecipient: PromiseOrValue<string>;
        highestBid: PromiseOrValue<BigNumberish>;
        highestBidder: PromiseOrValue<string>;
        duration: PromiseOrValue<BigNumberish>;
        startTime: PromiseOrValue<BigNumberish>;
        firstBidTime: PromiseOrValue<BigNumberish>;
    };
    type AuctionStructOutput = [
        string,
        BigNumber,
        string,
        BigNumber,
        string,
        number,
        number,
        number
    ] & {
        seller: string;
        reservePrice: BigNumber;
        sellerFundsRecipient: string;
        highestBid: BigNumber;
        highestBidder: string;
        duration: number;
        startTime: number;
        firstBidTime: number;
    };
}
export interface AuctionCoreEthAbiInterface extends utils.Interface {
    functions: {
        "_handleRoyaltyEnginePayout(address,uint256,uint256,address)": FunctionFragment;
        "auctionForNFT(address,uint256)": FunctionFragment;
        "cancelAuction(address,uint256)": FunctionFragment;
        "createAuction(address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "createBid(address,uint256)": FunctionFragment;
        "erc721TransferHelper()": FunctionFragment;
        "name()": FunctionFragment;
        "registrar()": FunctionFragment;
        "setAuctionReservePrice(address,uint256,uint256)": FunctionFragment;
        "setRoyaltyEngineAddress(address)": FunctionFragment;
        "settleAuction(address,uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_handleRoyaltyEnginePayout" | "auctionForNFT" | "cancelAuction" | "createAuction" | "createBid" | "erc721TransferHelper" | "name" | "registrar" | "setAuctionReservePrice" | "setRoyaltyEngineAddress" | "settleAuction" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "_handleRoyaltyEnginePayout", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "auctionForNFT", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "cancelAuction", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createAuction", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "createBid", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "erc721TransferHelper", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "registrar", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAuctionReservePrice", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setRoyaltyEngineAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "settleAuction", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "_handleRoyaltyEnginePayout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "auctionForNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createBid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "erc721TransferHelper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registrar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAuctionReservePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoyaltyEngineAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {
        "AuctionBid(address,uint256,bool,bool,tuple)": EventFragment;
        "AuctionCanceled(address,uint256,tuple)": EventFragment;
        "AuctionCreated(address,uint256,tuple)": EventFragment;
        "AuctionEnded(address,uint256,tuple)": EventFragment;
        "AuctionReservePriceUpdated(address,uint256,tuple)": EventFragment;
        "RoyaltyPayout(address,uint256,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AuctionBid"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuctionCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuctionCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuctionEnded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuctionReservePriceUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoyaltyPayout"): EventFragment;
}
export interface AuctionBidEventObject {
    tokenContract: string;
    tokenId: BigNumber;
    firstBid: boolean;
    extended: boolean;
    auction: ReserveAuctionCoreEth.AuctionStructOutput;
}
export declare type AuctionBidEvent = TypedEvent<[
    string,
    BigNumber,
    boolean,
    boolean,
    ReserveAuctionCoreEth.AuctionStructOutput
], AuctionBidEventObject>;
export declare type AuctionBidEventFilter = TypedEventFilter<AuctionBidEvent>;
export interface AuctionCanceledEventObject {
    tokenContract: string;
    tokenId: BigNumber;
    auction: ReserveAuctionCoreEth.AuctionStructOutput;
}
export declare type AuctionCanceledEvent = TypedEvent<[
    string,
    BigNumber,
    ReserveAuctionCoreEth.AuctionStructOutput
], AuctionCanceledEventObject>;
export declare type AuctionCanceledEventFilter = TypedEventFilter<AuctionCanceledEvent>;
export interface AuctionCreatedEventObject {
    tokenContract: string;
    tokenId: BigNumber;
    auction: ReserveAuctionCoreEth.AuctionStructOutput;
}
export declare type AuctionCreatedEvent = TypedEvent<[
    string,
    BigNumber,
    ReserveAuctionCoreEth.AuctionStructOutput
], AuctionCreatedEventObject>;
export declare type AuctionCreatedEventFilter = TypedEventFilter<AuctionCreatedEvent>;
export interface AuctionEndedEventObject {
    tokenContract: string;
    tokenId: BigNumber;
    auction: ReserveAuctionCoreEth.AuctionStructOutput;
}
export declare type AuctionEndedEvent = TypedEvent<[
    string,
    BigNumber,
    ReserveAuctionCoreEth.AuctionStructOutput
], AuctionEndedEventObject>;
export declare type AuctionEndedEventFilter = TypedEventFilter<AuctionEndedEvent>;
export interface AuctionReservePriceUpdatedEventObject {
    tokenContract: string;
    tokenId: BigNumber;
    auction: ReserveAuctionCoreEth.AuctionStructOutput;
}
export declare type AuctionReservePriceUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    ReserveAuctionCoreEth.AuctionStructOutput
], AuctionReservePriceUpdatedEventObject>;
export declare type AuctionReservePriceUpdatedEventFilter = TypedEventFilter<AuctionReservePriceUpdatedEvent>;
export interface RoyaltyPayoutEventObject {
    tokenContract: string;
    tokenId: BigNumber;
    recipient: string;
    amount: BigNumber;
}
export declare type RoyaltyPayoutEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber
], RoyaltyPayoutEventObject>;
export declare type RoyaltyPayoutEventFilter = TypedEventFilter<RoyaltyPayoutEvent>;
export interface AuctionCoreEthAbi extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AuctionCoreEthAbiInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        _handleRoyaltyEnginePayout(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _payoutCurrency: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        auctionForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            string,
            BigNumber,
            string,
            number,
            number,
            number
        ] & {
            seller: string;
            reservePrice: BigNumber;
            sellerFundsRecipient: string;
            highestBid: BigNumber;
            highestBidder: string;
            duration: number;
            startTime: number;
            firstBidTime: number;
        }>;
        cancelAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, _sellerFundsRecipient: PromiseOrValue<string>, _startTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createBid(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        erc721TransferHelper(overrides?: CallOverrides): Promise<[string]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        registrar(overrides?: CallOverrides): Promise<[string]>;
        setAuctionReservePrice(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        settleAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    _handleRoyaltyEnginePayout(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _payoutCurrency: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    auctionForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        string,
        BigNumber,
        string,
        number,
        number,
        number
    ] & {
        seller: string;
        reservePrice: BigNumber;
        sellerFundsRecipient: string;
        highestBid: BigNumber;
        highestBidder: string;
        duration: number;
        startTime: number;
        firstBidTime: number;
    }>;
    cancelAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, _sellerFundsRecipient: PromiseOrValue<string>, _startTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createBid(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    erc721TransferHelper(overrides?: CallOverrides): Promise<string>;
    name(overrides?: CallOverrides): Promise<string>;
    registrar(overrides?: CallOverrides): Promise<string>;
    setAuctionReservePrice(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    settleAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        _handleRoyaltyEnginePayout(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _payoutCurrency: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        auctionForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            string,
            BigNumber,
            string,
            number,
            number,
            number
        ] & {
            seller: string;
            reservePrice: BigNumber;
            sellerFundsRecipient: string;
            highestBid: BigNumber;
            highestBidder: string;
            duration: number;
            startTime: number;
            firstBidTime: number;
        }>;
        cancelAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, _sellerFundsRecipient: PromiseOrValue<string>, _startTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createBid(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        erc721TransferHelper(overrides?: CallOverrides): Promise<string>;
        name(overrides?: CallOverrides): Promise<string>;
        registrar(overrides?: CallOverrides): Promise<string>;
        setAuctionReservePrice(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        settleAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AuctionBid(address,uint256,bool,bool,tuple)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, firstBid?: null, extended?: null, auction?: null): AuctionBidEventFilter;
        AuctionBid(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, firstBid?: null, extended?: null, auction?: null): AuctionBidEventFilter;
        "AuctionCanceled(address,uint256,tuple)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, auction?: null): AuctionCanceledEventFilter;
        AuctionCanceled(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, auction?: null): AuctionCanceledEventFilter;
        "AuctionCreated(address,uint256,tuple)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, auction?: null): AuctionCreatedEventFilter;
        AuctionCreated(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, auction?: null): AuctionCreatedEventFilter;
        "AuctionEnded(address,uint256,tuple)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, auction?: null): AuctionEndedEventFilter;
        AuctionEnded(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, auction?: null): AuctionEndedEventFilter;
        "AuctionReservePriceUpdated(address,uint256,tuple)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, auction?: null): AuctionReservePriceUpdatedEventFilter;
        AuctionReservePriceUpdated(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, auction?: null): AuctionReservePriceUpdatedEventFilter;
        "RoyaltyPayout(address,uint256,address,uint256)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, recipient?: null, amount?: null): RoyaltyPayoutEventFilter;
        RoyaltyPayout(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, recipient?: null, amount?: null): RoyaltyPayoutEventFilter;
    };
    estimateGas: {
        _handleRoyaltyEnginePayout(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _payoutCurrency: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        auctionForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        cancelAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, _sellerFundsRecipient: PromiseOrValue<string>, _startTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createBid(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        erc721TransferHelper(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        registrar(overrides?: CallOverrides): Promise<BigNumber>;
        setAuctionReservePrice(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        settleAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _handleRoyaltyEnginePayout(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _payoutCurrency: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        auctionForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, _sellerFundsRecipient: PromiseOrValue<string>, _startTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createBid(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        erc721TransferHelper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registrar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAuctionReservePrice(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        settleAuction(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
