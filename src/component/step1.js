import React, { Component } from 'react';
import '../stylesheets/step1.css';

export class step1 extends Component {
    render() {
        return (
            <div className='container'>
                <form>
                        <label>First Name</label>
                        <input name='first_name' placeholder='Enter your first name' type='text' className='firstName' />
                </form>
            </div>
        )
    }
}

export default step1