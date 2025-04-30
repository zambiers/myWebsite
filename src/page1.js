import React from 'react';
import { useState } from 'react';
import mainPhoto from './assets/mainPhoto.png';
import './App.css';

function FrontPage(){
//for the counter button
const [count, setCount] = useState(0)

//for the list 
 const [items, setItems] = useState([
   {id: "1", content: "Gaming"},
   {id: "2", content: "Reading"},
   {id: "3", content: "Food"},
   {id: "4", content: "Raves"},
   {id: "5", content: "Sleep Token"},
   {id: "6", content: "Magic The Gathering"},
 ]);


 const sortAlpha = () =>{
   const sorted = [...items].sort((a, b) =>
     a.content.localeCompare(b.content)
   );
   setItems(sorted);
 };

 const sortRand = () => {
   const shuffled = [...items];
   for(let i = shuffled.length - 1; i > 0; i--){
     const j = Math.floor(Math.random() * (i + 1));
     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
   }
   setItems(shuffled);
 };

 return (
   <>
     <div>
       <h1 classname ="navbar">
         This. This is a website. A website. Made by a student.
         That student is Avah. And this student goes to University of Washington
         Bothell...
       </h1>

       <div className='image-container'>
          <img src = {mainPhoto}  className= "mainPhoto" />
       </div>

  
   </div>
     <button className="nav-button" onClick={() => setCount((count) => count + 1)}>
        This is a counter button. Click me and the counter goes up. The count is {count}
      </button>

      <h3>
       This is a little list of a few things that I like within my life. 
       You can reorder them, if you want...
      </h3> 

       <ul className='hobby-list'>
           {items.map(item => (
           <li key={item.id} className="hobby-item">
             {item.content}
           </li>
           ))} 
       </ul>

       <button className="nav-button" onClick={sortRand}>
          Shuffle the List
            </button>
       

            <button className="nav-button" onClick={sortAlpha}>
                Alphabetize the List
            </button>
     <p>
         Originally made for CSS 480, but eventually would be turned into a portfolio website that 
         I can use on my resume.
     </p>
   
   </>
 )
};

export default FrontPage;