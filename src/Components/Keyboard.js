import { useRef, useState } from 'react';
import {mixVocals} from "../data/audioWords";

const KeyboardAudioWord = () => {      
    const [targetWord, setTargetWord] = useState(    {
        title: 'work it',
        link: 'high/1.mp3',
        id: 0,
      });
    const ipt = useRef();
    const targetAudio = useRef();
    const playChar = (event) => {
        for (let i = 0; i < mixVocals.length; i++) {
            if (mixVocals[i].kb == event.key) {
                setTargetWord(mixVocals[i]);
                targetAudio.current.pause();
                targetAudio.current.load();
                targetAudio.current.play();
            }            
        }    } 

    return ( 
    <div className="inline-block">            
        <input className= "w-60 h-12 m-0 p-0 border-2 border-yellow-300 rounded-r-lg font-bold bg-yellow-400 px-2 text-xl transition duration-300 ease-in-out placeholder-gray-400 text-black" ref={ipt} type="text" onKeyDown= {playChar} placeholder="Play With Keyboard" />          
        <audio ref={targetAudio}>
            <source src={targetWord.link} />
        </audio>  
    </div>     
    );
};
export default KeyboardAudioWord;

{/* <p>{targetWord.title}</p> */}