import React from 'react';
import './Section1.css';
import img1 from "../../images/Home/man-working-on-laptop.png"

export default function Section1() {
    return (
        <>
            <div id='mainbox'>
                <div className="container " >

                    <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="">
                                <div className="card-body">
                                    <img src={img1} alt="man working " width={500} height={500} className='img-fluid' />

                                </div>
                            </div>
                        </div>


                        <div className="col-sm-6 d-flex align-items-center">
                            <div className=" ">
                                <div className="card-body">
                                    <h2 className="card-title mb-4">Hii I'm <span> Mayank Ashtekar</span> </h2>
                                    <p className="card-text mb-2">
                                        I'm a Electronics Engineering sophomore at, <br /> Yeshwantrao Chavan College of Engineering, <br />
                                        Nagpur, pursuing undergraduate degree. I am,<br /> primarily front end developer ..
                                    </p>

                                </div>
                                <a href="#" className='my-10'>
                                    Know About What I do
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </>
    )
}
