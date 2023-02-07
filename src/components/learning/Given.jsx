import React from 'react'
import './given.css'
import plot from '../assets/plotmap.png'
export default function given() {
  return (
    <div>
      <div className='headComponent'>
        <div className='imagesection'>
            <img src={plot} alt='/'/>
        </div>
        <div className='textarea'>
            <div className='textcontainer'>
            <h1>
            What do we even do.
            </h1>
            <p>
            Lifeskills is wholesome approach to life – The skillsets to navigate through life and build some epic shit! So hence, We do tech to non-tech workshops! (No, we don’t give engineering tuitions!) Because well, Life is never domain-specific – It’s Interdisciplinary
            </p>
            </div>
        </div>

      </div>
    </div>
  )
}
