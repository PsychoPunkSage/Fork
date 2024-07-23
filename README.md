# Uniswap V2 Fork

This is a simple fork that has been performed using Contracts of Uniswap V2 

## Technologies Used

### Node
[Installation](https://nodejs.org/en/download/package-manager)<br>
<details>
<summary>Check</summary>

```bash
node -v
# v18.20.4
```

</details><br>

### Truffle
> **Truffle** is a development framework for Ethereum that provides a suite of tools for building, testing, and deploying smart contracts. It streamlines the development process by offering features such as automated contract testing, scriptable deployment, and network management.

<details>
<summary>Installation</summary>

```bash
npm install -g truffle
```

</details><br>

### Ganache
> **Ganache CLI** is a command-line tool for creating a personal Ethereum blockchain for rapid development and testing. It simulates the Ethereum network on your local machine, allowing you to deploy contracts, run tests, and execute transactions in a controlled environment.

<details>
<summary>Installation</summary>

```bash
npm install -g ganache-cli
```

</details><br>


## Installation
> Since the project is small, so, I have pushed `node_modules` as well as all the `build` so that the `tester` don't have to set up the project locally.

## Usage
1. Deploy `UniswapV2Factory` using truffle.

<details>
<summary>Cmd</summary>

<details>
<summary>Using Mainnet</summary>

```
1.
Location: core/migrations/1_initial_migration.js
ToDo    : Update token1Address, token2Address

2.
Location: core/truffle-config.js
ToDo    : Add Infura/Alchemy network information.
```

```bash
truffle migrate --reset --network mainnet
```

</details>

<details>
<summary>Using Local Network</summary>

```bash
truffle migrate --reset
# Assume: Not using mainnet.
```

</details>

</details><br>

2. Note down the contract address of `UniswapV2Factory`

<details>
<summary>ToDo</summary>

```
contract address:    0x1897c3cb573E95A0f954A69F51924D910A882eD0
```

</details><br>

1. Paste the address of `UniswapV2Factory` in the deploy script of `UniswapV2Router02`.

<details>
<summary>ToDo</summary>

```
location: periphery/migrations/1_initial_migration.js

let FACTORY_ADDRESS = "0xE83C3dA3D32c2B71A57cf34ddbc3B6063ed2e818"
```

</details><br>

4. Deploy `UniswapV2Router02` using truffle.

<details>
<summary>Cmd</summary>

<details>
<summary>Using Mainnet</summary>

```bash
truffle migrate --reset --network mainnet
```

</details>

<details>
<summary>Using Local Network</summary>

```bash
truffle migrate --reset
# Assume: Not using mainnet.
```

</details>

</details><br>

## Notes

* Since V2 is old contract and it uses early solc version. So for better ERC management I used `@openzeppelin/contracts@2.5.1`
* I was facing little difficulty while deploying `Periphery` using `Ganache-cli` so I removed some functions from `UniswapV2Router02.sol` and `IUniswapV2Router02.sol` to make contracts little smaller.

## Testnet - Sepolia

### UniswapV2Factory:

<details>
<summary>Factory Deployment Results</summary>

```
   Deploying 'UniswapV2Factory'
   ----------------------------
   > transaction hash:    0x465fc8542113cb125b7689c1a33960c05497480c71eb538a730b2a92245c6598
   > Blocks: 1            Seconds: 10
   > contract address:    0x5d93e24e9C35538Cf69d63D863A09787A42ec8AC
   > block number:        6361259
   > block timestamp:     1721728092
   > account:             0xBD3DFbeF207e34d426c658175D56245E756e444a
   > balance:             0.2538441183111907
   > gas used:            4140182 (0x3f2c96)
   > gas price:           35.30180115 gwei
   > value sent:          0 ETH
   > total cost:          0.1461558816888093 ETH


   Deploying 'Token1'
   ------------------
   > transaction hash:    0x8759778b887def980d9faafdd5803a5119ad7ffa7801107a889aa5a2c49c3a20
   > Blocks: 1            Seconds: 4
   > contract address:    0xdB1671610E97983338a813D8d71E121FcbC54f22
   > block number:        6361260
   > block timestamp:     1721728104
   > account:             0xBD3DFbeF207e34d426c658175D56245E756e444a
   > balance:             0.212160949727586383
   > gas used:            1057897 (0x102469)
   > gas price:           39.401915861 gwei
   > value sent:          0 ETH
   > total cost:          0.041683168583604317 ETH


   Deploying 'Token2'
   ------------------
   > transaction hash:    0x93628044a3df171c982a7d5ceb0cee3fd70484a8497f70ab217fe94e738199c5
   > Blocks: 1            Seconds: 17
   > contract address:    0x24580AAe98158e657f566E425f97b3234954251E
   > block number:        6361261
   > block timestamp:     1721728128
   > account:             0xBD3DFbeF207e34d426c658175D56245E756e444a
   > balance:             0.165642182720744281
   > gas used:            1057897 (0x102469)
   > gas price:           43.972869766 gwei
   > value sent:          0 ETH
   > total cost:          0.046518767006842102 ETH
```

</details>

<details>
<summary>Router Deployment Results</summary>

### UniswapV2Router02:
```
   Deploying 'WETH'
   ----------------
   > transaction hash:    0xe8ca9c1939e8923497bfe0ce2f775d945ba5ccf13eedd23515d3c472db2f5f22
   > Blocks: 2            Seconds: 17
   > contract address:    0x6a8D65468623Ab1Ed11dD53BF0C039E0600e1bF0
   > block number:        6361340
   > block timestamp:     1721729268
   > account:             0xBD3DFbeF207e34d426c658175D56245E756e444a
   > balance:             0.523334067000737515
   > gas used:            830246 (0xcab26)
   > gas price:           36.107613781 gwei
   > value sent:          0 ETH
   > total cost:          0.029978201911220126 ETH


   Deploying 'UniswapV2Router02'
   -----------------------------
   > transaction hash:    0x5701074a7862d5cbdeeeed0311557c4444e7aac0ceb4ff88b806dff35b34c0a9
   > Blocks: 2            Seconds: 16
   > contract address:    0x334DF8499e865c4d785d81862D2342A8369Ae814
   > block number:        6361342
   > block timestamp:     1721729292
   > account:             0xBD3DFbeF207e34d426c658175D56245E756e444a
   > balance:             0.350587767654495859
   > gas used:            4708851 (0x47d9f3)
   > gas price:           36.685446056 gwei
   > value sent:          0 ETH
   > total cost:          0.172746299346241656 ETH
```

</details>