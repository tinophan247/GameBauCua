import React from 'react'
import { useSelector } from 'react-redux'
import QuanCuoc from './QuanCuoc'

export default function ListDatCuoc(props) {
  const ListBet = useSelector(state => state.GameBauCuaReducer.ListBet)

  const renderBetList = () => {
    return ListBet.map((item, index) => {
      return <div className='col-4' key={index}>
        <QuanCuoc item={item} />
      </div>
    }
    )
  }

  return (
    <div className='row mt-5'>
      {renderBetList()}
    </div>
  )
}
