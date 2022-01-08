import { ethers } from "ethers";

import abi from "./Keyboards.json";

const contractAddress = "0x17386D666366fBB91003D487ad9F9a32306535e0";
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
