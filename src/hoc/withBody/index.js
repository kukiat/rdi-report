import React, { useEffect, Fragment } from 'react'
import Body from './Body'
import AOS from 'aos'
import 'aos/dist/aos.css'

const withBody = (options) => (Component) => (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 200,
      easing: 'ease-out-quart',
    })
  }, [])
  return (
    <Fragment>
      <Body {...options} />
      <Component {...props} />
    </Fragment>
  )
}

export default withBody
