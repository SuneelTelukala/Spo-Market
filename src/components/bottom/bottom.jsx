import React from 'react';
import LogoA from '../../assets/images/logoa.png';
import LogoB from '../../assets/images/logob.png';
import LogoC from '../../assets/images/logoc.png';
import LogoD from '../../assets/images/logod.png';

export function Projectz() {
    return (
        <div>
            <h1 className='text-center'>How It Works?</h1>
            <h5 className='text-center'>How It Works?</h5>
            <div className='d-flex justify-content-between p-4'>
                <div className='ps-4'>
                    <img src={LogoA} className="logo1" alt="" />
                    <p>Choose your property</p>
                </div>
                <div>
                    <img src={LogoB} className="logo2" alt="" />
                    <p>Buy Blocks</p>
                </div>
                <div>
                    <img src={LogoC} className="logo3" alt="" />
                    <p>Earn net rental income per Block</p>
                </div>
                <div>
                    <img src={LogoD} className="logo4" alt="" />
                    <p>Sell your Blocks to earn any <br/> capital returns</p>
                </div>
            </div>
            <h6 className='text-center'>Consider whether investing in Blocks is right for you by reading the PDS</h6>
        </div>
    );
}
