<p align="center">
  <img src="./client/src/assets/icon.png" align="center" width="150">
</p>

<h1 align="center"> Coffee House </h1>

<p align="center">
  <img src="https://img.shields.io/travis/dev-bootcamp-2019/final-project-DipanshKhandelwal.svg?style=for-the-badge" align="center">
</p>

<p align="center">Go on and have some decentralized coffee !!</p>

### Abstract
Coffee House is place where you can have and store your snaks and drinks. 

Buy it once !! Use it anytime !! It never ends !!

#### External Contracts Used
- OpenZeppelin SafeMath  
- OpenZeppelin Ownable


## Development

#### Prerequisites

This is my setup while developing this.
- OS: Ubuntu 18.04
- Node.js: 8.14.0
- npm: 6.5.0
- truffle: v5.0.2
- Ganache CLI: v6.2.5

#### Setup local development instance

* Clone the project locally
```
git clone https://github.com/dev-bootcamp-2019/final-project-dipanshkhandelwal
cd final-project-dipanshkhandelwal
```

* Start local development blockchain and copy the mnemonic to be used later
```
ganache-cli -b 3
```

* Compile contracts and migrate them to the blockchain
```
npm i
truffle compile
truffle migrate
```

<img src="./client/src/assets/screenshots/migrations.png" align="center" width="600">

##### Setup the frontend
The frontend is a React app that uses drizzle to interact with the contract.

```
cd client
npm i
npm start
```

### Run Tests
```
truffle test
```

<img src="./client/src/assets/screenshots/tests.png" align="center" width="600">


### Initial setup

- Goto [localhost:3000](http://localhost:3000) and login into metamask using the mnemonic obtained from ganache.
- Allow connecting the app to web3
- Owner's account will be already created and will be the one who initiated the contract.
- You can then switch to a different metamask account and register/buy etc.

<img src="./client/src/assets/screenshots/metamask1.png" align="center" width="250">
<img src="./client/src/assets/screenshots/metamask2.png" align="center" width="600">
<img src="./client/src/assets/screenshots/metamask3.png" align="center" width="250">

### Future work
- Better handling for users data
- Two sided store
- A more friendly page link
- Integrate drizzle-react
- Improve UI/UX

### Screenshots

<img src="./client/src/assets/screenshots/screenshot1.png" align="center" width="600">
<img src="./client/src/assets/screenshots/screenshot2.png" align="center" width="600">
<img src="./client/src/assets/screenshots/screenshot3.png" align="center" width="600">
<img src="./client/src/assets/screenshots/screenshot4.png" align="center" width="600">

### Checklist (For ease of reviewer)

- [x] Project includes a README.md that explains the project.
- [x] The project is a Truffle project that allows you to easily compile, migrate and test the provided Solidity contracts.
- [x] Project is commented as outline in the documentation.
- [x] At least one contract uses a library or inherits from another contract - Actually 3.
- [x] I can run the app on a dev server locally for testing/grading (connecting to Rinkeby if required).
- [x] I can visit a URL and interact with the app (can be localhost).
- [x] The app displays the current ethereum account.
- [x] I can sign transactions using Metamask (or uPort).
- [x] The app interface reflects updates to to the contract state.
- [x] 7 tests written in Javascript or Solidity (or both).
- [x] Tests are explained with brief code comments.
- [x] Tests are properly structured.
- [x] All tests pass 🎉.
- [x] At least one of the contracts implements a circuit breaker / emergency stop pattern.
- [x] Project includes a file called [design_pattern_desicions.md](design_pattern_desicions.md) that explains some of the design decisions made by the author.
- [x] [design_pattern_desicions.md](design_pattern_desicions.md) adequately describes the design patterns implemented in the project.
- [x] Project includes a file called [avoiding_common_attacks.md](avoiding_common_attacks.md) that explains what measures you took to ensure that your contracts are not susceptible to common attacks.
- [x] The [avoiding_common_attacks.md](avoiding_common_attacks.md) covers at least 3 common attacks and how the app mitigates user risk.
- [x] Project includes a file called [deployed_addresses.txt](deployed_addresses.txt) that describes where the deployed testnet contracts live (which testnet and address).
- [ ] Project uses IPFS to store images for items on sale.
- [ ] The project uses and upgradable design pattern for the smart contracts.
- [ ] At least one contract is written in Vyper or LLL.
- [ ] The app uses uPort for user authentication and/or signing and sending transactions.
- [ ] The app uses the Ethereum Name Service to resolve human readable names to Ethereum addresses (in progress).
- [ ] The project uses an Oracle service such as Oraclize.

### ToDo

- [ ] Add user registration form

<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>


## Author

[Dipansh Khandelwal](https://github.com/dipanshkhandelwal)
[<img src="https://image.flaticon.com/icons/svg/25/25231.svg" width="35" padding="10">](https://github.com/dipanshkhandelwal)
[<img src="https://image.flaticon.com/icons/svg/185/185964.svg" width="35" padding="10">](https://linkedin.com/in/dipanshkhandelwal)
