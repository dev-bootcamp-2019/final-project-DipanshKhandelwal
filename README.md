<p align="center">
  <img src="./client/src/assets/icon.png" align="center" width="150">
</p>

<h1 align="center"> Coffee House </h1>

<p align="center">
  <img src="https://img.shields.io/travis/dev-bootcamp-2019/final-project-DipanshKhandelwal.svg?style=for-the-badge" align="center">
</p>

<p align="center">Go on and ahve some decentralized coffee !!</p>

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

<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>


## Author

[Dipansh Khandelwal](https://github.com/dipanshkhandelwal)
[<img src="https://image.flaticon.com/icons/svg/25/25231.svg" width="35" padding="10">](https://github.com/dipanshkhandelwal)
[<img src="https://image.flaticon.com/icons/svg/185/185964.svg" width="35" padding="10">](https://linkedin.com/in/dipanshkhandelwal)
