import React, { Component } from 'react'

import './login-form.sass'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: null,
      password: null,
      formStatus: null
    }
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
    const { email, password } = this.state
    let result = null
    usersData.map((user) => {
      if (user.email === email && user.password === password) {
        result = true
      }
      return null
    })
    if (result) {
      this.setState({ formStatus: 'success' })
      this.props.onLoggedIn()
    } else {
      this.setState({ formStatus: 'failed' })
    }
  }
  
  render () {
    const { formStatus } = this.state
    
    let formResult
    if (formStatus === 'success') {
      formResult = <p className='alert alert-success'>Успешно</p>
    } else if (formStatus === 'failed') {
      formResult = <p className='alert alert-danger'>Неверные данные</p>
    } else {
      formResult = null
    }
    
    return (
      <form 
        className='login-form form'
        onSubmit={this.onFormSubmit}
      >
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
          className='btn btn-success mb-2'
        >
          Войти
        </button>
        { formResult }
      </form>
    )
  }
}

export default LoginForm
