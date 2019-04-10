import React from 'react'
import {
  IndustryGraph,
  LayoutWrapper,
  HeaderGraph,
  Organization,
  TotalResearchCompanyGraph,
  TotalResearchCompanyGraph2,
  HumanGraph,
  Graph4,
} from '../../components'
import './index.css'

class Graph extends React.Component {
  render() {
    return (
      <LayoutWrapper>
        <HeaderGraph />
        <div className="graph-page container">
          <div className="col-lg-12">
            <Organization />
            <TotalResearchCompanyGraph />
            <TotalResearchCompanyGraph2 />
            <Graph4 />
            <HumanGraph />
            <IndustryGraph />
          </div>
        </div>
      </LayoutWrapper>
    )
  }
}

export default Graph
