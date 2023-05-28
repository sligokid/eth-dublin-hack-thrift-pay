// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract AdRewards {
    address public advertiser;
    mapping(address => uint256) public userBalance;
    mapping(address => bool) public userOptedIn;
    mapping(address => uint256) private viewAdCount;

    event AdViewed(address indexed user, uint256 amount);
    event EtherReceived(address indexed user, uint256 amount);    
    constructor  (address _advertiser) payable {
        advertiser = _advertiser;
    }

    function viewAd() public payable {
        require(msg.sender != advertiser, "Advertisers cannot view ads.");
        // require(userOptedIn[msg.sender], "User has not opted in to view ads.");
        
        // Perform logic for calculating the ad reward amount
        uint256 adAmount = 10000 gwei; // Replace with your desired ad reward amount
        
        userBalance[msg.sender] += adAmount;
        if(viewAdCount[msg.sender] == 0) {
            payable(msg.sender).transfer(adAmount);
        }
        viewAdCount[msg.sender] += 1;
        emit AdViewed(msg.sender, adAmount);
    }
    
    function viewAdCountNumber(address user) public view returns(uint256) {
        return viewAdCount[user];
    }
    function optIn() external {
        require(msg.sender != advertiser, "Advertisers cannot opt in.");
        require(!userOptedIn[msg.sender], "User has already opted in.");
        viewAdCount[msg.sender] = 0;
        userOptedIn[msg.sender] = true;
    }
    
    function optOut() external {
        require(msg.sender != advertiser, "Advertisers cannot opt out.");
        require(userOptedIn[msg.sender], "User has already opted out.");
        
        userOptedIn[msg.sender] = false;
    }

    function myBalance() public view returns(uint256){
        require(msg.sender == advertiser, "Only Advertisers can view this.");
        return address(this).balance;

    }

      // Fallback function to accept Ether
    receive() external payable {
        emit EtherReceived(msg.sender, msg.value);
    }

    function deposit(uint256 amount) public payable {
        require(msg.value == amount, "Incorrect amount sent");
        emit EtherReceived(msg.sender, msg.value);
    }
    
}
