import React, { Component } from 'react'

import LoginForm from '../login-form'
import RegistrationForm from '../registration-form'

class MainPage extends Component {

  constructor (props) {
    super(props)
    this.state = { selectedForm: null }
  }

  selectLoginForm () {
    this.setState({
      selectedForm: 'login-form'
    })
  }

  selectRegistrationForm () {
    this.setState({
      selectedForm: 'registration-form'
    })
  }

  render () {
    const { selectedForm } = this.state
    const { usersData } = this.props

    let formOnPage
    if (selectedForm === 'login-form') {
      formOnPage = <LoginForm usersData={usersData} onLoggedIn={this.props.onLoggedIn} />
    } else if (selectedForm === 'registration-form') {
      formOnPage = <RegistrationForm usersData={usersData} onLoggedIn={this.props.onLoggedIn} onUserAdded={this.props.onUserAdded} />
    } else {
      formOnPage = null
    }

    return (
      <div className='main-page jumbotron'>
        <h1>Главная страница</h1>
        <button
          className='btn btn-success btn-lg'
          onClick={() => this.selectLoginForm()}>
          Войти
        </button>
        <button
          className='btn btn-danger btn-lg'
          onClick={() => this.selectRegistrationForm()}>
          Зарегистрироваться
        </button>
        { formOnPage }
      </div>
    )
  }
}

export default MainPage
