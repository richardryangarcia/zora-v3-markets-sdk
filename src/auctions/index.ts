import { Provider } from "@ethersproject/providers";
import { BigNumber, BigNumberish, ContractTransaction, Signer } from "ethers";
import { AuctionCoreEthAbi, AuctionCoreEthAbi__factory } from "../typechain";

export class AuctionCoreEth {
  public contract: AuctionCoreEthAbi;
  public signerOrProvider: Signer | Provider;
  public contractAddress: string;

  constructor(signerOrProvider: Signer | Provider, contractAddress: string) {
    this.signerOrProvider = signerOrProvider;
    this.contractAddress = contractAddress;
    this.contract = AuctionCoreEthAbi__factory.connect(
      contractAddress,
      signerOrProvider
    );
  }

  public async auctionForNFT(
    contractAddress: string,
    tokenId: BigNumberish
  ): Promise<{
    seller: string;
    reservePrice: BigNumber;
    sellerFundsRecipient: string;
    highestBid: BigNumber;
    highestBidder: string;
    duration: number;
    startTime: number;
    firstBidTime: number;
  }> {
    return await this.contract.auctionForNFT(contractAddress, tokenId);
  }

  public async createAuction(
    tokenContract: string,
    tokenId: BigNumberish,
    duration: BigNumberish,
    reservePrice: BigNumberish,
    sellerFundsRecipient: string,
    startTime: BigNumberish
  ): Promise<ContractTransaction> {
    return await this.contract.createAuction(
      tokenContract,
      tokenId,
      duration,
      reservePrice,
      sellerFundsRecipient,
      startTime
    );
  }

  public async cancelAuction(
    tokenContract: string,
    tokenId: BigNumberish
  ): Promise<ContractTransaction> {
    return await this.contract.cancelAuction(tokenContract, tokenId);
  }

  public async updateAuction(
    tokenContract: string,
    tokenId: BigNumberish,
    reservePrice: BigNumberish
  ): Promise<ContractTransaction> {
    return await this.contract.setAuctionReservePrice(
      tokenContract,
      tokenId,
      reservePrice
    );
  }

  public async settleAuction(
    tokenContract: string,
    tokenId: BigNumberish
  ): Promise<ContractTransaction> {
    return await this.contract.settleAuction(tokenContract, tokenId);
  }

  public async createBid(
    tokenContract: string,
    tokenId: BigNumberish,
    amount: BigNumberish
  ): Promise<ContractTransaction> {
    const options = { value: amount };
    return await this.contract.createBid(tokenContract, tokenId, options);
  }
}
