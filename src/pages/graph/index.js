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
  Graph10,
  GraphAbc,
  GraphDef,
} from '../../components'
import './index.css'

class Graph extends React.Component {
  render() {
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
              <IndustryGraph />
              <GraphAbc />
              <GraphDef />
              <Graph8 />
              <Graph9 />
              <Graph10 />
            </div>
          </div>
        </div>
      </LayoutWrapper >
    )
  }
}

export default Graph
