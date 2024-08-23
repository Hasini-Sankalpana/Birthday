import React, { useEffect, useState } from 'react';
import './BirthdayWish.css';
import dino from '../assets/dino3.gif';
import dino2 from '../assets/dino2.gif';
import load from '../assets/loading.gif';
import back from '../assets/back3.png';
import mark1 from '../assets/mark1.jpg';
import mark2 from '../assets/mark2.jpg';
import mark3 from '../assets/mark3.jpg';
import mark4 from '../assets/mark4.jpg';
import mark5 from '../assets/mark5.jpg';
import mark6 from '../assets/mark6.jpg';
import song from '../assets/song3.mp3';


const BirthdayWish = () => {
  const [hearts, setHearts] = useState([]);
  const [showWish, setShowWish] = useState(false);
  const [loading, setLoading] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  

  useEffect(() => {
    if (showWish) {
      const fullText = `From the moment I first saw you, I knew you were something special 💞. Over the past two years, you’ve been the one who makes my heart race with just a smile 😊. Now that we’re together, you mean the world to me ❤. I’m so excited to celebrate your birthday with you, and I want it to be as amazing as you are 😘.

I’m so grateful for all the love and laughter you bring into my life every day. Seeing you grow and chase your dreams makes me incredibly proud and happy.

On your special day, I wish you all the happiness in the world 🌈✨, along with endless success and love. May this birthday mark the start of another wonderful year full of cherished moments and adventures together.

Happy birthday, my love ❤. Here’s to many more birthdays and joyful moments with you 💏. I love you more than words can say ❤.`;

      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
        if (index === fullText.length) {
          clearInterval(interval);
        }
      }, 50); // Adjust the delay (in milliseconds) between each character

      return () => clearInterval(interval);
    }
  }, [showWish]);

  useEffect(() => {
    if (showWish) {
      const interval = setInterval(() => {
        const newHeart = (
          <div
            key={Date.now()}
            className="heart"
            style={{ left: `${Math.random() * 100}%` }}
          ></div>
        );
        setHearts((hearts) => [...hearts, newHeart]);

        // Remove hearts after they complete the animation
        setTimeout(() => {
          setHearts((hearts) => hearts.slice(1));
        }, 4000); // Match this to the animation duration
      }, 1000); // Adjust interval to control heart spawn rate

      return () => clearInterval(interval);
    }
  }, [showWish]);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowWish(true);
    }, 2000); // Adjust the delay as needed
  };

  return (
    <div className="birthday-wish-container">
      {loading ? (
        <div className="loading-container">
          <img src={load} alt="Loading..." />
        </div>
      ) : showWish ? (
        <>
         <div className="head-img">
          <img src={dino} alt="Dinosaur Gif" />
          </div>
          <h1>Happy Birthday, <span>Sudu!</span></h1>
          <p>{displayedText}</p>
         <div className='back-img'>
          <img src={back} alt='' />
          </div>
          <div className="marquee-wrapper">
          <div className="marquee-container">
    
             <img src={mark2} alt="Marquee 2" />
             <img src={mark4} alt="Marquee 4" />
             <img src={mark1} alt="Marquee 1" />
             <img src={mark5} alt="Marquee 5" />
             <img src={mark3} alt="Marquee 3" />
             <img src={mark6} alt="Marquee 6" />
             
</div>
  </div>
          <div className="heart-container">{hearts}</div>
          <audio src={song} autoPlay loop>
          </audio>
        </>
      ) : (
        <div className='start'>
        <button className="reveal-button" onClick={handleClick}>
          Hey Nimeth, Click Me!
        </button>
          <img src={dino2} alt="Dinosaur Gif" />
          </div>
      )}
    </div>
  );
};

export default BirthdayWish;
