import React from 'react';
import img1 from "../../images/Home/twitter.png"
import img2 from "../../images/Home/instagram.png"
import img3 from "../../images/Home/facebook.png"
import img4 from "../../images/Home/linkedin.png"


export default function Section5() {
    return (
        <>
            <div className="container">

                <h3>find me on...</h3>
                <div className='container d-flex justify-content-center'>
                    <img src={img1} alt="" width={45} height={45} className='img-fluid' />
                    <img src={img2} alt="" width={45} height={45} className='img-fluid' />
                    <img src={img3} alt="" width={45} height={45} className='img-fluid' />
                    <img src={img4} alt="" width={45} height={45} className='img-fluid' />
                </div>

                <p>all rights reserved</p>
            </div>
        </>
    )
}
