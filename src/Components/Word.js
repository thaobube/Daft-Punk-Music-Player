import {useRef} from 'react';

const Word = ({title, link, keyboard, color, type, width}) => {
    const word = useRef();
    const playThisWord = () => {
        word.current.play();
    }
    const buttonClass = "w-20 h-20 sm:w-24 sm:h-24 lg:"+ width +  " lg:h-24 m-0 p-0 border-2 border-" + color + "-500 rounded-lg font-bold text-" + color + "-600 transition duration-300 ease-in-out hover:bg-" + color + "-600 hover:text-white lg:mr-1 lg-ml-1 xl:mr-2 xl:ml-2";
    return (
        <div className="p-0" >   
            <audio ref={word}>
                <source src={link} />
            </audio>     
            <button className={buttonClass} onClick={playThisWord}>
                <div className="m-0 p-0">
                    <p className="text-xs hidden lg:block m-0 p-0">({type})</p>
                    <p className="uppercase text-sm m-0 p-0">{title} </p>
                    <p className="text-4xl hidden lg:block m-0 p-0">{keyboard}</p>
                </div>
		    </button>
        </div>
    );
};

export default Word;


// return (
//     <div className="card flex flex-wrap justify-center w-1/2 xl:w-1/4 lg:w-1/6">
//       <div className={myClass}>
//         <div className="text-xs capitalize">{props.fullName}</div>
//         <div className="text-base">{props.number}</div>
//         <div className="text-3xl capitalize">{props.firstLetter}</div>
//         <div className="text-xs">{props.weight}</div>
//       </div>
//     </div>
// );