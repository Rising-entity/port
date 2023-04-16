import React from 'react';
import './Section3.css';

export default function Section3() {
    return (
        <>
            <div className='container'>

                <div className='box1'>
                    <h3>Heres some stuff I made recently</h3>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, earum!</p>
                </div>


                <div className="container box2 ">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='box3'>
                        <h3>Lorem ipsum dolor sit amet.</h3>

                        <button style={{ display: "block", margin:"auto" }}>get in touch with me</button>
                    </div>

                </div>


            </div>

        </>
    )
}
