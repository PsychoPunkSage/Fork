const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
    let weth;
    let FACTORY_ADDRESS = "0x4f66E2b79629f7779FC9A21A86Fdc26f7b684A8F"

    if (network === 'mainnet') {
        weth = await WETH.at("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");
    } else {
        await deployer.deploy(WETH);
        weth  = await WETH.deployed();
    }

    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
}