import { Provider } from "@ethersproject/providers";
import { BigNumber, ContractTransaction, Signer } from "ethers";
import { AskOmnibusAbi } from "../typechain";
import { AsksDataStorage } from "../typechain/AskOmnibusAbi";
export declare class AskOmnibus {
    contract: AskOmnibusAbi;
    signerOrProvider: Signer | Provider;
    contractAddress: string;
    constructor(signerOrProvider: Signer | Provider, contractAddress: string);
    askForNFT(contractAddress: string, tokenId: number): Promise<[
        BigNumber,
        string,
        number
    ] & {
        price: BigNumber;
        seller: string;
        features: number;
    }>;
    getFullAsk(contractAddress: string, tokenId: number): Promise<AsksDataStorage.FullAskStructOutput>;
    createAskMinimal(contractAddress: string, tokenId: number, askAmount: number): Promise<ContractTransaction>;
    setAskPrice(contractAddress: string, tokenId: number, askAmount: number, askCurrencyAddress?: string): Promise<ContractTransaction>;
    cancelAsk(contractAddress: string, tokenId: number): Promise<ContractTransaction>;
    fillAsk(contractAddress: string, tokenId: number, fillAmount: number, finderAddress: string, fillCurrencyAddress?: string): Promise<ContractTransaction>;
}
