import { Provider } from "@ethersproject/providers";
import { ZERO_ADDRESS } from "../constants/index";
import { BigNumber, ContractTransaction, ethers, Signer } from "ethers";
import { AskOmnibusAbi, AskOmnibusAbi__factory } from "typechain/index";
import { AsksDataStorage } from "typechain/AskOmnibusAbi";

export class AskOmnibus {
  public contract: AskOmnibusAbi;
  public signerOrProvider: Signer | Provider;
  public contractAddress: string;

  constructor(signerOrProvider: Signer | Provider, contractAddress: string) {
    this.signerOrProvider = signerOrProvider;
    this.contractAddress = contractAddress;
    this.contract = AskOmnibusAbi__factory.connect(
      contractAddress,
      signerOrProvider
    );
  }

  public async askForNFT(
    contractAddress: string,
    tokenId: number
  ): Promise<
    [BigNumber, string, number] & {
      price: BigNumber;
      seller: string;
      features: number;
    }
  > {
    return await this.contract.askForNFT(contractAddress, tokenId);
  }

  public async getFullAsk(
    contractAddress: string,
    tokenId: number
  ): Promise<AsksDataStorage.FullAskStructOutput> {
    return await this.contract.getFullAsk(contractAddress, tokenId);
  }

  public async createAskMinimal(
    contractAddress: string,
    tokenId: number,
    askAmount: number
  ): Promise<ContractTransaction> {
    return await this.contract.createAskMinimal(
      contractAddress,
      tokenId,
      askAmount
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

  public async cancelAsk(contractAddress: string, tokenId: number) {
    return await this.contract.cancelAsk(contractAddress, tokenId);
  }

  public async fillAsk(
    contractAddress: string,
    tokenId: number,
    fillAmount: number,
    finderAddress: string,
    fillCurrencyAddress: string = ZERO_ADDRESS
  ) {
    return await this.contract.fillAsk(
      contractAddress,
      tokenId,
      fillAmount,
      fillCurrencyAddress,
      finderAddress,
      { value: ethers.utils.parseEther(fillAmount.toString()) }
    );
  }
}
