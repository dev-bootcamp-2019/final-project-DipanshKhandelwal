## Avoiding Common Attacks

### Reentrancy
We are using the withdrawl pattern in the Smart Contract. The withdraw function is a used by user to withdraw their funds. By using the transfer() function instead of call.value() we limit the amount of wei transmitted to any fallback function.

### Owner Profile
The constructor initializes the owner's profile using their address so in case something goes wrong one can kill the contract and remove it from the blockchain with all the funds remaining safe.

### Integer overflows/underflows
For this I have used [SafeMath](https://github.com/OpenZeppelin/openzeppelin-solidity/) contract to escape from such attacks. 

### DDoS
We have used the pull over push payments method which protects it against the threats of DDoS.

### Timestamp tampering
We do not use any timestamp from the block hence it protects us from minor tampering with the blocks' timestamps.

### Bugs
In case any bugs are detected in the contract, we can freeze the contract and fix them without incorporating heavy damage while the bug is being fixed.
