import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace AsksDataStorage {
    type TokenGateStruct = {
        token: PromiseOrValue<string>;
        minAmount: PromiseOrValue<BigNumberish>;
    };
    type TokenGateStructOutput = [string, BigNumber] & {
        token: string;
        minAmount: BigNumber;
    };
    type ListingFeeStruct = {
        listingFeeBps: PromiseOrValue<BigNumberish>;
        listingFeeRecipient: PromiseOrValue<string>;
    };
    type ListingFeeStructOutput = [number, string] & {
        listingFeeBps: number;
        listingFeeRecipient: string;
    };
    type FullAskStruct = {
        price: PromiseOrValue<BigNumberish>;
        seller: PromiseOrValue<string>;
        expiry: PromiseOrValue<BigNumberish>;
        sellerFundsRecipient: PromiseOrValue<string>;
        findersFeeBps: PromiseOrValue<BigNumberish>;
        currency: PromiseOrValue<string>;
        buyer: PromiseOrValue<string>;
        tokenGate: AsksDataStorage.TokenGateStruct;
        listingFee: AsksDataStorage.ListingFeeStruct;
    };
    type FullAskStructOutput = [
        BigNumber,
        string,
        BigNumber,
        string,
        number,
        string,
        string,
        AsksDataStorage.TokenGateStructOutput,
        AsksDataStorage.ListingFeeStructOutput
    ] & {
        price: BigNumber;
        seller: string;
        expiry: BigNumber;
        sellerFundsRecipient: string;
        findersFeeBps: number;
        currency: string;
        buyer: string;
        tokenGate: AsksDataStorage.TokenGateStructOutput;
        listingFee: AsksDataStorage.ListingFeeStructOutput;
    };
}
export interface AskOmnibusAbiInterface extends utils.Interface {
    functions: {
        "_handleRoyaltyEnginePayout(address,uint256,uint256,address)": FunctionFragment;
        "askForNFT(address,uint256)": FunctionFragment;
        "cancelAsk(address,uint256)": FunctionFragment;
        "createAsk(address,uint256,uint96,uint256,address,address,address,uint16,(uint16,address),(address,uint256))": FunctionFragment;
        "createAskMinimal(address,uint256,uint256)": FunctionFragment;
        "erc20TransferHelper()": FunctionFragment;
        "erc721TransferHelper()": FunctionFragment;
        "fillAsk(address,uint256,uint256,address,address)": FunctionFragment;
        "getFullAsk(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "registrar()": FunctionFragment;
        "setAskPrice(address,uint256,uint256,address)": FunctionFragment;
        "setRoyaltyEngineAddress(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_handleRoyaltyEnginePayout" | "askForNFT" | "cancelAsk" | "createAsk" | "createAskMinimal" | "erc20TransferHelper" | "erc721TransferHelper" | "fillAsk" | "getFullAsk" | "name" | "registrar" | "setAskPrice" | "setRoyaltyEngineAddress" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "_handleRoyaltyEnginePayout", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "askForNFT", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "cancelAsk", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createAsk", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        AsksDataStorage.ListingFeeStruct,
        AsksDataStorage.TokenGateStruct
    ]): string;
    encodeFunctionData(functionFragment: "createAskMinimal", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "erc20TransferHelper", values?: undefined): string;
    encodeFunctionData(functionFragment: "erc721TransferHelper", values?: undefined): string;
    encodeFunctionData(functionFragment: "fillAsk", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getFullAsk", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "registrar", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAskPrice", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "setRoyaltyEngineAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "_handleRoyaltyEnginePayout", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "askForNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelAsk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAsk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAskMinimal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "erc20TransferHelper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "erc721TransferHelper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillAsk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFullAsk", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registrar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAskPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoyaltyEngineAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {
        "AskCanceled(address,uint256,tuple)": EventFragment;
        "AskCreated(address,uint256,tuple)": EventFragment;
        "AskFilled(address,uint256,address,address,tuple)": EventFragment;
        "AskPriceUpdated(address,uint256,tuple)": EventFragment;
        "RoyaltyPayout(address,uint256,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AskCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AskCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AskFilled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AskPriceUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoyaltyPayout"): EventFragment;
}
export interface AskCanceledEventObject {
    tokenContract: string;
    tokenId: BigNumber;
    ask: AsksDataStorage.FullAskStructOutput;
}
export declare type AskCanceledEvent = TypedEvent<[
    string,
    BigNumber,
    AsksDataStorage.FullAskStructOutput
], AskCanceledEventObject>;
export declare type AskCanceledEventFilter = TypedEventFilter<AskCanceledEvent>;
export interface AskCreatedEventObject {
    tokenContract: string;
    tokenId: BigNumber;
    ask: AsksDataStorage.FullAskStructOutput;
}
export declare type AskCreatedEvent = TypedEvent<[
    string,
    BigNumber,
    AsksDataStorage.FullAskStructOutput
], AskCreatedEventObject>;
export declare type AskCreatedEventFilter = TypedEventFilter<AskCreatedEvent>;
export interface AskFilledEventObject {
    tokenContract: string;
    tokenId: BigNumber;
    buyer: string;
    finder: string;
    ask: AsksDataStorage.FullAskStructOutput;
}
export declare type AskFilledEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    string,
    AsksDataStorage.FullAskStructOutput
], AskFilledEventObject>;
export declare type AskFilledEventFilter = TypedEventFilter<AskFilledEvent>;
export interface AskPriceUpdatedEventObject {
    tokenContract: string;
    tokenId: BigNumber;
    ask: AsksDataStorage.FullAskStructOutput;
}
export declare type AskPriceUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    AsksDataStorage.FullAskStructOutput
], AskPriceUpdatedEventObject>;
export declare type AskPriceUpdatedEventFilter = TypedEventFilter<AskPriceUpdatedEvent>;
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
export interface AskOmnibusAbi extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AskOmnibusAbiInterface;
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
        askForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            number
        ] & {
            price: BigNumber;
            seller: string;
            features: number;
        }>;
        cancelAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _expiry: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, _sellerFundsRecipient: PromiseOrValue<string>, _askCurrency: PromiseOrValue<string>, _buyer: PromiseOrValue<string>, _findersFeeBps: PromiseOrValue<BigNumberish>, _listingFee: AsksDataStorage.ListingFeeStruct, _tokenGate: AsksDataStorage.TokenGateStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createAskMinimal(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        erc20TransferHelper(overrides?: CallOverrides): Promise<[string]>;
        erc721TransferHelper(overrides?: CallOverrides): Promise<[string]>;
        fillAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _price: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _finder: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getFullAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[AsksDataStorage.FullAskStructOutput]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        registrar(overrides?: CallOverrides): Promise<[string]>;
        setAskPrice(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, _askCurrency: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    _handleRoyaltyEnginePayout(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _payoutCurrency: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    askForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        number
    ] & {
        price: BigNumber;
        seller: string;
        features: number;
    }>;
    cancelAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _expiry: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, _sellerFundsRecipient: PromiseOrValue<string>, _askCurrency: PromiseOrValue<string>, _buyer: PromiseOrValue<string>, _findersFeeBps: PromiseOrValue<BigNumberish>, _listingFee: AsksDataStorage.ListingFeeStruct, _tokenGate: AsksDataStorage.TokenGateStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createAskMinimal(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    erc20TransferHelper(overrides?: CallOverrides): Promise<string>;
    erc721TransferHelper(overrides?: CallOverrides): Promise<string>;
    fillAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _price: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _finder: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getFullAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<AsksDataStorage.FullAskStructOutput>;
    name(overrides?: CallOverrides): Promise<string>;
    registrar(overrides?: CallOverrides): Promise<string>;
    setAskPrice(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, _askCurrency: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        _handleRoyaltyEnginePayout(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _payoutCurrency: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        askForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            number
        ] & {
            price: BigNumber;
            seller: string;
            features: number;
        }>;
        cancelAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _expiry: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, _sellerFundsRecipient: PromiseOrValue<string>, _askCurrency: PromiseOrValue<string>, _buyer: PromiseOrValue<string>, _findersFeeBps: PromiseOrValue<BigNumberish>, _listingFee: AsksDataStorage.ListingFeeStruct, _tokenGate: AsksDataStorage.TokenGateStruct, overrides?: CallOverrides): Promise<void>;
        createAskMinimal(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        erc20TransferHelper(overrides?: CallOverrides): Promise<string>;
        erc721TransferHelper(overrides?: CallOverrides): Promise<string>;
        fillAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _price: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _finder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        getFullAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<AsksDataStorage.FullAskStructOutput>;
        name(overrides?: CallOverrides): Promise<string>;
        registrar(overrides?: CallOverrides): Promise<string>;
        setAskPrice(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, _askCurrency: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AskCanceled(address,uint256,tuple)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, ask?: null): AskCanceledEventFilter;
        AskCanceled(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, ask?: null): AskCanceledEventFilter;
        "AskCreated(address,uint256,tuple)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, ask?: null): AskCreatedEventFilter;
        AskCreated(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, ask?: null): AskCreatedEventFilter;
        "AskFilled(address,uint256,address,address,tuple)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, buyer?: PromiseOrValue<string> | null, finder?: null, ask?: null): AskFilledEventFilter;
        AskFilled(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, buyer?: PromiseOrValue<string> | null, finder?: null, ask?: null): AskFilledEventFilter;
        "AskPriceUpdated(address,uint256,tuple)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, ask?: null): AskPriceUpdatedEventFilter;
        AskPriceUpdated(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, ask?: null): AskPriceUpdatedEventFilter;
        "RoyaltyPayout(address,uint256,address,uint256)"(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, recipient?: null, amount?: null): RoyaltyPayoutEventFilter;
        RoyaltyPayout(tokenContract?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null, recipient?: null, amount?: null): RoyaltyPayoutEventFilter;
    };
    estimateGas: {
        _handleRoyaltyEnginePayout(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _payoutCurrency: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        askForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        cancelAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _expiry: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, _sellerFundsRecipient: PromiseOrValue<string>, _askCurrency: PromiseOrValue<string>, _buyer: PromiseOrValue<string>, _findersFeeBps: PromiseOrValue<BigNumberish>, _listingFee: AsksDataStorage.ListingFeeStruct, _tokenGate: AsksDataStorage.TokenGateStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createAskMinimal(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        erc20TransferHelper(overrides?: CallOverrides): Promise<BigNumber>;
        erc721TransferHelper(overrides?: CallOverrides): Promise<BigNumber>;
        fillAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _price: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _finder: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getFullAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        registrar(overrides?: CallOverrides): Promise<BigNumber>;
        setAskPrice(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, _askCurrency: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _handleRoyaltyEnginePayout(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _amount: PromiseOrValue<BigNumberish>, _payoutCurrency: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        askForNFT(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _expiry: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, _sellerFundsRecipient: PromiseOrValue<string>, _askCurrency: PromiseOrValue<string>, _buyer: PromiseOrValue<string>, _findersFeeBps: PromiseOrValue<BigNumberish>, _listingFee: AsksDataStorage.ListingFeeStruct, _tokenGate: AsksDataStorage.TokenGateStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createAskMinimal(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        erc20TransferHelper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        erc721TransferHelper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fillAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _price: PromiseOrValue<BigNumberish>, _currency: PromiseOrValue<string>, _finder: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getFullAsk(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registrar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAskPrice(_tokenContract: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, _askPrice: PromiseOrValue<BigNumberish>, _askCurrency: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRoyaltyEngineAddress(_royaltyEngine: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(_interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
