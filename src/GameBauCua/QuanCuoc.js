import React from 'react'
import { useDispatch } from 'react-redux';

export default function QuanCuoc(props) {
  const dispatch = useDispatch();
  const { item } = props;

  return (
    <div className='mt-3'>
      <img src={item.image} alt='img' style={{ width: 200 }} />
      <div className='bg-success mt-2 pb-2 text-center' style={{ width: 200, borderRadius: '10' }}>
        <button onClick={() => {
          dispatch({
            type: 'DAT_CUOC_BAU_CUA',
            item,
            tangGiam: true,
          })
        }} className='btn btn-danger mr-3'><i className='fa fa-plus'></i></button>
        <span className='mt-2' style={{ color: 'yellow', fontSize: 25 }}>{item.betPoint} </span>
        <button onClick={() => {
          dispatch({
            type: 'DAT_CUOC_BAU_CUA',
            item,
            tangGiam: false,
          })
        }} className='btn btn-danger ml-3'><i className='fa fa-minus'></i></button>
      </div>
    </div>
  )
}
