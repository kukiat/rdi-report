import React, { useState, useMemo } from 'react'
import { graphql } from 'gatsby'
import { LayoutWrapper, PartnersTable, PartnersList } from "../../components"
import {
  transformPartnerList,
  transformPartnerType,
} from "../../utils/selector/partners"
import "./index.css"

const Partners = (props) => {
  let timeout = null
  const [type, setType] = useState('all')
  const [currectType, setCurrectType] = useState('all')
  const [searchValue, setSearchValue] = useState('')

  const partnersType = useMemo(() => transformPartnerType(props.data), [props.data])
  const partnersList = useMemo(() => transformPartnerList(props.data), [props.data])

  const onFilterPartnerType = (_type, setDropdown) => {
    if (_type !== type) {
      setCurrectType(_type)
    }
    setType(_type)
    setDropdown()
  }

  const handleSearch = (e) => {
    const word = e.target.value
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      setSearchValue(word)
    }, 300)
  }

  const onFilterSubType = (_type, setDropdown) => {
    setCurrectType(_type)
    setDropdown()
  }

  const filterPartners = (_currectType, _searchValue) => {
    const filterWord = (key) => (value) => key.toLowerCase().includes(value.toLowerCase())
    const filterByName = ({ name, shortName }) => filterWord(name)(_searchValue) || filterWord(shortName)(_searchValue)
    const filterByType = ({ subType, type }) => _currectType === 'all' || _currectType === subType || _currectType === type

    return partnersList.filter(partner => filterByType(partner) && filterByName(partner))
  }

  return (
    <LayoutWrapper>
      <div className="partners-page container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="partners-header">
              <div className="partners-title">
                ทำเนียบบริษัทเอกชนในประเทศไทยที่มีกิจกรรมด้านการวิจัยและพัฒนา และกิจกรรมนวัตกรรมประจำปี 2561
              </div>
              <div className="partners-content">
                รายละเอียดข้อมูลเบื้องต้นเกี่ยวกับกิจการที่ดำเนินการลงทุนวิจัยและพัฒนาในอุตสาหกรรมต่างๆ ของประเทศไทย
                เพื่อเป็นฐานข้อมูลในการเผยแพร่สำหรับผู้ที่สนใจ
              </div>
            </div>
          </div>
        </div>
        <div className="partner-table-wrapper">
          <div className="input-group search-box col-lg-10 offset-lg-1" data-aos="fade-left">
            <input type="input" className="form-control search-box-input" placeholder="ค้นหาบริษัท" onChange={handleSearch} />
            <div className="input-group-append search-box-button">
              <button className="btn btn-outline-secondary" type="button">ค้นหา</button>
            </div>
          </div>
          <PartnersTable
            onFilterPartnerType={onFilterPartnerType}
            onFilterSubType={onFilterSubType}
            partnersType={partnersType}
            type={type}
          />
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <PartnersList
              partners={useMemo(() => filterPartners(
                currectType,
                searchValue
              ), [currectType, searchValue])
              }
            />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}


export const query = graphql`
  {
    allPartnersTypeJson {
      edges {
        node {
          name
          type
          subType {
            type
            name
          }
        }
      }
    }
    allPartnersListJson {
      edges {
        node {
          id
          partnerId
          subType
          type
          name
          shortName
        }
      }
    }
  }
`

export default Partners
