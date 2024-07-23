const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
    let weth;
    let FACTORY_ADDRESS = "0x5d93e24e9C35538Cf69d63D863A09787A42ec8AC"

    if (network === 'mainnet') {
        weth = await WETH.at("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");
    } else {
        await deployer.deploy(WETH);
        weth  = await WETH.deployed();
    }

    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
}