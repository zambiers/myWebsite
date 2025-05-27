import React from 'react';
import { useState } from 'react';
import IMG_5717 from './assets/IMG_5717.jpg';
import IMG_5718 from './assets/IMG_5718.jpg';
import IMG_5719 from './assets/IMG_5719.jpg';
import './App.css';

function PlantPage(){

 return (
   <>
     <div>
       <h1 classname ="navbar">
         This is a really interesting page about my some of
         my favorite house plants...
       </h1>


       <div className='image-container'>
          <img src = {IMG_5717}  className= "Plant" />
       </div>
       <h1>
        This is Denali..
       </h1>
       <h2>
        She is a Tradecentia Zebrina or a nicked-named the "Wondering Jew". Yes that is actually the nick-name 
        and yes I double-checked. 
       </h2>
       <p>
        What makes these really interesting is that the underside of the leaves are purple. They prefer bright, indirect lighting. Denali here is
        under a grow light and I think I've had her for a year and a half now. 
       </p>


       <div className='image-container'>
          <img src = {IMG_5718}  className= "Plant" />
       </div>
       <h1>
        This is Beyonce..
       </h1>
       <h2>
        A Jade Pothos
       </h2>
       <p>
        She sits next to a window on a book shelf since she loves the the sun. What makes these really fun is being able to 
        cut in between the nodes, plopping it into the soil, then watching it grow.
        They prefer all kinds of light, but I like to keep her some place sunny. 
       </p>

       <div className='image-container'>
          <img src = {IMG_5719}  className= "Plant" />
       </div>
       <h1>
        This is Platypus..
       </h1>
       <h2>
        The China Doll Plant that started my plant hobby.
       </h2>
       <p>
        For Persian New Year, we have Sabzi as part of the Halft-Seen (7 S) table. This plant was actually a gift from my mother and
        wher my love from plants started from. I do keep him next to the window where it's bright indirect sunlight and I love to make
        he's bushy, so I trim him when I get the chance. 
      </p>

      </div>
   
   </>
 )
};

export default PlantPage;