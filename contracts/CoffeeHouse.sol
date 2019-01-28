pragma solidity ^0.5.0;

import "./Ownable.sol";
import "./SafeMath.sol";

/** @title Coffee House */
contract CoffeeHouse is Ownable{
    
    // Freezing state of the contract
    bool public frozen = false;
    
    // Structs
    
    // An item of coffee house
    struct Item {
        string name;
        uint itemId;
        uint price;
    }

    // A user
    struct User {
        string name;
        address userAddress;
        mapping(uint => uint) assets;
    }
    
    // State vaiables
    uint public itemsCount;

    mapping(uint => Item) public items;

    mapping(address => User) public users;
    
    mapping(address => bool) public registeredUsers;


    // Function Modifiers
    
    // Check that the user is registered
    modifier isRegistered() { require(registeredUsers[msg.sender]); _;}
    
    // Check that the user doesn't exist already
    modifier notAlreadyRegistered() { require(!registeredUsers[msg.sender], "User is already registered"); _;}

    modifier itemIdCheck(uint itemId) { require( itemId < itemsCount ); _;}

    modifier paidEnough(uint _price) { require(msg.value >= _price); _;}

    modifier checkValue(uint itemId) {
        //refund them after pay for item (why it is before, _ checks for logic before func)
        uint _price = items[itemId].price;
        uint amountToRefund = msg.value - _price;
        msg.sender.transfer(amountToRefund);
        emit RefundAmount(amountToRefund);
        _;
    }
    
    // Modifiers in emergency
    modifier stopInEmergency {require(!frozen, "This action is not allowed as contract is frozen"); _; }
    modifier onlyInEmergency {require(frozen, "This action is not allowed as this is only available in case of emergency"); _; }
    

    // Events
    event RefundAmount(uint amountToRefund);
    event ItemBought(uint number);
    event itemAdded(uint itemId);
    event userCreated(address _address);
    event userUpdated(address _address);
    event userDeleted(address _address);
    event toggleFreeze();


    // constructor
    constructor() public {}

    /** @dev Add new item.
      * @param _name name of the item.
      * @param _price price of the item.
      * @return status if the item was added successfully.
      */
    function addItem(string memory _name, uint _price)
    public 
    onlyOwner()
    stopInEmergency()
    returns(bool)
    {
        items[itemsCount] = Item({name: _name, itemId: itemsCount, price: _price});
        emit itemAdded(itemsCount);
        itemsCount = itemsCount + 1;
        return true;
    }
    

    /** @dev Buy item.
      * @param itemId id of the item.
      * @return status if the item was bought successfully.
      */
    function buyItem(uint itemId)
    public
    payable
    stopInEmergency()
    checkValue(itemId)
    itemIdCheck(itemId)
    paidEnough(items[itemId].price)
    // isRegistered()
    returns(bool)
    {
        users[msg.sender].assets[itemId] += 1;
        users[msg.sender].userAddress = msg.sender;
        emit ItemBought(users[msg.sender].assets[itemId]);
        return true;
    }
    
    /** @dev Get assets count of user of a specefic item.
      * @param itemId id of the item.
      * @return number of items present.
      */
    function getAssetItemCount (uint itemId)
    view
    public
    itemIdCheck(itemId)
    returns(uint number)
    {   
        number = users[msg.sender].assets[itemId];
    }
    
    /** @dev Creates a new user.
      * @param _name name of the user.
      * @return status Whether the user was created.
      */
    function createUser(string memory _name)
    public
    stopInEmergency()
    notAlreadyRegistered()  // Check that the user doesn't exist already
    returns(bool)
    {
        // Create the user using the User struct
        users[msg.sender] = User({
            name: _name,
            userAddress: msg.sender
        });
        
        // Save the entry in registered users
        registeredUsers[msg.sender] = true;
        
        // Emit the User created event
        emit userCreated(msg.sender);

        return registeredUsers[msg.sender];
    }
    
    /** @dev Updates a user.
      * @param _name new name of the user.
      * @return status Whether the user was updated.
      */
    function updateUser(string memory _name)
    public
    stopInEmergency()
    isRegistered()  // Check that the user doesn't exist already
    returns(bool)
    {
        // Create the user using the User struct
        users[msg.sender].name = _name;
        
        // Emit the User updated event
        emit userUpdated(msg.sender);

        return true;
    }
    
    /** @dev A function to delete a user, can only be performed by the contract owner
      * @return status Whether the user was deleted.
      */
    function deleteUser()
    public
    isRegistered() // Check if the user is registered
    returns(bool status) {

        // Remove the user
        delete users[msg.sender];
        registeredUsers[msg.sender] = false;

        // Emit the user deleted event
        emit userDeleted(msg.sender);

        return true;
    }
    
    /** @dev A function to flip the emergency status of this contract, useful when a bug is detected
      * @return status Whether the frozen status was successfully split.
      */
    function flipFreeze()
    private
    onlyOwner()
    returns(bool success) {
        if(frozen) {
            frozen = false;
        } else frozen = true;
        emit toggleFreeze();
        return true;
    }
    
    /** @dev A function to destroy the contract and transfer all funds to the owner
      * @return status Whether the frozen status was successfully destroyed.
      */
    function kill()
    private
    onlyOwner()
    returns(bool status) {
        selfdestruct(msg.sender);
        return true;
    }
}
