import { Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
export declare const getChainId: (signerOrProvider: Signer | Provider) => Promise<number>;
