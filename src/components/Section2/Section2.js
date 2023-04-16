import React from 'react';
import './Section2.css';
import img1 from "../../images/Home/coding.png"

export default function () {
    return (
        <>
            <div className='mainBox2'>

                <div className='container' id='headings' >
                    <h3 >Here's all the stuff I do</h3>
                    <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, consequuntur.</p>
                </div>
                <div className="row container mx-auto temp ">
                    <div className="col-md-4 myCard" >
                        <h3 className="" >Web Development</h3>
                        <img src={img1} alt="web development" className='img' />

                    </div>


                    <div className="col-md-4 myCard">
                        <h3>Competative Programming</h3>
                        <img src={img1} alt="web development" className='img' />

                    </div>

                    <div className="col-md-4 myCard">
                        <h3>Python</h3>
                        <img src={img1} alt="web development" className='img' />

                    </div>

                </div>

            </div>











        </>
    )
}
