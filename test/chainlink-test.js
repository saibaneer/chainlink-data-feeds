const hre = require('hardhat');
const { assert } = require('chai');


describe("Chainlink price feeds contract", function (){
    describe("when the price is higher", () => {
        let contract;
        beforeEach(async ()=> {
            const Contract = await hre.ethers.getContractFactory("PriceConsumerV3");
            contract = await Contract.deploy();
            await contract.deployed();
        })

        it("should retrieve the latest ETH/USD price", async()=>{
            await contract.setPriceRequest(
              '0x8a753747a1fa494ec906ce90e9f37563a8af630e'
            );
            const tx = await contract.getLatestPrice();
            assert.isAbove(tx, 0, "Value is not greater than zero");
        })
    })
})