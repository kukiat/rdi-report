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
  Graph8,
  Graph9,
} from '../../components'
import './index.css'

class Graph extends React.Component {
  render() {
    return (
      <LayoutWrapper>
        <HeaderGraph />
        <div className="container">
          <div className="graph-page">
            <Organization />
            <TotalResearchCompanyGraph />
            <TotalResearchCompanyGraph2 />
            <Graph4 />
            <HumanGraph />
            <IndustryGraph />
            <Graph8 />
            <Graph9 />
          </div>
        </div>
      </LayoutWrapper>
    )
  }
}

export default Graph
