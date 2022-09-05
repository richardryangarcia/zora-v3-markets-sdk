import { Contract, ethers, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import AskAbi from "abis/ask.abi.json";
import { ZERO_ADDRESS } from "constants/index";

export class Ask {
  public abi: typeof AskAbi = AskAbi;
  public signerOrProvider: Signer | Provider;
  public contractAddress: string;
  public chainId: number;
  public contract: Contract;

  constructor(
    signerOrProvider: Signer | Provider,
    contractAddress: string,
    chainId: number
  ) {
    this.signerOrProvider = signerOrProvider;
    this.contractAddress = contractAddress;
    this.chainId = chainId;
    this.contract = new ethers.Contract(
      contractAddress,
      this.abi,
      signerOrProvider
    );
  }

  public async askForNFT(
    contractAddress: string,
    tokenId: number
  ): Promise<{
    seller: string;
    sellerFundsRecipient: string;
    askCurrency: string;
    findersFeeBps: number;
    askPrice: number;
  }> {
    return await this.contract.askForNFT(contractAddress, tokenId);
  }

  public async createAsk(
    contractAddress: string,
    tokenId: number,
    recipientAddress: string,
    askAmount: number,
    askCurrencyAddress: string = ZERO_ADDRESS,
    findersFeeBps: number = 0 // must be less than 10000
  ) {
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
  ) {
    return await this.contract.setAskPrice(
      contractAddress,
      tokenId,
      askAmount,
      askCurrencyAddress
    );
  }

  public async cancelAsk(contractAddress: string, tokenId: number) {
    return await this.contract.cancelAsk(contractAddress, tokenId);
  }

  public async fillAsk(
    contractAddress: string,
    tokenId: number,
    fillAmount: number,
    fillCurrencyAddress: string = ZERO_ADDRESS,
    finderAddress: string
  ) {
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
