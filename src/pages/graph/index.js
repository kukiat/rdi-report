import React from 'react'
import { LayoutWrapper } from '../../components'
import withBody from '../../hoc/withBody'
import './index.css'

const Graph = () => (
  <LayoutWrapper>
    <h1>Graph</h1>
  </LayoutWrapper>
)

export default withBody()(Graph)
