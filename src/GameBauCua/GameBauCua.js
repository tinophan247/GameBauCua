import React from 'react'
import DiemCuoc from './DiemCuoc'
import ListDatCuoc from './ListDatCuoc'
import ListXucXac from './ListXucXac'

export default function GameBauCua(props) {
    return (
        <div className='container-fluid'>
            <DiemCuoc />
            <div className='row'>
                <div className='col-8'>
                    <ListDatCuoc />
                </div>
                <div className='col-4'>
                    <ListXucXac />
                </div>

            </div>
        </div>
    )
}
