import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

require("dotenv/config");

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    fuji: {
      url: process.env.FUJI_URL,
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
    polygon: {
      url: process.env.POLYGON_URL,
      accounts: [process.env.PRIVATE_KEY ?? ""],
    }
  },
  etherscan: {
    // apiKey: "A34WB3PGCHA88I22RA5E59DXR6N3XP8VE1", // Snowtrace Fuji Testnet
    apiKey: "AV92K8DJ747HDGZD8AEQPW4UKN5D3WCA8I", // PolygonScan
  }
};

export default config;
