import React, { useState } from 'react'
import classNames from 'classnames'
import OutsideClickHandler from 'react-outside-click-handler';
import './index.css'

const PartnersTable = ({
  onFilterPartnerType,
  onFilterSubType,
  partnersType,
  type,
}) => {
  const [isOpenDropdown, setDropdown] = useState([false, false, false, false])

  const getSubType = (partnerType) => {
    return partnersType.find(partner => partner.type === partnerType).subType
  }

  const setNewDropDown = (indexType) => {
    setDropdown(isOpenDropdown.map((bool, i) => i === indexType && !bool))
  }

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setDropdown([false, false, false, false])
      }}
    >
      <div className='partner-table-container col-lg-10 offset-lg-1'>
        <div className='partner-table-list col-12'>
          {
            partnersType.map((partnerType, indexType) => (
              <div
                className={classNames('partner-table-item', partnerType.type.toLowerCase())}
                key={indexType}
              >
                <div
                  className={classNames('list-item', {
                    'active': type === partnerType.type,
                    'active-dropdown': isOpenDropdown[indexType]
                  })}
                  onClick={() => onFilterPartnerType(partnerType.type, () => setNewDropDown(indexType))}
                >
                  <div className="list-content">{partnerType.name}</div>
                </div>
                {
                  isOpenDropdown[indexType] && (
                    <div className='dropdown-list'>
                      {
                        getSubType(partnerType.type).map(((subType, i) => (
                          <div
                            key={i}
                            className='__dropdown-item'
                            onClick={() => {
                              onFilterSubType(subType.type, () => setNewDropDown(indexType))
                            }}
                          >
                            {subType.name}
                          </div>
                        )))
                      }
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
      <div className="partner-table-container-mobile">
        <div className="form-group">
          <label htmlFor="select-type">กรองบริษัทด้วยประเภทอุตสาหกรรม</label>
          <select
            className="form-control"
            id="select-type"
            onChange={({ target }) => onFilterPartnerType(target.value, () => { })}
          >
            {
              partnersType.map((type, i) => (
                <option key={`type-${i}`} value={type.type}>
                  {type.name}
                </option>
              ))
            }
          </select>
        </div>
      </div>
    </OutsideClickHandler >
  )
}

export default PartnersTable
