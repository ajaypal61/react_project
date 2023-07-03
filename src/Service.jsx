import React from 'react'
import Cards from './Cards';
import Sdata from './Sdata';

const Service = () => {
    return (
        <>
            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <h1 className='text-center mb-4 text-info'>Our Service</h1>
                        <div className='row gy-4'>
                            {
                                Sdata.map((val, ind) => {
                                    return <Cards
                                        Key={val.id}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service; 