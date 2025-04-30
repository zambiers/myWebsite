import { useState, useRef } from "react";
import MainNavbar from "./compents/MainPageNavBar";
import React from "react";
import "./App.css";

function ReadingsPage(){
    const [things, setThings] = useState([
        {
          id: '1',
          title: 'Gaming',
          description: "One of my first loves is gaming. It's the reason why I'm in CS. The link is just a random article about what CS and Gaming.",
          url: 'https://www.computersciencedegreehub.com/faq/how-does-computer-science-impact-games/'
        },
        {
          id: '2',
          title: 'Reading',
          description: "Currently, I'm reading the 'Shatter Me' series. My all time favorite series that I read was 'A Court of Thorns and Roses' by Sarah J. Maas",
          url:'https://sarahjmaas.com/a-court-of-thorns-roses-series/'
        },
        {
          id: '3',
          title: 'Food',
          description: 'Since my parents are from Iran, I grew up with Iran food. My favorite dishes are Ghormeh Sabzi, Kabob eh Koobideh, and Tadig. The link takes you to a recipe on how to make Ghormeh Sabzi. In my opinion, the easiest way to make it is just to ask your Persian friends where to buy some.',
          url: 'https://littlespicejar.com/ghormeh-sabzi/'
        },
        {
          id: '4',
          title: 'Raves',
          description: "My most recent on I went to was Sullivan King, but I'm thinking about going to Bass Canyon. The link takes you to my favorite set by Sara Landry who's nicknamed 'The Queen of Haus'.",
          url: 'https://www.youtube.com/watch?v=EIQlDpgAY5Y'
        },
        {
          id: '5',
          title: 'Sleep Token',
          description: "I have a weird love for this UK band. My current favorite song by them is Hypnosis. Since they're completely antonymous, it's best practice not to hunt down who are behind the masks...",
          url: 'https://en.wikipedia.org/wiki/Sleep_Token'
        },
        {
          id: '6',
          title: 'Magic The Gathering',
          description: "I've been playing for about 1 year now. Most of the time, I play with my roommate and boyfriend Commander (which takes hours to play), but recently I've been going to Zulu's Board Game Cafe to play Friday Night Magic.",
          url: 'https://en.wikipedia.org/wiki/Magic:_The_Gathering'
        },
        {
          id: '7',
          title: 'Rowing (Crew)',
          description: "For a couple years now, I enjoyed rowing. I know the UW does have rowing team (and there's a move about them). I would love to row again, but with a busy life, being on the water at 6 am will have to wait...I did make sure the link takes you to 'Boat's in the Boat' (aka the UW team that went to the Olympics)",
          url: 'https://www.imdb.com/title/tt1856080/'
        },
        {
          id: '8',
          title: 'Pets',
          description: "I have a weird love for animals. Currently, I have a (at the time of making this website) 12 year old Maltese named Moose. My favorite breeds of Cat are tied between a Maine Coon and Sphinx, and my favorite dog bread are also tied between Samoyed and Maltese. Fun Fact: The link takes you to a youtube video of why I love the Sphinx cats!  ",
          url: 'https://www.youtube.com/shorts/f4t9w2drcEo'
        },
        {
          id: '9',
          title: 'Plants',
          description: "I have a shit ton of house plants indoors and outdoors. My most favorite outdoor is currently Yennifer the Lavender since she hasn't given me any issues since I bought her. My favorite indoor plant is Gobi the Painter's Palette as I found her in a box labeled 'FREE' on the side of the road.",
          url: 'https://www.youtube.com/watch?v=1dOoRwvO3qY'
        },
        {
          id: '10',
          title: 'Cosplay',
          description: "One of my favorite hobbies is cosplaying. My most favorite cosplay is Daisy Mae from Animal Crossing New Horizons, and my least favorite is Winged Victory Mercy from OverWatch. The link takes you to an article about Emerald City Comic Con. Func fact: I've been going to ECCC since 2016!",
          url: 'https://www.emeraldcitycomiccon.com/en-us.html'
        },
        
      ]);

      const linkRefs = useRef([]);

      const handleKeyDown = (e, index) => {
        // Arrow down or right moves focus to next link
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          e.preventDefault();
          const nextIndex = (index + 1) % things.length;
          linkRefs.current[nextIndex].focus();
        }
        // Arrow up or left moves focus to previous link
        else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const prevIndex = (index - 1 + things.length) % things.length;
          linkRefs.current[prevIndex].focus();
        }
      };

      <h2>
          Want to know something cool about me? Here are some things about me I think you'd like to read. All links
          are the card titles so feel free to explore...
        </h2>
        
      return(
        <div>
          <h1>
            WOW! Another page!
          </h1>
          <p>This page holds some cool stuff about me. All the links (in the title) will
            take you to a website that you might learn more about whatever you clicked on. Some are serious, and
            some not soo much. Have Fun!! If you think this is fun hehe. 
          </p>
              <div className='grid-container'>
                      {things.map(item => (
                      <div key={item.id} className="grid-item">
                        <h3><a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer">
                            {item.title}
                        </a></h3>
                        <p>{item.description}</p>
                    </div>
                    ))}
                    </div>
          </div>   
      )
}

export default ReadingsPage