export const getPartnersList = (data) => {
  const { allPartnersListJson, allFile } = data
  return allPartnersListJson.edges.map((partner, index) => ({
    ...partner.node,
    ...allFile.edges[index].node.childImageSharp.fixed,
  }))
}

export const getPartnersType = (data) => {
  const { allPartnersTypeJson } = data
  return allPartnersTypeJson.edges.map((type) => ({
    ...type.node,
  }))
}
