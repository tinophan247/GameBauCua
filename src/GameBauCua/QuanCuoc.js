import React from 'react'
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';

export default function QuanCuoc(props) {
  const dispatch = useDispatch();
  const { item } = props;

  const [propsUseSpringInCrease, setInCrease] = useSpring(() => {
    return {
      to: { scale: 1.25 },
      from: { scale: 1 },
      reset: true
    }
  })
  const [propsUseSpringDeCrease, setDeCrease] = useSpring(() => {
    return {
      to: { scale: 1.25 },
      from: { scale: 1 },
      reset: true
    }
  })

  return (
    <div className='mt-3 '>
      <img className='border border-dark' src={item.image} alt='img' style={{ width: 200 }} />

      <div className='bg-success mt-2 pb-2 text-center' style={{ width: 200, borderRadius: '10' }}>
        <animated.button style={{ transform: propsUseSpringInCrease.scale.interpolate(scale => `scale(${scale})`) }} onClick={() => {
          setInCrease({ scale: 1 })
          setInCrease({ scale: 1.25 })
          dispatch({
            type: 'BET',
            item,
            tangGiam: true,
          })
        }} className="btn btn-danger mr-3"><i className="fa fa-plus"></i></animated.button>

        <span className='mt-2' style={{ color: 'yellow', fontSize: 25 }}>{item.betPoint} </span>
        <animated.button style={{ transform: propsUseSpringDeCrease.scale.interpolate(scale => `scale(${scale})`) }} onClick={() => {

          setDeCrease({ scale: 1 })
          setDeCrease({ scale: 1.25 })

          dispatch({
            type: 'BET',
            item,
            tangGiam: false
          })
        }} className="btn btn-danger ml-3">-</animated.button>
      </div>
    </div>
  )
}
