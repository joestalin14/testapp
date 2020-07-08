import React, { Component } from 'react'

import './app.sass'

import { MainPage, Account } from '../pages'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      usersData: [
        { name: 'Ричард', surname: 'Хендрикс', phone: '89876543210', email: 'rhendrix@pp.com', password: '1110' },
        { name: 'Бертрам', surname: 'Гилфойл', phone: '89876543211', email: 'bgilfoyle@pp.com', password: '1111' },
        { name: 'Динеш', surname: 'Чухтай', phone: '89876543212', email: 'dchugtai@pp.com', password: '1112' }
      ],
      housesData: [
        { address: 'г. Воронеж, пр-т. Московский, д. 25' },
        { address: 'г. Воронеж, ул. Плехановская, д. 2' },
        { address: 'г. Воронеж, пер. Маломосковский, д. 4' },
        { address: 'г. Воронеж, ул. Ленина, д. 14' },
        { address: 'г. Воронеж, ул. Матросова, д. 10' }
      ],
      isLoggedIn: false
    }
  }

  onLoggedIn = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  onItemDelete = (address) => {
    this.setState(({housesData}) => {
      const idx = housesData.findIndex((el) => el.address === address)
      const newData = [
        ...housesData.slice(0, idx),
        ...housesData.slice(idx + 1)
      ]
      return {
        housesData: newData
      }
    })
  }

  onItemAdded = (str) => {
    this.setState(({housesData}) => {
      const newItem = {
        address: str
      }
      const newData = [
        ...housesData,
        newItem
      ]
      return {
        housesData: newData
      }
    })
  }

  onUserAdded = (name, surname, phone, email, password) => {
    this.setState(({usersData}) => {
      const newUser = {
        name,
        surname,
        phone,
        email,
        password
      }
      const newData = [
        ...usersData,
        newUser
      ]
      return {
        usersData: newData
      }
    })
  }
  
  render () {
    const { usersData, housesData, isLoggedIn } = this.state

    let page = <MainPage usersData={usersData} onLoggedIn={this.onLoggedIn} onUserAdded={this.onUserAdded} />
    if (isLoggedIn) {
      page = <Account housesData={housesData} onItemDelete={this.onItemDelete} onItemAdded={this.onItemAdded} />
    }

    return (
      <div className='app'>
        { page }
      </div>
    )
  }
}

export default App
