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