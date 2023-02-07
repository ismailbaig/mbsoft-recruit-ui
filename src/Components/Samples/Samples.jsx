import React from 'react';
import './Samples.css';

export const Samples = () => {
    return (
        <div>
            <div className='container mb-5' style={{marginTop: '20%'}}>
                <div className='row'>
                    <div className='col-lg-10 col-md-8 col-sm-6 col-xs-6' style={{border: '1px solid red'}}>column with 8 grids</div>
                    <div className='col-lg-2 col-md-4 col-sm-6 col-xs-6' style={{border: '1px solid red'}}>column with 4 grids</div>
                </div>
            </div>

{/* <div className='myText heading-3'>
                <h1>It's Friday</h1>
            </div> */}
        </div>

    )
}