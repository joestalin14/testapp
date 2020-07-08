import React from 'react'

import './confirm-delete.sass'

const ConfirmDelete = ({address, onItemDelete, removeConfirm}) => {
  return (
    <div className='confirm-delete'>
      <div className='confirm-delete-modal jumbotron'>
        <p>Вы действительно хотите удалить?</p>
        <button
          className='btn btn-md btn-success'
          onClick={() => {
            onItemDelete(address)
            removeConfirm()
          }}
        >
          Да
        </button>
        <button
          className='btn btn-md btn-danger'
          onClick={() => removeConfirm()}
        >
          Нет
        </button>
      </div>
    </div>
  )
}

export default ConfirmDelete
