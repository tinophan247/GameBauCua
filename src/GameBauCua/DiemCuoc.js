import React from 'react'

export default function DiemCuoc() {
  return (
    <div>
      <h3 className='text-center display-4 text-success'>
        Game Bầu Cua Tino
      </h3>
      <div className='text-center mt-5'>
        <span style={{ fontSize: '20px', borderRadius: "5%" }} className="p-3 text-white bg-danger">Tiền thưởng: 
          <span className='text-warning'> 100$</span>
        </span>
      </div>
      <div className='text-center mt-5'>
        <span style={{ fontSize: '15px', borderRadius: "5%", border: 'none' }} className="p-2 text-white bg-success">Chơi lại</span>
      </div>
    </div>
  )
}
