import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-4'>
                    <h1>Unbeatable pricing</h1>
                    <p className='mt-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col p-3 border text-center'>
                            <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign fs-2"></i>0</h1>
                            <p> Free equity delivery <br/> and direct mutual funds</p>
                        </div>
                        <div className='col p-3 border text-center'>
                            <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign fs-2"></i>20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Pricing;