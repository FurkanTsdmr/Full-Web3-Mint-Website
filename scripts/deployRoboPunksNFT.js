
const hre = require("hardhat");

async function main() {

const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");
const roboPunksNFT = await RoboPunksNFT.deploy()

await roboPunksNFT.deployed();
console.log("RoboPunksNFT deployed to : ", roboPunksNFT.address);


  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther("1");

  // const RoboPunksNFT = await hre.ethers.getContractFactory("Lock");
  // const RoboPunksNFT = await LocRoboPunksNFT.deploy(unlockTime, { value: lockedAmount });

  // await RoboPunksNFT.deployed();

  // console.log("Lock with 1 ETH deployed to:", RoboPunksNFT.address);
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
  console.log(error);
  process.exit(1);
})
