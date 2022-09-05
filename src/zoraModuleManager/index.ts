import { Contract, ethers, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import ModuleManagerAbi from "abis/zoraModuleManager.abi.json";

export class Erc721TransferHelper {
  public abi: typeof ModuleManagerAbi = ModuleManagerAbi;
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
  public async isModuleApproved(
    userAddress: string,
    moduleAddress: string
  ): Promise<boolean> {
    return await this.contract.isModuleApproved(userAddress, moduleAddress);
  }

  public async isModuleRegistered(moduleAddress: string): Promise<boolean> {
    return await this.contract.isModuleRegistered(moduleAddress);
  }

  public async setApprovalForModule(
    moduleAddress: string,
    flag: boolean
  ): Promise<void> {
    return await this.contract.setApprovalForModule(moduleAddress, flag);
  }

  public async setBatchApprovalForModules(
    moduleAddresses: string[],
    flag: boolean
  ): Promise<void> {
    return await this.contract.setBatchApprovalForModules(
      moduleAddresses,
      flag
    );
  }
}
