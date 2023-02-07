import React,{useEffect} from 'react'
import './mainpage.css'
import Aos from 'aos'
import BroomMain from '../assets/back_updated.png';
import { Carousel } from '@mantine/carousel';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.jpg'
// import img4 from '../assets/img4.jpg'
// import img5 from '../assets/img5.jpg'


const Mainpage = () => {
  useEffect( () => {
    Aos.init({duration:2000});
  },[]);
  
  return (
    <>
    <div className='Header1'>
      <div class="wrapper">
  <div data-aos="zoom-in-down" class="bg"> The Future of Cleaning Technology </div>
  <div data-aos="zoom-in-up" class="fg"> The Future of Cleaning Technology </div>
</div>

<article className='sideText'>
 
  <h2 >Invented by the young minds with a key of innovation in cleanliness
</h2>
<div className='img' data-aos="zoom-in-left" data-aos-duration="3000">
  <img src={BroomMain} />
</div>
</article>
</div>

    </>
  )
}

export default Mainpage
