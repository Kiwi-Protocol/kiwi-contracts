import { formatEther, parseEther } from "viem";
import hre from "hardhat";
import { writeFileSync } from "fs";

require("dotenv/config");

async function main() {
  const Minter = await hre.viem.deployContract("KiwiMinter" as any, [
    process.env.ADDRESS,
  ]);

  console.log("Minter stuff", Minter.address);

  writeFileSync(
    "./abis/Minter.json",
    JSON.stringify({
      address: Minter.address,
      abi: Minter.abi.toString(),
    })
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
