import React from 'react'
import {
  LayoutWrapper,
  HeaderGraph,
  Organization,
  TotalResearchCompanyGraph,
  TotalResearchCompanyGraph2,
  HumanGraph,
  Graph4,
  Graph8,
  Graph9,
  Graph10,
  GraphSix,
  GraphSeven,
} from '../../components'
import './index.css'

const GraphContainer = () => {
  return (
    <LayoutWrapper>
      <HeaderGraph />
      <div className="container">
        <div className="graph-page row">
          <div className="col-lg-10 offset-lg-1">
            <Organization />
            <TotalResearchCompanyGraph />
            <TotalResearchCompanyGraph2 />
            <Graph4 />
            <HumanGraph />
            <GraphSix />
            <GraphSeven />
            <Graph8 />
            <Graph9 />
            <Graph10 />
          </div>
        </div>
      </div>
    </LayoutWrapper >
  )
}

export default GraphContainer
