//SPDX-License-Identifier: Unlicense
pragma solidity ^0.5.8;

import "@klaytn/contracts/token/KIP17/KIP17Token.sol";

contract HodolKIP17Token is KIP17Token {
    constructor (string memory name, string memory symbol) public KIP17Token(name, symbol) {
    }
}