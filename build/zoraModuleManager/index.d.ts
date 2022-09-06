import { ContractTransaction, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import { ZoraModuleManagerAbi } from "../typechain";
export declare class ZoraModuleManager {
    contract: ZoraModuleManagerAbi;
    signerOrProvider: Signer | Provider;
    contractAddress: string;
    constructor(signerOrProvider: Signer | Provider, contractAddress: string);
    isModuleApproved(userAddress: string, moduleAddress: string): Promise<boolean>;
    isModuleRegistered(moduleAddress: string): Promise<boolean>;
    setApprovalForModule(moduleAddress: string, flag: boolean): Promise<ContractTransaction>;
    setBatchApprovalForModules(moduleAddresses: string[], flag: boolean): Promise<ContractTransaction>;
}
