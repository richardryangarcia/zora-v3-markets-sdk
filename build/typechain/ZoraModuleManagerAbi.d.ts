import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ZoraModuleManagerAbiInterface extends utils.Interface {
    functions: {
        "isModuleApproved(address,address)": FunctionFragment;
        "moduleFeeToken()": FunctionFragment;
        "moduleRegistered(address)": FunctionFragment;
        "registerModule(address)": FunctionFragment;
        "registrar()": FunctionFragment;
        "setApprovalForModule(address,bool)": FunctionFragment;
        "setApprovalForModuleBySig(address,address,bool,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "setBatchApprovalForModules(address[],bool)": FunctionFragment;
        "setRegistrar(address)": FunctionFragment;
        "sigNonces(address)": FunctionFragment;
        "userApprovals(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "isModuleApproved" | "moduleFeeToken" | "moduleRegistered" | "registerModule" | "registrar" | "setApprovalForModule" | "setApprovalForModuleBySig" | "setBatchApprovalForModules" | "setRegistrar" | "sigNonces" | "userApprovals"): FunctionFragment;
    encodeFunctionData(functionFragment: "isModuleApproved", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "moduleFeeToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "moduleRegistered", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "registerModule", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "registrar", values?: undefined): string;
    encodeFunctionData(functionFragment: "setApprovalForModule", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setApprovalForModuleBySig", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setBatchApprovalForModules", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setRegistrar", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "sigNonces", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "userApprovals", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "isModuleApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moduleFeeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moduleRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registrar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForModuleBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBatchApprovalForModules", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRegistrar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sigNonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userApprovals", data: BytesLike): Result;
    events: {
        "ModuleApprovalSet(address,address,bool)": EventFragment;
        "ModuleRegistered(address)": EventFragment;
        "RegistrarChanged(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ModuleApprovalSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModuleRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RegistrarChanged"): EventFragment;
}
export interface ModuleApprovalSetEventObject {
    user: string;
    module: string;
    approved: boolean;
}
export declare type ModuleApprovalSetEvent = TypedEvent<[
    string,
    string,
    boolean
], ModuleApprovalSetEventObject>;
export declare type ModuleApprovalSetEventFilter = TypedEventFilter<ModuleApprovalSetEvent>;
export interface ModuleRegisteredEventObject {
    module: string;
}
export declare type ModuleRegisteredEvent = TypedEvent<[
    string
], ModuleRegisteredEventObject>;
export declare type ModuleRegisteredEventFilter = TypedEventFilter<ModuleRegisteredEvent>;
export interface RegistrarChangedEventObject {
    newRegistrar: string;
}
export declare type RegistrarChangedEvent = TypedEvent<[
    string
], RegistrarChangedEventObject>;
export declare type RegistrarChangedEventFilter = TypedEventFilter<RegistrarChangedEvent>;
export interface ZoraModuleManagerAbi extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ZoraModuleManagerAbiInterface;
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
        isModuleApproved(_user: PromiseOrValue<string>, _module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        moduleFeeToken(overrides?: CallOverrides): Promise<[string]>;
        moduleRegistered(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        registerModule(_module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registrar(overrides?: CallOverrides): Promise<[string]>;
        setApprovalForModule(_module: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForModuleBySig(_module: PromiseOrValue<string>, _user: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, _deadline: PromiseOrValue<BigNumberish>, _v: PromiseOrValue<BigNumberish>, _r: PromiseOrValue<BytesLike>, _s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBatchApprovalForModules(_modules: PromiseOrValue<string>[], _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRegistrar(_registrar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sigNonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        userApprovals(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    isModuleApproved(_user: PromiseOrValue<string>, _module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    moduleFeeToken(overrides?: CallOverrides): Promise<string>;
    moduleRegistered(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    registerModule(_module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registrar(overrides?: CallOverrides): Promise<string>;
    setApprovalForModule(_module: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForModuleBySig(_module: PromiseOrValue<string>, _user: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, _deadline: PromiseOrValue<BigNumberish>, _v: PromiseOrValue<BigNumberish>, _r: PromiseOrValue<BytesLike>, _s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBatchApprovalForModules(_modules: PromiseOrValue<string>[], _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRegistrar(_registrar: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sigNonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    userApprovals(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        isModuleApproved(_user: PromiseOrValue<string>, _module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        moduleFeeToken(overrides?: CallOverrides): Promise<string>;
        moduleRegistered(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        registerModule(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        registrar(overrides?: CallOverrides): Promise<string>;
        setApprovalForModule(_module: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setApprovalForModuleBySig(_module: PromiseOrValue<string>, _user: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, _deadline: PromiseOrValue<BigNumberish>, _v: PromiseOrValue<BigNumberish>, _r: PromiseOrValue<BytesLike>, _s: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setBatchApprovalForModules(_modules: PromiseOrValue<string>[], _approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setRegistrar(_registrar: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        sigNonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        userApprovals(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "ModuleApprovalSet(address,address,bool)"(user?: PromiseOrValue<string> | null, module?: PromiseOrValue<string> | null, approved?: null): ModuleApprovalSetEventFilter;
        ModuleApprovalSet(user?: PromiseOrValue<string> | null, module?: PromiseOrValue<string> | null, approved?: null): ModuleApprovalSetEventFilter;
        "ModuleRegistered(address)"(module?: PromiseOrValue<string> | null): ModuleRegisteredEventFilter;
        ModuleRegistered(module?: PromiseOrValue<string> | null): ModuleRegisteredEventFilter;
        "RegistrarChanged(address)"(newRegistrar?: PromiseOrValue<string> | null): RegistrarChangedEventFilter;
        RegistrarChanged(newRegistrar?: PromiseOrValue<string> | null): RegistrarChangedEventFilter;
    };
    estimateGas: {
        isModuleApproved(_user: PromiseOrValue<string>, _module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        moduleFeeToken(overrides?: CallOverrides): Promise<BigNumber>;
        moduleRegistered(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        registerModule(_module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registrar(overrides?: CallOverrides): Promise<BigNumber>;
        setApprovalForModule(_module: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForModuleBySig(_module: PromiseOrValue<string>, _user: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, _deadline: PromiseOrValue<BigNumberish>, _v: PromiseOrValue<BigNumberish>, _r: PromiseOrValue<BytesLike>, _s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBatchApprovalForModules(_modules: PromiseOrValue<string>[], _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRegistrar(_registrar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sigNonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        userApprovals(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isModuleApproved(_user: PromiseOrValue<string>, _module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        moduleFeeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        moduleRegistered(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerModule(_module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registrar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setApprovalForModule(_module: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForModuleBySig(_module: PromiseOrValue<string>, _user: PromiseOrValue<string>, _approved: PromiseOrValue<boolean>, _deadline: PromiseOrValue<BigNumberish>, _v: PromiseOrValue<BigNumberish>, _r: PromiseOrValue<BytesLike>, _s: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBatchApprovalForModules(_modules: PromiseOrValue<string>[], _approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRegistrar(_registrar: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sigNonces(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userApprovals(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
