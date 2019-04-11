import React from 'react';
import { Waypoint } from 'react-waypoint';
import CountUp from 'react-countup'
import PropTypes from 'prop-types'

class NumberCountUp extends React.Component {
  constructor() {
    super()
    this.state = {
      isEnteredYet: false,
    }
  }

  onEnter = (startCountUp) => {
    const { isEnteredYet } = this.state

    if (isEnteredYet === false) {
      startCountUp()
    }
    this.setState({ isEnteredYet: true })
  }

  render() {
    const { startValue, stopValue, className, style } = this.props

    return (
      <CountUp
        start={startValue}
        end={stopValue}
        duration={1}
        separator=","
      >
        {({ countUpRef, start }) => (
          <Waypoint
            scrollableAncestor={window}
            onEnter={() => this.onEnter(start)}
          >
            <span ref={countUpRef} className={className} style={style} />
          </Waypoint>
        )}
      </CountUp>
    )
  }
}

NumberCountUp.propTypes = {
  startValue: PropTypes.number,
  stopValue: PropTypes.number.isRequired,
  className: PropTypes.string,
  style: PropTypes.objectOf(StyleSheet),
};

NumberCountUp.defaultProps = {
  startValue: 0,
  stopValue: 0,
  className: '',
  style: {},
};


export default NumberCountUp
