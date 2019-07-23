import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    sushisToDisplay: [0, 1, 2, 3]
  }

  getSushisToDisplay = (all, indexes) => all.filter((sushi, i) => indexes.includes(i)) //filters through the suhsis to find the first four 

  moreSushis = () => this.setState({
    sushisToDisplay: this.state.sushisToDisplay.map(index => //gets and shows the first four sushis
      index + 4 >= this.props.sushis.length ? (index + 4) - this.props.sushis.length : index + 4
    )
  })

  render() {
    const sushis = this.getSushisToDisplay(this.props.sushis, this.state.sushisToDisplay)//passes in all sushis and the number of sushis to display

    return (
      <Fragment>
        <div className="belt">
          {
            sushis.map(sushi => <Sushi key={sushi.id} {...sushi} clickHandler={() => this.props.sushiClickHandler(sushi)} />)
          }
          <MoreButton clickHandler={this.moreSushis} />
        </div>
      </Fragment>
    )

  }
}

export default SushiContainer