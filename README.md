# Uniswap V2 Fork

This is a simple fork that has been performed using Contracts of Uniswap V2 

## Technologies Used

### Node
[Installation](https://nodejs.org/en/download/package-manager)<br>
Check
```bash
node -v
# v18.20.4
```

### Truffle
Installation
```bash
npm install -g truffle
```


### Ganache
Installation
```bash
npm install -g ganache-cli
```

## Usage
1. Deploy `UniswapV2Factory` using truffle.
```bash
truffle migrate --reset
# Assume: Not using mainnet.
```
2. Note down the contract address of `UniswapV2Factory`
```
contract address:    0x1897c3cb573E95A0f954A69F51924D910A882eD0
```
3. Paste the address of `UniswapV2Factory` in the deploy script of `UniswapV2Router02`.
```
location: periphery/migrations/1_initial_migration.js

let FACTORY_ADDRESS = "0xE83C3dA3D32c2B71A57cf34ddbc3B6063ed2e818"
```
4. Deploy `UniswapV2Router02` using truffle.
```bash
truffle migrate --reset
# Assume: Not using mainnet.
```