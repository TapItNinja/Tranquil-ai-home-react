import React from 'react';
import arrow from '../Assets/arrow_btn.png';
import play from '../Assets/play_icon.png';
import pause from '../Assets/pause_icon.png';
import '../../styles/hero.css';

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          {[0, 1, 2, 3, 4].map(index => (
            <li key={index} onClick={() => setHeroCount(index)} className={heroCount === index ? 'hero-dot orange' : 'hero-dot'}></li>
          ))}
        </ul>
        <div className="hero-play">
          <button className="download-button" onClick={() => setPlayStatus(!playStatus)}>
            Download
            <span className="download-icon">
              <img src={playStatus ? pause : play} alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;