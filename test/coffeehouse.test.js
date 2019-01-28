const CoffeeHouse = artifacts.require("./CoffeeHouse.sol")

contract('CoffeeHouse', accounts => {
  const owner = accounts[0]
  const user1 = accounts[1]
  const user2 = accounts[2]
  const testUser = accounts[3]

  // Tests for users

  // A test to create a user, this contract would test if user is able to register successfully
  it('Should create a new user', async () => {
    // Instance of the deployed contract
    const coffeeHouse = await CoffeeHouse.deployed()

    // Call the createUser function to save the user info in the blockchain
    await coffeeHouse.createUser('user1', { from: user1 });
    await coffeeHouse.createUser('user2', { from: user2 });

    // Get the created user
    const userData = await coffeeHouse.users.call(user1)

    // Destructure the details of the created user
    const { name, userAddress } = userData

    // Run assertions for all the user fields and verify correctness
    assert.equal(user1, userAddress, 'Address of the created user is incorrect')
    assert.equal('user1', name, 'Username of the created user is incorrect')
  });

  // A test check whether a user is able to update their profile
  it('Should update the profile of a user', async () => {
    // Instance of the deployed contract
    const coffeeHouse = await CoffeeHouse.deployed()

    // Call the update user function to update the info of the user
    await coffeeHouse.updateUser('user1changed', { from: user1 })

    // Get the updated user
    const userData = await coffeeHouse.users.call(user1)

    // Destructure the details of the updated user
    const { name, userAddress } = userData

    // Run assertions for all the user and verify correctness
    assert.equal(user1, userAddress, 'Address of the created user is incorrect')
    assert.equal(name, 'user1changed', 'Username of the created user is incorrect')
  });

  // A test for contract owner to be able to delete a user, would test the profile deletion workflow in case a user wants to delete their profile
  it('Should delete a user', async () => {
    // Get the contract instance
    const coffeeHouse = await CoffeeHouse.deployed()

    // Delete user2
    await coffeeHouse.deleteUser({ from: user2 })

    // User should no longer be registered
    const user = await coffeeHouse.registeredUsers(user2)
    assert.equal(user, false, 'Failed to delete the user!')
  });

  // A test to check if a user with an address exists or not, would be needed to check if a user is registered
  it('Should check if a user is registered or not', async () => {
    // Get instance of deployed contract
    const coffeeHouse = await CoffeeHouse.deployed()

    // Initially the user doesn't exist
    let checkUser = await coffeeHouse.registeredUsers(testUser, { from: testUser })

    // Assertion to check that a user doesn't exist
    assert.equal(checkUser, false, 'User should not exist')

    // User should exists now
    checkUser = await coffeeHouse.registeredUsers(user1, { from: user1 })

    // Assertion to check that user exists now
    assert.equal(checkUser, true, 'User should exist')

  });

})