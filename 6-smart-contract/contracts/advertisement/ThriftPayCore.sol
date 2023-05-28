// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;


contract ThriftPayCore {
    
    mapping(address => bool) advertiserList;
    mapping(address => bool) publisherList;
    address private owner;

    event EtherReceived(address indexed user, uint256 amount);    

    constructor() {
        // owner is the platform owner
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "only owner allowed");
        _;
    }

    modifier existingAdvertiser() {
        require(advertiserList[msg.sender] == true, "Advertiser Call Only");
        _;
    }

    // Function to onboard advertiser
    function onboardAdvertiser(address _advertiser) public onlyOwner {
        require(advertiserList[_advertiser] == false, "Advertiser Already Exists");
        advertiserList[_advertiser] = true;
    }

    // Function to onboard publisher
    function onboardPublisher(address _publisher) public onlyOwner {
        require(advertiserList[_publisher] == false, "Publisher Already Exists");
        advertiserList[_publisher] = true;
    }

    // Function to pay amount to publisher(user->publisher , advertiser->publisher)

    function payAmount(address publisher) public payable   {
        uint256 adAmount = 10000 gwei; // Replace with your desired ad reward amount

        payable(publisher).transfer(adAmount);
    }

       // Fallback function to accept Ether
    receive() external payable {
        emit EtherReceived(msg.sender, msg.value);
    }

}