import { Provider } from "@ethersproject/providers";
import { Ask } from "asks";
import { Signer } from "ethers";
import askAddresses from "addresses/ask";
import askOmnibusAddresses from "addresses/askOmnibus";
import auctionAddresses from "addresses/auctionCoreEth";
import erc721TransferHelperAddresses from "addresses/erc721TransferHelper";
import offersAddresses from "addresses/offers";
import zoraModuleManagerAddresses from "addresses/zoraModuleManager";
import { AskOmnibus } from "askOmnibus";
import { AuctionCoreEth } from "auctions";
import { Erc721TransferHelper } from "erc721TransferHelper";
import { OffersV1 } from "offers";
import { ZoraModuleManager } from "zoraModuleManager";
import { getChainId } from "utils";

export const ask = async (signerOrProvider: Signer | Provider) => {
  const chainId = await getChainId(signerOrProvider);

  if (!askAddresses[chainId])
    throw new Error("Module unsupported on this network");

  return new Ask(signerOrProvider, askAddresses[chainId]);
};

export const askOmnibus = async (signerOrProvider: Signer | Provider) => {
  const chainId = await getChainId(signerOrProvider);

  if (!askOmnibusAddresses[chainId])
    throw new Error("Module unsupported on this network");

  return new AskOmnibus(signerOrProvider, askOmnibusAddresses[chainId]);
};

export const auction = async (signerOrProvider: Signer | Provider) => {
  const chainId = await getChainId(signerOrProvider);

  if (!auctionAddresses[chainId])
    throw new Error("Module unsupported on this network");

  return new AuctionCoreEth(signerOrProvider, auctionAddresses[chainId]);
};

export const erc721TransferHelper = async (
  signerOrProvider: Signer | Provider
) => {
  const chainId = await getChainId(signerOrProvider);

  if (!erc721TransferHelperAddresses[chainId])
    throw new Error("Module unsupported on this network");

  return new Erc721TransferHelper(
    signerOrProvider,
    erc721TransferHelperAddresses[chainId]
  );
};

export const offers = async (signerOrProvider: Signer | Provider) => {
  const chainId = await getChainId(signerOrProvider);

  if (!offersAddresses[chainId])
    throw new Error("Module unsupported on this network");

  return new OffersV1(signerOrProvider, offersAddresses[chainId]);
};

export const zoraModuleManager = async (
  signerOrProvider: Signer | Provider
) => {
  const chainId = await getChainId(signerOrProvider);

  if (!zoraModuleManagerAddresses[chainId])
    throw new Error("Module unsupported on this network");

  return new ZoraModuleManager(
    signerOrProvider,
    zoraModuleManagerAddresses[chainId]
  );
};
