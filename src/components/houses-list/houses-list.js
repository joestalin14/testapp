import React, { Component, Fragment } from 'react'

import './houses-list.sass'

import ConfirmDelete from '../confirm-delete'

class HousesList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      confirmDelete: false,
      deleteAddress: null
    }
  }

  getConfirmDelete (address) {
    this.setState({
      confirmDelete: true,
      deleteAddress: address
    })
  }

  removeConfirm = () => {
    this.setState({
      confirmDelete: false,
      deleteAddress: null
    })
  }

  render () {
    const { confirmDelete, deleteAddress } = this.state

    const items = this.props.housesData.map((item, idx) => {
      return (
        <tr key={idx}>
          <td>{ idx + 1 }</td>
          <td>{ item.address }</td>
          <td onClick={() => this.getConfirmDelete(item.address)}>
            x
          </td>
        </tr>
      )
    })

    let confirm = null
    if (confirmDelete) {
      confirm = <ConfirmDelete address={deleteAddress} onItemDelete={this.props.onItemDelete} removeConfirm={this.removeConfirm} />
    }

    return (

      <Fragment>
        <table className='houses-list'>
          <thead>
            <tr>
              <th>Номер</th>
              <th>Адрес</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            { items }
          </tbody>
        </table>
        { confirm }
      </Fragment>

    )
  }
}

export default HousesList
