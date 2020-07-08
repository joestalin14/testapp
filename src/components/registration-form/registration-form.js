import React, { Component } from 'react'

import './registration-form.sass'

class RegistrationForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: null,
      surname: null,
      phone: null,
      email: null,
      password: null,
      formStatus: null
    }
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onSurnameChange = (e) => {
    this.setState({
      surname: e.target.value
    })
  }

  onPhoneChange = (e) => {
    this.setState({
      phone: e.target.value
    })
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    const { usersData } = this.props
    const { name,
            surname,
            phone,
            email,
            password } = this.state
    if ( !name || !surname || !phone || !email || !password ) {
      this.setState({ formStatus: 'failed' })
      return
    }
    let result
    usersData.map((user) => {
      if (user.phone === phone || user.email === email) {
        this.setState({ formStatus: 'failed' })
        result = 'failed'
      } 
      return null
    })
    if (result === 'failed') {
      return
    }
    this.props.onUserAdded(name, surname, phone, email, password)
    this.props.onLoggedIn()
  }

  render () {
    const { formStatus } = this.state

    let formResult
    if (formStatus === 'failed') {
      formResult = <p className='alert alert-danger'>Ошибка</p>
    } else {
      formResult = null
    }
    
    return (
      <form 
        className='registration-form form'
        onSubmit={this.onFormSubmit}
      >
        <input
          type='text'
          className='form-control mb-2 mr-sm-2'
          placeholder='Имя'
          onChange={this.onNameChange}
        />
        <input
          type='text'
          className='form-control mb-2 mr-sm-2'
          placeholder='Фамилия'
          onChange={this.onSurnameChange}
        />
        <input
          type='text'
          className='form-control mb-2 mr-sm-2'
          placeholder='Телефон'
          onChange={this.onPhoneChange}
        />
        <input
          type='text'
          className='form-control mb-2 mr-sm-2'
          placeholder='Электронная почта'
          onChange={this.onEmailChange}
        />
        <input
          type='text'
          className='form-control mb-2 mr-sm-2'
          placeholder='Пароль'
          onChange={this.onPasswordChange}
        />
        <button
          type='submit'
          className='btn btn-danger mb-2'>
          Зарегистрироваться
        </button>
        { formResult }
      </form>
    )
  }
}

export default RegistrationForm
