const React = require('react')

class CoordinatesButton extends React.Component {
  constructor() {
    super()
  }

  handleClick(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}></button>
    )
  }
}

module.exports = CoordinatesButton
