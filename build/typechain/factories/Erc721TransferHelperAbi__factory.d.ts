import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Erc721TransferHelperAbi, Erc721TransferHelperAbiInterface } from "../Erc721TransferHelperAbi";
export declare class Erc721TransferHelperAbi__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): Erc721TransferHelperAbiInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Erc721TransferHelperAbi;
}
