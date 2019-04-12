export const getPartnersList = (data) => {
  return data.allPartnersListJson.edges.map((partner) => ({
    ...partner.node
  }))
}

export const getPartnersType = (data) => {
  return data.allPartnersTypeJson.edges.map((type) => ({
    ...type.node,
  }))
}
