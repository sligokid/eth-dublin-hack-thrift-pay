// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Sample {
    mapping(address => bool) sampleMapping;
    address public owner;
    constructor(address _owner) {
        owner = _owner;
    }

    function addUser (address user) public {
        require(msg.sender == user);
        sampleMapping[user] = true;
    }

    function getUser (address user) public view returns(bool){
        return sampleMapping[user];
    }
}