import React, { Component } from "react";
import CoffeeHouse from "./contracts/CoffeeHouse.json";
import getWeb3 from "./utils/getWeb3";
import Navbar from './components/Navbar'
import Store from './components/Store'
import Inventory from './components/Inventory'
import Profile from './components/Profile'
import "./App.css";
import ipfs from './ipfs'

class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    itemsCount: 0,
    items: [],
    tab: 'store',
    userRegistered: false,
    boughtItems: [],
    owner: null,
    balance: 0
  };

  setTab = (name) => {
    this.setState({ tab: name })
  }

  addFileToIpfs = async (file) => {
    await ipfs.files.add(file, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(res[0].hash);

  })}

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = CoffeeHouse.networks[networkId];
      const instance = new web3.eth.Contract(
        CoffeeHouse.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract, web3 } = this.state;
    // await contract.methods.createUser("dipansh2").call().then((res) => console.log(res))
    console.log("Present account : ", accounts[0])
    await contract.methods.owner().call().then((result) => this.setState({ owner: result }))
    console.log("Owner's account : ", this.state.owner)

    // await contract.methods.registeredUsers(accounts[0]).call().then((result) => {console.log(result); this.setState({ userRegistered: result })})

    const itemsCount = await contract.methods.itemsCount().call();
    
    web3.eth.getBalance(this.state.accounts[0]).then((result) => {
      this.setState({ balance: result/1000000000000000000 })
      console.log("balance", result)
    })

    this.setState({ storageValue: itemsCount, itemsCount });
    this.getItems()
    this.getAssets()

  };

  upload = async () => {
    const { accounts, contract } = this.state;

    await contract.methods.addItem("doughnut", 650).send({ from: accounts[0] });
    await contract.methods.addItem("beer", 1050).send({ from: accounts[0] });
    await contract.methods.addItem("pancakes", 1500).send({ from: accounts[0] });
    await contract.methods.addItem("pineapple", 200).send({ from: accounts[0] });
    await contract.methods.addItem("tea", 700).send({ from: accounts[0] });
    await contract.methods.addItem("coffee", 150).send({ from: accounts[0] });
    await contract.methods.addItem("lemonade", 400).send({ from: accounts[0] });
    await contract.methods.addItem("jelly", 100).send({ from: accounts[0] });

    this.getItems()
    this.getAssets()
  }

  getItems = async () => {
    const { contract } = this.state;

    let items = [];
    let finalItems = [];

    contract.methods
      .itemsCount()
      .call()
      .then(num => {
        for (let i = 0; i < num; i++) {
          contract.methods
            .items(i)
            .call()
            .then(res => {
              items[i] = {
                name: res[0],
                itemId: res[1],
                price: res[2],
              };
            })
            .catch(console.error)
            .finally(() => {
              finalItems.push(items[i]);
              if (i === num - 1) {
                this.setState({ items });
              }
            });
        }
      })
      .catch(console.error);
  }

  getAssets = async () => {
    const { accounts, contract } = this.state;

    let items = [];
    let finalItems = [];

    contract.methods
      .itemsCount()
      .call()
      .then(num => {
        for (let i = 0; i < num; i++) {
          contract.methods
            .getAssetItemCount(i, accounts[0])
            .call()
            .then(res => {
              console.log(res)
              items[i] = {
                itemId: i,
                num: res[0]
              };
            })
            .catch(console.error)
            .finally(() => {
              if (items[i].name !== '0') {
                finalItems.push(items[i]);
              }
              if (i === num - 1) {
                this.setState({ boughtItems: items });
              }
            });
        }
      })
      .catch(console.error);

  }

  buyItem = (itemId) => {
    console.log(itemId)
    this.state.contract.methods.buyItem(itemId).send({ from: this.state.accounts[0], value: 900000 }).then((res) => {console.log(res); this.getAssets();})
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App" >
        <Navbar
          userRegistered={this.state.userRegistered}
          account={this.state.accounts[0]}
          setTab={this.setTab}
          balance={this.state.balance}
        />
        <div style={{ backgroundColor: 'rgb(242, 242, 242)' }} >
          {
            this.state.tab === 'store' ?
              <Store data={this.state.items} buyItem={this.buyItem} />
              :
              this.state.tab === 'inventory' ?
                <Inventory data={this.state.items} boughtItems={this.state.boughtItems} buyItem={this.buyItem} />
                :
                this.state.tab === 'profile' ?
                  <Profile setTab={this.setTab} user={this.state.accounts[0]} balance={this.state.balance} />
                  : null
          }
        </div>
        {
          this.state.accounts[0] === this.state.owner ?
          this.state.items.length === 0 ?
            <button onClick={this.upload} disabled={this.state.items.length !== 0} >
              Add items
            </button>
            : null
          : null
        }
      </div>
    );
  }
}

export default App;
