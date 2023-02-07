import React,{ useEffect } from 'react';
import './Journey.scss';
import Start from '../../components/assets/Broomstick 1.png'
import Aos from 'aos'
import 'aos/dist/aos.css';
import broom from '../assets/whatsapp.png'

const Journey = () => {

    useEffect( () => {
        Aos.init({duration:2000});
      },[]);

    return (
        <>  
            <div class="page-header">Our Journey Till Now</div>
            <div class="timeline">
                <ul>
                    <div  data-aos="fade-left" class="memory">
                      
                        <div class="memory-container">
                        <div className='imageContainer'>
                            {/* <img src={broom} alt="/" /> */}
                        </div>
                        <div className='textContainer'>
                            <p class="memory-date" >1.   It started off as engineering project –– “The West has Vacuum cleaners for their carpeted floors but Us, Why are we still using Centuries old tech – Time we need an upgrade!”</p>
                            </div>
                        </div>           
                    </div>
                    <div data-aos="fade-right" class="memory">
                        <div   class="memory-container">
                            <div class="memory-date">2.	Just then TiEPitchfest was announced – We planned to participate and in record 45 days – We put together a working-prototype and business plan! </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" class="memory">
                        <div class="memory-container">
                            <div class="memory-date">3.	Cometh the PitchFest, Cometh the Zeal - we emerge in TOP 4 out of 48 startups across Karnataka, competing against funded start-ups – We were rightfully the Under-dogs! </div>
                           
                        </div>
                    </div>
                    <div data-aos="fade-right" class="memory">
                        <div class="memory-container">
                            <div class="memory-date">4.	Thanks to Ktech and TiE Mysuru, we got a sponsored incubation for 6 months at Ktech – We worked to perfect our business plan and designs and put together a completely in-house designed prototype to demonstrate our tech capability and competed at the Elevate Event!</div>
                         
                        </div>
                    </div>
                    <div data-aos="fade-left" class="memory">
                         <div  class="memory-container">
                            <div class="memory-date">5. But this journey of 6 months wasn’t easy, We did have our share of ups and down! </div>
                        </div> 
                    </div>
                    <div data-aos="fade-right" class="memory">
                        <div   class="memory-container">
                            <div class="memory-date">6.	We have since then showcased our work. This strengthened our resolute to solve the cleaning problems of India and come up with the best-in-class solutions! 	We are now at NIE and We are on constant lookout for Crazy-Caffeine dipped Engineers!   </div>
                        </div>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Journey; 