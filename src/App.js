import { useState } from 'react';
import './App.css';
import Word from "./Components/Word";
import RandomWord from "./Components/RandomWord";
import {highVocals, highLine1, highLine2, highLine3, highLine4, lowVocals, lowLine1, lowLine2, lowLine3, lowLine4, mixLine1, mixLine2, mixLine3, mixLine4, mixVocals} from "./data/audioWords";
import KeyboardAudioWord from './Components/Keyboard';
import PlayRestart from './Components/PlayRestart';

function App() {
  const [ visibleLow, setVisibleLow ] = useState(true);
  const [ visibleHigh, setVisibleHigh ] = useState(false);
  const [ typePitch, setTypePitch ] = useState('High Pitch');
  const [ lowState, setLowState ] = useState('block');
  const [ highState, setHighState ] = useState('hidden');

  const toggleLowHigh = () => {
    setVisibleLow(visibleLow === false ? true : false);
    setVisibleHigh(visibleHigh === false ? true : false);
    setTypePitch(typePitch === 'High Pitch' ? 'Low Pitch' : 'High Pitch');
    setLowState(lowState === 'hidden' ? 'block' : 'hidden');
    setHighState(highState === 'hidden' ? 'block' : 'hidden');
  }

  const lowClass = `low ${lowState} p-0 m-0`;
  const highClass = `high ${highState} p-0 m-0`;



  return (
    <div className="h-screen w-screen flex flex-col justify-around p-0 m-0">
      <div className="laptop h-screen hidden lg:flex flex-col justify-evenly">
        <div className="mb-5">
          <div className="mixLine1 flex justify-center mt-5 mb-2">          
            {mixLine1.map(el => 
            <Word title={el.title} 
            link= {el.link} 
            keyboard = {el.kb}
            type = {el.type}
            color={el.color}
            width={el.width}
            key={el.id}
            />
            )}
          </div>
          <div className="mixLine2 flex justify-center mb-2">          
            {mixLine2.map(el => 
            <Word title={el.title} 
            link= {el.link} 
            keyboard = {el.kb}
            type = {el.type}
            color={el.color}
            width={el.width}
            key={el.id}
            />
            )}
          </div>
          <div className="mixLine3 flex justify-center mb-2">          
            {mixLine3.map(el => 
            <Word title={el.title} 
            link= {el.link} 
            keyboard = {el.kb}
            type = {el.type}
            color={el.color}
            width={el.width}
            key={el.id}
            />
            )}
          </div>
          <div className="mixLine4 flex justify-center mb-2">          
            {mixLine4.map(el => 
            <Word title={el.title} 
            link= {el.link} 
            keyboard = {el.kb}
            type = {el.type}
            color={el.color}
            width={el.width}
            key={el.id}
            />
            )}
          </div>
        </div>  
        <div className="flex justify-center">
          <div className="left-image flex justify-center items-center">
            <img className="w-72 h-60 object-cover" src="images/daft-punk_left.gif" alt=""/>
          </div>
          <div className="mouse">
            <div className="mouse-line1 flex">
              <RandomWord array = {mixVocals} width="w-60" visible= {true} />
              <KeyboardAudioWord />
            </div>
            <div className="mouse-line2 h-44 flex justify-center items-center">
              <img className="w-60 h-44 object-cover block m-auto" src="images/daft-punk_center2.jpg" alt="" />
            </div>
            <div className="mouse-line3">
              <PlayRestart width="w-60" />
            </div>
          </div>
          <div className="right-image flex justify-center items-center">
            <img className="w-72 h-60 object-cover" src="images/daft-punk_right.gif" alt=""/>
          </div>
        </div>
      </div>         
      
      <div className="mobile h-screen p-0 m-0 block lg:hidden flex flex-col justify-evenly">      
        <div className={lowState}>
          <div className="lowLine1 flex justify-evenly mt-5 mb-3">          
              {lowLine1.map(el => 
              <Word title={el.title} 
              link= {el.link} 
              keyboard = {el.kb}
              type = {el.type}
              color={el.color}
              key={el.id}
              />
              )}
          </div>
          <div className="lowLine2 flex justify-evenly mb-3">          
              {lowLine2.map(el => 
              <Word title={el.title} 
              link= {el.link} 
              keyboard = {el.kb}
              type = {el.type}
              color={el.color}
              key={el.id}
              />
              )}
          </div>
          <div className="lowLine3 flex justify-evenly mb-3">          
              {lowLine3.map(el => 
              <Word title={el.title} 
              link= {el.link} 
              keyboard = {el.kb}
              type = {el.type}
              color={el.color}
              key={el.id}
              />
              )}
          </div>
          <div className="lowLine4 flex justify-evenly mb-3">          
              {lowLine4.map(el => 
              <Word title={el.title} 
              link= {el.link} 
              keyboard = {el.kb}
              type = {el.type}
              color={el.color}
              key={el.id}
              />
              )}
          </div>
        </div>  
        <div className={highClass}>
          <div className="highLine1 flex justify-evenly mt-5 mb-3">          
              {highLine1.map(el => 
              <Word title={el.title} 
              link= {el.link} 
              keyboard = {el.kb}
              type = {el.type}
              color={el.color}
              key={el.id}
              />
              )}
          </div>
          <div className="highLine2 flex justify-evenly mb-3">          
              {highLine2.map(el => 
              <Word title={el.title} 
              link= {el.link} 
              keyboard = {el.kb}
              type = {el.type}
              color={el.color}
              key={el.id}
              />
              )}
          </div>
          <div className="highLine3 flex justify-evenly mb-3">          
              {highLine3.map(el => 
              <Word title={el.title} 
              link= {el.link} 
              keyboard = {el.kb}
              type = {el.type}
              color={el.color}
              key={el.id}
              />
              )}
          </div>
          <div className="highLine4 flex justify-evenly mb-3">          
              {highLine4.map(el => 
              <Word title={el.title} 
              link= {el.link} 
              keyboard = {el.kb}
              type = {el.type}
              color={el.color}
              key={el.id}
              />
              )}
          </div>
        </div> 
        <div className="flex lg:hidden justify-center">
          <div className="mouse">
            <div className="mouse-line1 flex justify-center">
              <RandomWord array = {lowVocals} width="w-36" visible= {visibleLow} />
              <RandomWord array = {highVocals} width="w-36" visible= {visibleHigh}/>
              <button className="inline-block w-36 h-12 m-0 p-0 border-2 border-yellow-300 rounded-r-lg font-bold text-yellow-300 transition duration-300 ease-in-out hover:bg-yellow-300 hover:text-white" onClick={toggleLowHigh}>
              <p className="text-2xl m-0 p-0">{typePitch}</p>
              </button>
            </div>
            <div className="mouse-line2 h-32 flex justify-center items-center">
              <div className="left-image flex justify-center items-center">
                <img className="w-32 h-20 object-cover" src="images/daft-punk_left.gif" alt=""/>
              </div>
              <img className="w-32 h-22 object-cover block m-auto" src="images/daft-punk_center2.jpg" alt="" />
              <div className="right-image flex justify-center items-center">
                <img className="w-32 h-20 object-cover" src="images/daft-punk_right.gif" alt=""/>
              </div>
            </div>
            <div className="mouse-line3 mb-2">
              <PlayRestart width="w-36" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
