import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import API from './adapters/API';
import SushiWallet from './components/SushiWallet';


class App extends Component {

  state = {
    allSushis: [],  //all sushis state
    eatenSushis: [], //all the eaten sushis stored seperatly
    budget: Math.floor(Math.random() * 50) + 10,
    cantAfford: false
  }

  componentDidMount() {
    API.getAllSushis()
      .then(allSushis => this.setState({ allSushis })) //setting the api to state
  }

  eatSushi = sushi => {
    if (this.state.eatenSushis.includes(sushi.id)) return; //checks if eaten sushi has a sushi from allSushi and if false will return
    if (this.state.budget < sushi.price) { 
      this.setState({         //if sushi costs more than the budget then return true and prompt cant afford
        cantAfford: true
      })
      return;
    }
    this.setState({
      eatenSushis: [...this.state.eatenSushis, sushi.id],
      budget: this.state.budget - sushi.price,  //subtracts the cost of the sushi from budget 
      cantAfford: false
    })
  }

  findSushi = id => this.state.sushis.find(sushi => sushi.id === id) //finds the sushi that has been clicked

  addFunds = funds => this.setState({
    budget: this.state.budget + parseInt(funds) //adds funds from the text box
  })

  render() {

    const sushis = this.state.allSushis.map(sushi => ({ //maps through the sushis and adds is eaten
      ...sushi,
      isEaten: this.state.eatenSushis.includes(sushi.id)
    }))

    return (
      <div className="app">
        <SushiContainer sushis={sushis} sushiClickHandler={this.eatSushi} />
        <Table plates={this.state.eatenSushis} budget={this.state.budget} showBrokeMessage={this.state.cantAfford} />
        <SushiWallet addFunds={this.addFunds} />
      </div>
    );
  }
}

export default App;