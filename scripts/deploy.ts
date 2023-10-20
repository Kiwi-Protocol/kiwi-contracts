import { formatEther, parseEther } from "viem";
import hre from "hardhat";
import { writeFileSync } from "fs";

require("dotenv/config");

async function main() {
  // For Deploying
  // const Minter = await hre.viem.deployContract("KiwiMinter" as any, [
  //   process.env.ADDRESS,
  // ]);

  // Only for ABI
  const Minter = await hre.viem.getContractAt(
    "KiwiMinter" as any,
    "0xa844e60e1fbd3ebeedd7f88e5a3c7328d9d9760f"
  );

  console.log("Minter stuff", Minter.address);

  writeFileSync(
    "./abis/Minter.json",
    JSON.stringify(
      {
        address: Minter.address,
        abi: Minter.abi,
      },
      null,
      2
    )
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
