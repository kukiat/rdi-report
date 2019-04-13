import { createSelector } from 'reselect'

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

export const getPartnersData = (partner) => createSelector(
  (partnersType) => partnersType.find(partnerType => partnerType.type === partner.type),
  (partnerType) => ({
    ...partner,
    subTypeName: partnerType.subType.find(subType => subType.type === partner.subType).name,
    typeName: partnerType.name,
  })
)