import React, { Component } from 'react';
import '../stylesheets/step2.css';

export class step2 extends Component {
    render() {
        return (
            <div className='container'>
                <form>
                    <label>Last Name</label>
                    <input name='last_name' placeholder='Enter your last name' type='text' className='LastName' />
                </form>
            </div>
        )
    }
}

export default step2