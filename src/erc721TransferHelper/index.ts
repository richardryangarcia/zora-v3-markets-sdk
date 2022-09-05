import { Contract, ethers, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import TranferHelperAbi from "abis/erc721TransferHelper.abi.json";

export class Erc721TransferHelper {
  public abi: typeof TranferHelperAbi = TranferHelperAbi;
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

  public async isModuleApproved(userAddress: string): Promise<boolean> {
    return await this.contract.isModuleApproved(userAddress);
  }
}
