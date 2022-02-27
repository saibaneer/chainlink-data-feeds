const hre = require("hardhat");

async function deploy(){
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const PriceConsumerV3 = await hre.ethers.getContractFactory(
      "PriceConsumerV3"
    );
    const contract = await PriceConsumerV3.deploy();
    await contract.deployed()

    console.log("PriceConsumerV3 address:", contract.address);

}


deploy()
    .then(()=> process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })