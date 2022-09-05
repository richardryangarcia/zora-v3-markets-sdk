import { BigNumber, ContractTransaction, ethers, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import { ZERO_ADDRESS } from "../constants/index";
import { AskAbi, AskAbi__factory } from "typechain/index";

export class Ask {
  public contract: AskAbi;
  public signerOrProvider: Signer | Provider;
  public contractAddress: string;

  constructor(signerOrProvider: Signer | Provider, contractAddress: string) {
    this.signerOrProvider = signerOrProvider;
    this.contractAddress = contractAddress;
    this.contract = AskAbi__factory.connect(contractAddress, signerOrProvider);
  }

  public async askForNFT(
    contractAddress: string,
    tokenId: number
  ): Promise<
    [string, string, string, number, BigNumber] & {
      seller: string;
      sellerFundsRecipient: string;
      askCurrency: string;
      findersFeeBps: number;
      askPrice: BigNumber;
    }
  > {
    return await this.contract.askForNFT(contractAddress, tokenId);
  }

  public async createAsk(
    contractAddress: string,
    tokenId: number,
    recipientAddress: string,
    askAmount: number,
    askCurrencyAddress: string = ZERO_ADDRESS,
    findersFeeBps: number = 0 // must be less than 10000
  ): Promise<ContractTransaction> {
    return await this.contract.createAsk(
      contractAddress,
      tokenId,
      askAmount,
      askCurrencyAddress,
      recipientAddress,
      findersFeeBps
    );
  }

  public async setAskPrice(
    contractAddress: string,
    tokenId: number,
    askAmount: number,
    askCurrencyAddress: string = ZERO_ADDRESS
  ): Promise<ContractTransaction> {
    return await this.contract.setAskPrice(
      contractAddress,
      tokenId,
      askAmount,
      askCurrencyAddress
    );
  }

  public async cancelAsk(
    contractAddress: string,
    tokenId: number
  ): Promise<ContractTransaction> {
    return await this.contract.cancelAsk(contractAddress, tokenId);
  }

  public async fillAsk(
    contractAddress: string,
    tokenId: number,
    fillAmount: number,
    fillCurrencyAddress: string = ZERO_ADDRESS,
    finderAddress: string
  ): Promise<ContractTransaction> {
    return await this.contract.fillAsk(
      contractAddress,
      tokenId,
      fillCurrencyAddress,
      fillAmount,
      finderAddress,
      { value: ethers.utils.parseEther(fillAmount.toString()) }
    );
  }
}
