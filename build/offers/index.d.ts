import { Provider } from "@ethersproject/providers";
import { BigNumber, BigNumberish, ContractTransaction, Signer } from "ethers";
import { OfferAbi } from "../typechain";
export declare class OffersV1 {
    contract: OfferAbi;
    signerOrProvider: Signer | Provider;
    contractAddress: string;
    constructor(signerOrProvider: Signer | Provider, contractAddress: string);
    offersForNFT(contractAddress: string, tokenId: BigNumberish, arg2: BigNumberish): Promise<BigNumber>;
    offers(contractAddress: string, tokenId: BigNumberish, offerId: BigNumberish): Promise<[
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
    createOffer(contractAddress: string, tokenId: BigNumberish, amount: BigNumberish, currencyAddress?: string, findersFeeBPS?: BigNumberish): Promise<ContractTransaction>;
    cancelOffer(contractAddress: string, tokenId: BigNumberish, offerId: BigNumberish): Promise<ContractTransaction>;
    fillOffer(contractAddress: string, tokenId: string, offerId: string, amount: BigNumberish, finder: string, currencyAddress?: string): Promise<ContractTransaction>;
    updateOffer(contractAddress: string, tokenId: string, offerId: string, amount: BigNumberish, currencyAddress?: string): Promise<ContractTransaction>;
}
