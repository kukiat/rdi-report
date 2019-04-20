import { createSelector } from 'reselect'

export const transformPartnerList = (data) => {
  return data.allPartnersListJson.edges.map((partner) => ({
    ...partner.node
  }))
}

export const transformPartnerType = (data) => {
  return data.allPartnersTypeJson.edges.map((type) => ({
    ...type.node,
  }))
}

export const getPartnersData = (partner, searchValue) => createSelector(
  (partnersType) => partnersType.find(partnerType => partnerType.type === partner.type),
  (partnerType) => {
    return {
      ...partner,
      subTypeName: partnerType.subType.find(subType => subType.type === partner.subType).name,
      typeName: partnerType.name,
    }
  }
)