import { Contract, ethers, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import TranferHelperAbi from "abis/erc721TransferHelper.abi.json";
import {
  Erc721TransferHelperAbi,
  Erc721TransferHelperAbi__factory,
} from "typechain";

export class Erc721TransferHelper {
  public contract: Erc721TransferHelperAbi;
  public signerOrProvider: Signer | Provider;
  public contractAddress: string;

  constructor(signerOrProvider: Signer | Provider, contractAddress: string) {
    this.signerOrProvider = signerOrProvider;
    this.contractAddress = contractAddress;
    this.contract = Erc721TransferHelperAbi__factory.connect(
      contractAddress,
      signerOrProvider
    );
  }

  public async isModuleApproved(userAddress: string): Promise<boolean> {
    return await this.contract.isModuleApproved(userAddress);
  }
}
