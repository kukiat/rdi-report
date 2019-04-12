import React, { useEffect, Fragment } from 'react'
import DocumentHead from './DocumentHead'
import Modal from 'react-modal'
import AOS from 'aos'
import './index.css'
import 'aos/dist/aos.css'

const PageLauout = ({ children }) => {
  useEffect(() => {
    Modal.setAppElement('body')
    AOS.init({
      duration: 1200,
      delay: 200,
      easing: 'ease-out-quart',
    })
  }, [])
  return (
    <Fragment>
      <DocumentHead />
      {children}
    </Fragment>
  )
}

export default PageLauout
