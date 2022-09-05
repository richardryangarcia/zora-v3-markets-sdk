import { ContractTransaction, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import {
  ZoraModuleManagerAbi,
  ZoraModuleManagerAbi__factory,
} from "typechain/index";

export class ZoraModuleManager {
  public contract: ZoraModuleManagerAbi;
  public signerOrProvider: Signer | Provider;
  public contractAddress: string;

  constructor(signerOrProvider: Signer | Provider, contractAddress: string) {
    this.signerOrProvider = signerOrProvider;
    this.contractAddress = contractAddress;
    this.contract = ZoraModuleManagerAbi__factory.connect(
      contractAddress,
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
    return await this.contract.moduleRegistered(moduleAddress);
  }

  public async setApprovalForModule(
    moduleAddress: string,
    flag: boolean
  ): Promise<ContractTransaction> {
    return await this.contract.setApprovalForModule(moduleAddress, flag);
  }

  public async setBatchApprovalForModules(
    moduleAddresses: string[],
    flag: boolean
  ): Promise<ContractTransaction> {
    return await this.contract.setBatchApprovalForModules(
      moduleAddresses,
      flag
    );
  }
}
