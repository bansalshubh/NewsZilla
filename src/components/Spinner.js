import React, { Component } from 'react'
import loading from '../loading.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center' style={{"width":"18rem","height":"40rem"}}>
                <img src={loading} alt="loading" />
            </div>
        )
    }
}
