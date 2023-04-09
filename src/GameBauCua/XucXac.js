import React, { Fragment } from 'react'
export default function XucXac(props) {

  let { item } = props;

  return (
    <Fragment>
      <div className='scene' >
        <div className='cube'>
          <img className='ml-3 cube__face front' src={item.image} alt={item.image} style={{ width: 50 }} />
          <img className='ml-3 cube__face back' src='./img/GameBauCua/nai.png' alt='./img/GameBauCua/nai.png' style={{ width: 50 }} />
          <img className='ml-3 cube__face left' src='./img/GameBauCua/cua.png' alt='./img/GameBauCua/cua.png' style={{ width: 50 }} />
          <img className='ml-3 cube__face right' src='./img/GameBauCua/tom.png' alt='./img/GameBauCua/tom.png' style={{ width: 50 }} />
          <img className='ml-3 cube__face top' src='./img/GameBauCua/ga.pngg' alt='./img/GameBauCua/ga.png' style={{ width: 50 }} />
          <img className='ml-3 cube__face bottom' src='./img/GameBauCua/ca.png' alt='./img/GameBauCua/ca.png' style={{ width: 50 }} />
        </div>
      </div>
    </Fragment>
  )
}
