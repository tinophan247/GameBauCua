import React from 'react'
import DiemCuoc from './DiemCuoc'
import ListDatCuoc from './ListDatCuoc'
import ListXucXac from './ListXucXac'
import './CSS/GameBauCua.css'

export default function GameBauCua(props) {
    return (
        <div id="GameBauCua" className='container-fluid' style={{margin:0, background:'orange'}}>
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
