import React from 'react'
import XucXac from './XucXac'
import { useDispatch, useSelector } from 'react-redux/es/exports'

export default function ListXucXac(props) {
  const diceArray = useSelector(state => state.GameBauCuaReducer.diceArray);

  const dispatch = useDispatch();

  return (
    <div className='mt-5 ml-5'>
      <div  style={{ width: 300, height: 300, borderRadius: 150, paddingLeft: 10, background : 'white' }}>
        <div className='row'>
          <div className=' col-12 text-center' style={{ marginLeft: 75}}>
            <XucXac item={diceArray[0]} />
          </div>
        </div>
        <div className='row' style={{marginTop: -20}}>
          <div className='col-4 text-right'>
            <XucXac item={diceArray[1]} />
          </div>
          <div className='col-4 text-right'>
            <XucXac item={diceArray[2]} />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: '20%', marginTop: '5%' }}>
        <button onClick={() => {
          dispatch({
            type:'PLAY',

          })
        }} className='btn btn-success ml-4' style={{ fontSize: '30px' }} >Xốc</button>
      </div>
    </div>
  )
}
