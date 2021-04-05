import { useRef, useState } from 'react';

const RandomWord = ({array, width, visible}) => {
    const [randomWord, setRandomWord] = useState(    {
        title: 'make it',
        link: 'high/2.mp3',
        id: 1,
      });
      const rand= useRef();
      const playRandom = () =>{
        setRandomWord(array[Math.floor(Math.random() * array.length)]);
        rand.current.pause();
        rand.current.load();
        rand.current.play();
      };

      const randomClass = width + " h-12 p-0 border-2 border-gray-400 rounded-l-lg font-bold text-gray-400 transition duration-300 ease-in-out hover:bg-gray-400 hover:text-white";
      const containerClass = `${visible ? 'inline-block': 'hidden' }`;

    return (
        
        <div className={containerClass}>
            
            <button className={randomClass} onClick={playRandom}>
                <p className="text-2xl m-0 p-0">Random</p>                    
            </button>
            <audio ref={rand}>
                <source src={randomWord.link} />
            </audio>            
        </div>
    );
};

export default RandomWord;

{/* <p className="uppercase text-sm m-0 p-0">{randomWord.title} </p> */}