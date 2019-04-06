import React from 'react'
import classNames from 'classnames'
import Styled from 'styled-components'
import './index.css'

class PartnersTableItem extends React.PureComponent {
  handleFilter = () => {
    const { onFilterPartnerType, type } = this.props
    onFilterPartnerType(type)
  }

  render() {
    const { name, active } = this.props
    return (
      <ListItemStyled className={classNames('list-item', { active })} onClick={this.handleFilter}>
        <div className="list-content">{name}</div>
      </ListItemStyled>
    )
  }
}

class PartnersTable extends React.PureComponent {
  render() {
    const { onFilterPartnerType, active, type } = this.props

    return (
      <TableStyled>
        <ListsStyled>
          {this.props.partnerlist.map((partner, index) => (
            <PartnersTableItem
              key={index}
              active={type === partner.type}
              onFilterPartnerType={onFilterPartnerType}
              {...partner}
            />
          ))}
        </ListsStyled>
      </TableStyled>
    )
  }
}
export default PartnersTable

const TableStyled = Styled.div`
  display: flex;
  justify-content: center;
  transition: left 0.4s;
  animation: appear-left 1s ease;
  text-align: center;
  background-color: #fff;
`

const ListsStyled = Styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  list-style-type: none;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  margin-bottom: 30px;
`

const ListItemStyled = Styled.div`
  padding: 15px 20px;
  color: #000;
`
