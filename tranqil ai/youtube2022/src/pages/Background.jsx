import React from 'react'
import video1 from '../../img/video1.mp4'
import image1 from '../../img/image1.jpeg'
import image2 from '../../img/image2.jpeg'
import image3 from '../../img/image3.jpg'
import image4 from '../../img/image4.jpeg'
import image5 from '../../img/image5.jpeg'
import pause from '../Assets/pause_icon.png'


import '../../styles/background.css'

const Background = ({setPlayStatus, playStatus, heroCount}) => {

  if(playStatus){
    return(
      <video className='background fade-in' autoPlay loop muted>
        <source src={video1} type='video/mp4'/>
        <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause:''} alt="" />
      </video>
    )
  }
  else if(heroCount===0){
    return <img src={image1} className='background' alt=''/>
  }
  else if(heroCount===1){
    return <img src={image2} className='background' alt=''/>
  }
  else if(heroCount===2){
    return <img src={image3} className='background' alt=''/>
  }
  else if(heroCount===3){
    return <img src={image4} className='background' alt=''/>
  }
  else if(heroCount===4){
    return <img src={image5} className='background' alt=''/>
  }
  
}

export default Background