import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import { Erc721TransferHelperAbi } from "../typechain";
export declare class Erc721TransferHelper {
    contract: Erc721TransferHelperAbi;
    signerOrProvider: Signer | Provider;
    contractAddress: string;
    constructor(signerOrProvider: Signer | Provider, contractAddress: string);
    isModuleApproved(userAddress: string): Promise<boolean>;
}
