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
   Replacing 'WETH'
   ----------------
   > transaction hash:    0xf21b51ef47a9edcb290ae8844fab53bbb5cb78e42667ad99b3c67d676467a6bd
   > Blocks: 2            Seconds: 13
   > contract address:    0x041349C537822C499e56f545C0e7f0784491D824
   > block number:        6362164
   > block timestamp:     1721741688
   > account:             0x9172BDC8973f91430ff81C49D05bd5416F4AB58a
   > balance:             6.322848381199811548
   > gas used:            830246 (0xcab26)
   > gas price:           19.547500469 gwei
   > value sent:          0 ETH
   > total cost:          0.016229234074385374 ETH


   Replacing 'UniswapV2Router02'
   -----------------------------
   > transaction hash:    0xa0ba6f41ec22670c2d9efb2a6b83de624ad39c7460cadf5193ab2e37a5daa87a
   > Blocks: 1            Seconds: 16
   > contract address:    0x0F40C539914D33233b57BDc84213d030AbD789fB
   > block number:        6362166
   > block timestamp:     1721741712
   > account:             0x9172BDC8973f91430ff81C49D05bd5416F4AB58a
   > balance:             6.235456455014140945
   > gas used:            4708851 (0x47d9f3)
   > gas price:           18.559076553 gwei
   > value sent:          0 ETH
   > total cost:          0.087391926185670603 ETH
```

</details>

### Dummy Tokens (Other than previously deployed tokens.)

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