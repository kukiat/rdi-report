import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import OutsideClickHandler from 'react-outside-click-handler';
import './index.css'

const PartnersTable = ({
  onFilterPartnerType,
  setSearchKeyword,
  onFilterSubType,
  partnersType,
  searchKeyword,
  type,
}) => {
  const refInputText = useRef()
  const [isOpenDropdown, setDropdown] = useState([false, false, false, false])
  const [activeSearch, setActiveSearch] = useState(false)

  const handleSearch = ({ target }) => setSearchKeyword(target.value)

  const getSubType = (partnerType) => {
    return partnersType.find(partner => partner.type === partnerType).subType
  }

  const setNewDropDown = (indexType) => {
    setDropdown(isOpenDropdown.map((bool, i) => i === indexType && !bool))
  }

  useEffect(() => {
    if (activeSearch) {
      refInputText.current.focus()
      refInputText.current.value = ''
    }
  }, [activeSearch])

  return (
    <div className='partner-table-container'>
      <OutsideClickHandler
        display='inline-block'
        onOutsideClick={() => {
          setDropdown([false, false, false, false])
          setActiveSearch(false)
        }}
      >
        <div className='row' css={{ position: 'relative' }}>
          <div className='partner-table-list'>
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
          <div className={classNames('input-group search-box', { 'active': activeSearch })}>
            <input
              ref={refInputText}
              type="text"
              className="form-control search-box-input"
              placeholder="ค้นหาบริษัท"
              value={searchKeyword}
              onChange={handleSearch}
            // autoFocus={activeSearch}
            />
          </div>
          <div className="input-group-append search-box-button">
            <button onClick={() => setActiveSearch(!activeSearch)} className="btn btn-outline-secondary" type="button">ค้นหา</button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default PartnersTable
