const React = require('react')

class DelayedButton extends React.Component {
  handleDelayedClick(event) {
    setTimeout(this.props.onDelayedClick, this.props.delay, event)
    event.persist()
  }

  render() {
    return (
      <button onClick={this.handleDelayedClick.bind(this)}></button>
    )
  }
}

module.exports = DelayedButton
