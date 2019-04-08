import React from 'react'
import AOS from 'aos'
import {
  IndustryGraph,
  LayoutWrapper,
  HeaderGraph,
  Organization,
  TotalResearchCompanyGraph,
  HumanGraph,
} from '../../components'
import './index.css'

class Graph extends React.Component {
  render() {
    return (
      <LayoutWrapper>
        <HeaderGraph />
        <div className="graph-page container">
          <div className="col-10 offset-1">
            <Organization />
            <TotalResearchCompanyGraph />
            <HumanGraph />
            <IndustryGraph />
          </div>
        </div>
      </LayoutWrapper>
    )
  }
}

export default Graph
