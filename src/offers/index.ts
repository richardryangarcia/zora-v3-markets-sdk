import { Provider } from "@ethersproject/providers";
import { ZERO_ADDRESS } from "../constants/index";
import { BigNumber, BigNumberish, ContractTransaction, Signer } from "ethers";
import { OfferAbi, OfferAbi__factory } from "typechain/index";

export class OffersV1 {
  public contract: OfferAbi;
  public signerOrProvider: Signer | Provider;
  public contractAddress: string;

  constructor(signerOrProvider: Signer | Provider, contractAddress: string) {
    this.signerOrProvider = signerOrProvider;
    this.contractAddress = contractAddress;
    this.contract = OfferAbi__factory.connect(
      contractAddress,
      signerOrProvider
    );
  }

  public async offersForNFT(
    contractAddress: string,
    tokenId: BigNumberish,
    arg2: BigNumberish
  ): Promise<BigNumber> {
    return await this.contract.offersForNFT(contractAddress, tokenId, arg2);
  }

  public async offers(
    contractAddress: string,
    tokenId: BigNumberish,
    offerId: BigNumberish
  ): Promise<
    [string, string, number, BigNumber] & {
      maker: string;
      currency: string;
      findersFeeBps: number;
      amount: BigNumber;
    }
  > {
    return await this.contract.offers(contractAddress, tokenId, offerId);
  }

  public async createOffer(
    contractAddress: string,
    tokenId: BigNumberish,
    amount: BigNumberish,
    currencyAddress: string = ZERO_ADDRESS,
    findersFeeBPS: BigNumberish = 0
  ): Promise<ContractTransaction> {
    return await this.contract.createOffer(
      contractAddress,
      tokenId,
      currencyAddress,
      amount,
      findersFeeBPS
    );
  }

  public async cancelOffer(
    contractAddress: string,
    tokenId: BigNumberish,
    offerId: BigNumberish
  ): Promise<ContractTransaction> {
    return await this.contract.cancelOffer(contractAddress, tokenId, offerId);
  }

  public async fillOffer(
    contractAddress: string,
    tokenId: string,
    offerId: string,
    amount: BigNumberish,
    finder: string,
    currencyAddress: string = ZERO_ADDRESS
  ) {
    return await this.contract.fillOffer(
      contractAddress,
      tokenId,
      offerId,
      currencyAddress,
      amount,
      finder
    );
  }

  public async updateOffer(
    contractAddress: string,
    tokenId: string,
    offerId: string,
    amount: BigNumberish,
    currencyAddress: string = ZERO_ADDRESS
  ) {
    return await this.contract.setOfferAmount(
      contractAddress,
      tokenId,
      offerId,
      currencyAddress,
      amount
    );
  }
}
