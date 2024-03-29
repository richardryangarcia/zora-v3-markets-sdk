import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface Erc721TransferHelperAbiInterface extends utils.Interface {
    functions: {
        "ZMM()": FunctionFragment;
        "isModuleApproved(address)": FunctionFragment;
        "safeTransferFrom(address,address,address,uint256)": FunctionFragment;
        "transferFrom(address,address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ZMM" | "isModuleApproved" | "safeTransferFrom" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "ZMM", values?: undefined): string;
    encodeFunctionData(functionFragment: "isModuleApproved", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "ZMM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isModuleApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {};
}
export interface Erc721TransferHelperAbi extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Erc721TransferHelperAbiInterface;
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
        ZMM(overrides?: CallOverrides): Promise<[string]>;
        isModuleApproved(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        safeTransferFrom(_token: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(_token: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ZMM(overrides?: CallOverrides): Promise<string>;
    isModuleApproved(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    safeTransferFrom(_token: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(_token: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ZMM(overrides?: CallOverrides): Promise<string>;
        isModuleApproved(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        safeTransferFrom(_token: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        transferFrom(_token: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        ZMM(overrides?: CallOverrides): Promise<BigNumber>;
        isModuleApproved(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        safeTransferFrom(_token: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(_token: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ZMM(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isModuleApproved(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safeTransferFrom(_token: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(_token: PromiseOrValue<string>, _from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
