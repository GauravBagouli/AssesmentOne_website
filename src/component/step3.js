import React, { Component } from 'react';
import '../stylesheets/step3.css';

export class step3 extends Component {
    render() {
        return (
            <div className='container'>
                <form>
                    <label>Enter Age</label>
                    <input name='age' placeholder='Enter your age' type='number' className='Age' />
                    <label>Enter Email</label>
                    <input name='email' placeholder='Enter your email' type='email' className='Email' />
                </form>
            </div>
        )
    }
}

export default step3