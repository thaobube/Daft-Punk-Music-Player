import { useRef, useState } from 'react';
const PlayRestart = ({width}) => {
    // hooks
  const song = useRef();
  const [buttonState, setButtonState] = useState('Play');
  const [playState, setPlayState] = useState(false);

  // pure
  const togglePlayPause = () => {
    setButtonState(buttonState === 'Play' ? 'Pause' : 'Play');
    setPlayState(playState === false ? true : false);
    if (playState) {
      song.current.pause();
    }else {
      song.current.play();
    }
  }

  const reStart = () => {
    song.current.currentTime = 0;
    song.current.play();
    setPlayState(true);
    setButtonState('pause');
  }
  const playClass = "inline-block " + width + " h-12 m-0 p-0 border-2 border-gray-400 rounded-l-lg font-bold text-gray-400 transition duration-300 ease-in-out hover:bg-gray-400 hover:text-white";

  const restartClass = "inline-block " + width + " h-12 m-0 p-0 border-2 border-yellow-300 rounded-r-lg font-bold text-yellow-300 transition duration-300 ease-in-out hover:bg-yellow-300 hover:text-white";

  return (
    <div className="flex justify-center">
          <audio ref={song}>
            <source src={'Dalf_Punk2.mp3'} />
          </audio>    

          <button className={playClass} onClick= {togglePlayPause}>
            <p className="text-2xl uppercase">{buttonState}</p>
          </button>
        
          <button className={restartClass} onClick= {reStart}>
          <p className="text-2xl uppercase">Restart</p>
          </button>

  </div>
 );
};

export default PlayRestart;