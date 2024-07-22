const Factory = artifacts.require("UniswapV2Factory.sol");

module.exports = async function (deployer, _network, addresses) {
    await deployer.deploy(Factory, addresses[0]); // Send txn for deployment
    const factory = await Factory.deployed(); // Send txn to be mined

    let token1Address, token2Address;
    if (network === 'mainnet') {
        token1Address = '';
        token2Address = '';
    }
    await factory.createPair();
}