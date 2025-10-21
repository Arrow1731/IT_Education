import React, { Component } from 'react'
import UP_IMG from '../assets/up_Footer.png';

export default class extends Component {
    render() {
        return (
            <div>
                <div className='mt-[120px]'>
                    <img src={UP_IMG} alt="" />
                </div>
            </div>
        )
    }
}
