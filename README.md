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
   > transaction hash:    0x8db490fc931adc73f1a574c2dbe39db7e5652ab019d7d5c52895c29f51861ecd
   > Blocks: 1            Seconds: 9
   > contract address:    0x4f66E2b79629f7779FC9A21A86Fdc26f7b684A8F
   > block number:        6362139
   > block timestamp:     1721741304
   > account:             0x9172BDC8973f91430ff81C49D05bd5416F4AB58a
   > balance:             6.412500369557721912
   > gas used:            4140182 (0x3f2c96)
   > gas price:           14.64795296 gwei
   > value sent:          0 ETH
   > total cost:          0.06064519118183872 ETH


   Deploying 'Token1'
   ------------------
   > transaction hash:    0x020f18a9e39b9966cc6d667691a69eb0800a5419515b9e4c067707c08cc391ed
   > Blocks: 0            Seconds: 4
   > contract address:    0x02d78981614693460cf6E146bDb0CF9032264A53
   > block number:        6362140
   > block timestamp:     1721741316
   > account:             0x9172BDC8973f91430ff81C49D05bd5416F4AB58a
   > balance:             6.396915330403785753
   > gas used:            1057897 (0x102469)
   > gas price:           14.732095047 gwei
   > value sent:          0 ETH
   > total cost:          0.015585039153936159 ETH


   Deploying 'Token2'
   ------------------
   > transaction hash:    0xb33061b7dcf4d17a9323a6f854254f240f934d33f68c35b70b9e0c364b1487fe
   > Blocks: 1            Seconds: 16
   > contract address:    0x75ece1cF97452A775aF2d849D2f86B5928009352
   > block number:        6362142
   > block timestamp:     1721741340
   > account:             0x9172BDC8973f91430ff81C49D05bd5416F4AB58a
   > balance:             6.382467555822340555
   > gas used:            1057897 (0x102469)
   > gas price:           13.657071134 gwei
   > value sent:          0 ETH
   > total cost:          0.014447774581445198 ETH
```

</details>

### UniswapV2Router02:

<details>
<summary>Router Deployment Results</summary>

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

## Dummy Tokens (Other than previously deployed tokens.)

<details>
<summary>Router Deployment Results</summary>

```
   Replacing 'Token1'
   ------------------
   > transaction hash:    0x56117faaabae382b56e8cc057cc247538d26eaf34835c14c5214ff4ab52b9dfe
   > Blocks: 0            Seconds: 5
   > contract address:    0xe32E8e30DFA0D86efe53749A7865B3a04D3659BE
   > block number:        6362264
   > block timestamp:     1721743368
   > account:             0x9172BDC8973f91430ff81C49D05bd5416F4AB58a
   > balance:             6.189073760813495277
   > gas used:            1113541 (0x10fdc5)
   > gas price:           22.113893231 gwei
   > value sent:          0 ETH
   > total cost:          0.024624726782340971 ETH


   Replacing 'Token2'
   ------------------
   > transaction hash:    0xbac365515518f0f69dec30fc415179de818f727dff2699eac5bf9bb6fb432d6b
   > Blocks: 0            Seconds: 4
   > contract address:    0x1Dad99F3387C809bf111Bfc5668637AF8B900c96
   > block number:        6362265
   > block timestamp:     1721743380
   > account:             0x9172BDC8973f91430ff81C49D05bd5416F4AB58a
   > balance:             6.165220169232350523
   > gas used:            1113541 (0x10fdc5)
   > gas price:           21.421385994 gwei
   > value sent:          0 ETH
   > total cost:          0.023853591581144754 ETH

```

</details>