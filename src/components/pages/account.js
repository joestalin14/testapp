import React, { Component } from 'react'

import HousesList from '../houses-list'
import AddItem from '../add-item'

class Account extends Component {
  constructor (props) {
    super(props)
    this.state = {
      addItemForm: false
    }
  }

  toggleAddItemForm = () => {
    this.setState({
      addItemForm: !this.state.addItemForm
    })
  }
  
  render () {

    let addForm = null
    if (this.state.addItemForm) {
      addForm = <AddItem removeAddItem={this.toggleAddItemForm} onItemAdded={this.props.onItemAdded} />
    }
    
    return (
      <div className='account jumbotron'>
        <h1>Личный кабинет</h1>
        <h4>Мои дома</h4>
        <HousesList
          housesData={this.props.housesData}
          onItemDelete={this.props.onItemDelete}
        />
        { addForm }
        <button 
          className='btn btn-danger btn-lg'
          onClick={() => this.toggleAddItemForm()}
        >
          Добавить
        </button>
      </div>
    )
  }
}

export default Account
