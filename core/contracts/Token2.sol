pragma solidity =0.5.16;

import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token2 is ERC20Detailed, ERC20 {
    constructor() public ERC20Detailed("Mango", "mgo", 18) {
        _mint(msg.sender, 10000 * 10 ** 18);
        _mint(0xF86671aaD58510229549FBb8088DcEDCc87bE86e, 10000 * 10 ** 18);
        _mint(0x5b89C155DE565E94F1D726eb3c0965145fc62936, 10000 * 10 ** 18);
    }
}
