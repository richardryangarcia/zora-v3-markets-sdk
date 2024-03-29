import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace UniversalExchangeEventV1 {
    type ExchangeDetailsStruct = {
        tokenContract: PromiseOrValue<string>;
        tokenId: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type ExchangeDetailsStructOutput = [string, BigNumber, BigNumber] & {
        tokenContract: string;
        tokenId: BigNumber;
        amount: BigNumber;
    };
}
export declare namespace OffersV1 {
    type OfferStruct = {
        maker: PromiseOrValue<string>;
        currency: PromiseOrValue<string>;
        findersFeeBps: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type OfferStructOutput = [string, string, number, BigNumber] & {
        maker: string;
        currency: string;
        findersFeeBps: number;
        amount: BigNumber;
    };
}
export interface OfferAbiInterface extends utils.Interface {
    functions: {
        "_handleRoyaltyEnginePayout(address,uint256,uint256,address)": FunctionFragment;
        "cancelOffer(address,uint256,uint256)": FunctionFragment;
        "createOffer(address,uint256,address,uint256,uint16)": FunctionFragment;
        "erc20TransferHelper()": FunctionFragment;
        "erc721TransferHelper()": FunctionFragment;
        "fillOffer(address,uint256,uint256,address,uint256,address)": FunctionFragment;
        "name()": FunctionFragment;
        "offerCount()": FunctionFragment;
        "offers(address,uint256,uint256)": FunctionFragment;
        "offersForNFT(address,uint256,uint256)": FunctionFragment;
        "registrar()": FunctionFragment;
        "setOfferAmount(address,uint256,uint256,address,uint256)": FunctionFragment;
        "setRoyaltyEngineAddress(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_handleRoyaltyEnginePayout" | "cancelOffer" | "createOffer" | "erc20TransferHelper" | "erc721TransferHelper" | "fillOffer" | "name" | "offerCount" | "offers" | "offersForNFT" | "registrar" | "setOfferAmount" | "setRoyaltyEngineAddress"): FunctionFragment;
    encodeFunctionData(functionFragment: "_handleRoyaltyEnginePayout", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "cancelOffer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "createOffer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "erc20TransferHelper", values?: undefined): string;
    encodeFunctionData(functionFragment: "erc721TransferHelper", values?: undefined): string;
    encodeFunctionData(functionFragment: "fillOffer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "offerCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "offers", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "offersForNFT", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "registrar", values?: undefined): string;
    encodeFunctionData(functionFragment: "setOfferAmount", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setRoyaltyEngineAddress", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "_handleRoyaltyEnginePayout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createOffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "erc20TransferHelper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "erc721TransferHelper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillOffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "offerCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "offers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "offersForNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registrar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOfferAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoyaltyEngineAddress", data: BytesLike): Result;
    events: {
        "ExchangeExecuted(address,address,tuple,tuple)": EventFragment;
        "OfferCanceled(address,uint256,uint256,tuple)": EventFragment;
        "OfferCreated(address,uint256,uint256,tuple)": EventFragment;
        "OfferFilled(address,uint256,uint256,address,address,tuple)": EventFragment;
        "OfferUpdated(address,uint256,uint256,tuple)": EventFragment;
        "RoyaltyPayout(address,uint256,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ExchangeExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OfferCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OfferCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OfferFilled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OfferUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoyaltyPayout"): EventFragment;
}
export interface ExchangeExecutedEventObject {
    userA: string;
    userB: string;
    a: UniversalExchangeEventV1.ExchangeDetailsStructOutput;
    b: UniversalExchangeEventV1.ExchangeDetailsStructOutput;
}
export declare type ExchangeExecutedEvent = TypedEvent<[
    string,
    string,
    UniversalExchangeEventV1.ExchangeDetailsStructOutput,
    UniversalExchangeEventV1.ExchangeDetailsStructOutput
], ExchangeExecutedEventObject>;
export declare type ExchangeExecutedEventFilter = TypedEventFilter<ExchangeExecutedEvent>;
export interface OfferCanceledEventObject {
    tokenContract: string;
    tokenId: BigNumber;
    id: BigNumber;
    offer: OffersV1.OfferStructOutput;
}
export declare type OfferCanceledEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    OffersV1.OfferStructOutput
], OfferCanceledEventObject>;
export declare type OfferCanceledEventFilter = TypedEventFilter<OfferCanceledEvent>;
export interface OfferCreatedEventObject {
    tokenContract: string;
    tokenId: BigNumber;
    id: BigNumber;
    offer: OffersV1.OfferStructOutput;
}
export declare type OfferCreatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    OffersV1.OfferStructOutput
], OfferCreatedEventObject>;
export declare type OfferCreatedEventFilter = TypedEventFilter<OfferCreatedEvent>;
export interface OfferFilledEventObject {
    tokenContract: string;
    tokenId: BigNumber;
    id: BigNumber;
    taker: string;
    finder: string;
    offer: OffersV1.OfferStructOutput;
}
export declare type OfferFilledEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    OffersV1.OfferStructOutput
], OfferFilledEventObject>;
export declare type OfferFilledEventFilter = TypedEventFilter<OfferFilledEvent>;
export interface OfferUpdatedEventObject {
    tokenContract: string;
    tokenId: BigNumber;
    id: BigNumber;
    offer: OffersV1.OfferStructOutput;
}
export declare type OfferUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    OffersV1.OfferStructOutput
], OfferUpdatedEventObject>;
export declare type OfferUpdatedEventFilter = TypedEventFilter<OfferUpdatedEvent>;
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
export interface OfferAbi extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OfferAbiInterface;
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
        cancelOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _findersFeeBps: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        erc20TransferHelper(overrides?: CallOverrides): Promise<[string]>;
        erc721TransferHelper(overrides?: CallOverrides): Promise<[string]>;
        fillOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _finder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        offerCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        offers(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            string,
            number,
            BigNumber
        ] & {
            maker: string;
            currency: string;
            findersFeeBps: number;
            amount: BigNumber;
        }>;
        offersForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        registrar(overrides?: CallOverrides): Promise<[string]>;
        setOfferAmount(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _handleRoyaltyEnginePayout(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _payoutCurrency: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _findersFeeBps: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    erc20TransferHelper(overrides?: CallOverrides): Promise<string>;
    erc721TransferHelper(overrides?: CallOverrides): Promise<string>;
    fillOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _finder: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    offerCount(overrides?: CallOverrides): Promise<BigNumber>;
    offers(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string,
        string,
        number,
        BigNumber
    ] & {
        maker: string;
        currency: string;
        findersFeeBps: number;
        amount: BigNumber;
    }>;
    offersForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    registrar(overrides?: CallOverrides): Promise<string>;
    setOfferAmount(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _handleRoyaltyEnginePayout(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _payoutCurrency: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        cancelOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _findersFeeBps: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        erc20TransferHelper(overrides?: CallOverrides): Promise<string>;
        erc721TransferHelper(overrides?: CallOverrides): Promise<string>;
        fillOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _finder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        offerCount(overrides?: CallOverrides): Promise<BigNumber>;
        offers(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string,
            string,
            number,
            BigNumber
        ] & {
            maker: string;
            currency: string;
            findersFeeBps: number;
            amount: BigNumber;
        }>;
        offersForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        registrar(overrides?: CallOverrides): Promise<string>;
        setOfferAmount(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ExchangeExecuted(address,address,tuple,tuple)"(userA?: PromiseOrValue<string> | null, userB?: PromiseOrValue<string> | null, a?: null, b?: null): ExchangeExecutedEventFilter;
        ExchangeExecuted(userA?: PromiseOrValue<string> | null, userB?: PromiseOrValue<string> | null, a?: null, b?: null): ExchangeExecutedEventFilter;
        "OfferCanceled(address,uint256,uint256,tuple)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, id?: PromiseOrValue<BigNumberish> | null, offer?: null): OfferCanceledEventFilter;
        OfferCanceled(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, id?: PromiseOrValue<BigNumberish> | null, offer?: null): OfferCanceledEventFilter;
        "OfferCreated(address,uint256,uint256,tuple)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, id?: PromiseOrValue<BigNumberish> | null, offer?: null): OfferCreatedEventFilter;
        OfferCreated(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, id?: PromiseOrValue<BigNumberish> | null, offer?: null): OfferCreatedEventFilter;
        "OfferFilled(address,uint256,uint256,address,address,tuple)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, id?: PromiseOrValue<BigNumberish> | null, taker?: null, finder?: null, offer?: null): OfferFilledEventFilter;
        OfferFilled(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, id?: PromiseOrValue<BigNumberish> | null, taker?: null, finder?: null, offer?: null): OfferFilledEventFilter;
        "OfferUpdated(address,uint256,uint256,tuple)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, id?: PromiseOrValue<BigNumberish> | null, offer?: null): OfferUpdatedEventFilter;
        OfferUpdated(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, id?: PromiseOrValue<BigNumberish> | null, offer?: null): OfferUpdatedEventFilter;
        "RoyaltyPayout(address,uint256,address,uint256)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, recipient?: PromiseOrValue<string> | null, amount?: null): RoyaltyPayoutEventFilter;
        RoyaltyPayout(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, recipient?: PromiseOrValue<string> | null, amount?: null): RoyaltyPayoutEventFilter;
    };
    estimateGas: {
        _handleRoyaltyEnginePayout(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _payoutCurrency: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _findersFeeBps: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        erc20TransferHelper(overrides?: CallOverrides): Promise<BigNumber>;
        erc721TransferHelper(overrides?: CallOverrides): Promise<BigNumber>;
        fillOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _finder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        offerCount(overrides?: CallOverrides): Promise<BigNumber>;
        offers(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        offersForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        registrar(overrides?: CallOverrides): Promise<BigNumber>;
        setOfferAmount(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _handleRoyaltyEnginePayout(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _payoutCurrency: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _findersFeeBps: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        erc20TransferHelper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        erc721TransferHelper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fillOffer(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _finder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        offerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        offers(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        offersForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registrar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setOfferAmount(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _offerId: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
