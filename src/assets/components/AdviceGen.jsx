import React, { useEffect, useState } from "react";
import { getAdvice } from "../services/DataService";

const AdviceGen = () => {
  const [advice, setAdvice] = useState([]);

  const getNewAdvice = async () => {
    const newAdvice = await getAdvice();
    setAdvice(newAdvice);
  };

  useEffect(() => {
    getNewAdvice();
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-[270px]">
          <div className="advice-box shadow-sm shadow-black p-[20px] rounded-[20px]">
       
      <p className="id-txt flex tracking-wide justify-center mt-3">ADVICE #{advice.id}</p>
      <div className="h-[100px] max-h-[100px] mt-4">
        <h2 className="advice-txt text-white flex justify-center tracking-wide text-center">"{advice.advice}"</h2>
      </div>
      
      <div className="flex justify-center moveItems">
        <img className="desktop-display mt-[95px]" src="./src/assets/pattern-divider-desktop.svg" alt="pattern divider for desktop" />
        <img className="mobile-display mt-[95px]" src="./src/assets/pattern-divider-mobile.svg" alt="pattern divider for mobile" />
      </div>
      

    <div className="flex justify-center mt-[35px]">
      
      <button className="flex justify-center w-[60px] h-[60px] rounded-[100%] items-center button-style hover:shadow-[0px_0px_20px_0px_rgba(83,255,172)]" onClick={getNewAdvice}><img src="./src/assets/icon-dice.svg" alt="Dice Button" /></button>
    </div>
      
      

      </div>
      </div>
    </div>
  );
};

export default AdviceGen;
