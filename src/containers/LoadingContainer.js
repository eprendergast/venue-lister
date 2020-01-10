import React from 'react'
import { SyncLoader } from 'react-spinners'
import './LoadingContainer.css'

const LoadingContainer = () => 
    <div className='loading-container'>
        <SyncLoader color={'#4A4C49'}/>
    </div>

export default LoadingContainer
