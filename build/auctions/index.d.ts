import { Provider } from "@ethersproject/providers";
import { BigNumber, BigNumberish, ContractTransaction, Signer } from "ethers";
import { AuctionCoreEthAbi } from "typechain/index";
export declare class AuctionCoreEth {
    contract: AuctionCoreEthAbi;
    signerOrProvider: Signer | Provider;
    contractAddress: string;
    constructor(signerOrProvider: Signer | Provider, contractAddress: string);
    auctionForNFT(contractAddress: string, tokenId: BigNumberish): Promise<{
        seller: string;
        reservePrice: BigNumber;
        sellerFundsRecipient: string;
        highestBid: BigNumber;
        highestBidder: string;
        duration: number;
        startTime: number;
        firstBidTime: number;
    }>;
    createAuction(tokenContract: string, tokenId: BigNumberish, duration: BigNumberish, reservePrice: BigNumberish, sellerFundsRecipient: string, startTime: BigNumberish): Promise<ContractTransaction>;
    cancelAuction(tokenContract: string, tokenId: BigNumberish): Promise<ContractTransaction>;
    updateAuction(tokenContract: string, tokenId: BigNumberish, reservePrice: BigNumberish): Promise<ContractTransaction>;
    settleAuction(tokenContract: string, tokenId: BigNumberish): Promise<ContractTransaction>;
    createBid(tokenContract: string, tokenId: BigNumberish, amount: BigNumberish): Promise<ContractTransaction>;
}
