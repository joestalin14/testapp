import React, { Component } from 'react'

class AddItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newAddress: null
    }
  }

  onAddressChange = (e) => {
    this.setState({
      newAddress: e.target.value
    })
  }

  render () {
    return (
      <form
        className='form-inline'
        onSubmit={(e) => {
          e.preventDefault()
          if (this.state.newAddress !== null && this.state.newAddress.length > 0) {
            this.props.onItemAdded(this.state.newAddress)
            this.props.removeAddItem()
          }
        }}
      >
        <input
          type='text'
          className='form-control mb-2 mr-sm-2'
          id='inlineFormInputName2'
          placeholder='Введите адрес'
          onChange={this.onAddressChange}
        />
        <button
          type='submit'
          className='btn btn-success mb-2'
        >
          <i className='fa fa-check' />
        </button>
        <button
          type='reset'
          className='btn btn-danger mb-2'
          onClick={() => this.props.removeAddItem()}
        >
          <i className='fa fa-times' />
        </button>
      </form>
    )
  }
}

export default AddItem
