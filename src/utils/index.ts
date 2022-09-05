import { Provider } from "@ethersproject/providers";
import { Signer } from "ethers";

export const getChainId = async (signerOrProvider: Signer | Provider) => {
  const isSigner = Signer.isSigner(signerOrProvider);
  const chainId = isSigner
    ? await signerOrProvider.getChainId()
    : await (
        await signerOrProvider.getNetwork()
      ).chainId;
  return chainId;
};
