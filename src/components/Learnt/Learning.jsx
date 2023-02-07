import React from 'react'
import './learning.css'
import lifeskills from '../../components/assets/lifeskills.png'


export default function Learning() {
  return (
    <div className='mainContainer'>
      <h1>
        What Have we Learnt?
      </h1>
      <div className='dividerSection'>
        <div className='textSection'>

       <p>
On a side-note, What we have realized and learnt till

now  Working on this project, revealed a lot gaps in our understanding of engineering and the skillsets

required to realize our ideas.<br/> These knowledge bases and skillsets are rather intuitive and require it’s

curriculum and content  beyond the conventional form of engineering curriculum – We want to solve this also while we are on our product journey.<br/>Along with this, There are a other fundamental aspects to life and anycompany – finances compliances and

understanding of how the market works – Things that we have learnt and continue learning and exploring.<br/> We want to share all of this with

everyone through ‘lifeskills’ A start-up aimed at equipping Us with some fundamental skillsets of life.<br/>

<span  class="btn-shine" target="_blank">Join the revolution!

</span>

</p>
        </div>
        <div className='imagepart'>
            <img src={lifeskills} alt='/'/>

        </div>
      </div>
    </div>
  )
}
