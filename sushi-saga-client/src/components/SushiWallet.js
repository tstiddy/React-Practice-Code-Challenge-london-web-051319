import React from 'react'

class SushiWallet extends React.Component {

    state = {
        funds: ''
    }

    addFunds = () => {
        this.props.addFunds(this.state.funds)
        this.setState({ funds: '' })
    }

    render() {
        return (
            <div>
                <input type="number" onChange={e => this.setState({ funds: e.target.value })} value={this.state.funds} />
                <button onClick={this.addFunds}>Add funds!</button>
            </div>
        )
    }
}

export default SushiWallet