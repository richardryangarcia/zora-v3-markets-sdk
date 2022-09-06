import { BigNumber, ContractTransaction, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import { AskAbi } from "../typechain";
export declare class Ask {
    contract: AskAbi;
    signerOrProvider: Signer | Provider;
    contractAddress: string;
    constructor(signerOrProvider: Signer | Provider, contractAddress: string);
    askForNFT(contractAddress: string, tokenId: number): Promise<[
        string,
        string,
        string,
        number,
        BigNumber
    ] & {
        seller: string;
        sellerFundsRecipient: string;
        askCurrency: string;
        findersFeeBps: number;
        askPrice: BigNumber;
    }>;
    createAsk(contractAddress: string, tokenId: number, recipientAddress: string, askAmount: number, askCurrencyAddress?: string, findersFeeBps?: number): Promise<ContractTransaction>;
    setAskPrice(contractAddress: string, tokenId: number, askAmount: number, askCurrencyAddress?: string): Promise<ContractTransaction>;
    cancelAsk(contractAddress: string, tokenId: number): Promise<ContractTransaction>;
    fillAsk(contractAddress: string, tokenId: number, fillAmount: number, fillCurrencyAddress: string | undefined, finderAddress: string): Promise<ContractTransaction>;
}
