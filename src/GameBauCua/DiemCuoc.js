import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function DiemCuoc(props) {
  const totalScore = useSelector(state => state.GameBauCuaReducer.totalScore)

  const dispatch = useDispatch();

  return (
    <div>
      <h3 className='text-center display-4 text-success ' style={{marginTop:0}}>
        Game Bầu Cua WDA
      </h3>
      <div className='text-center mt-5'>
        <span style={{ fontSize: '20px', borderRadius: "5%" }} className="p-3 text-white bg-danger">Tiền thưởng: 
          <span className='text-warning'> {totalScore.toLocaleString()}$</span>
        </span>
      </div>
      <div className='text-center mt-5'>
        <span onClick={()=>{dispatch({type:'REPLAY'})}}  style={{ fontSize: '15px', borderRadius: "5%", border: 'none' }} className="p-2 text-white bg-success">Chơi lại</span>
      </div>
    </div>
  )
}
